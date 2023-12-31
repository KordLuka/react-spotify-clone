import { Subscription, UserDetails } from "@/types/user";
import {
  useSessionContext,
  useUser as useSupaUser,
  User
} from "@supabase/auth-helpers-react";
import { createContext, useContext, useEffect, useState } from "react";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import React from "react";

type UserContextType = {
  accessToken: string | null;
  user: User | null;
  userDetails: UserDetails | null;
  isLoading: boolean;
  subscription: Subscription | null;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export interface Props {
  [propName: string]: any;
  children: React.ReactNode
}

export const MyUserContextProvider = (props: Props) => {
  const {
    session,
    isLoading: isLoadingUser,
    supabaseClient: supabase,
  } = useSessionContext();

  const user = useSupaUser();
  const accessToken = session?.access_token ?? null;
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);

  const getUserDetails = () => supabase.from("users").select("*").single();
  const getSubscription = () =>
    supabase
      .from("subscriptions")
      .select("*, prices(*, products(*))")
      .in("satus", ["trailing", "active"])
      .single();

  useEffect(() => {
    if (user && !isLoadingData && !userDetails && !subscription) {

      setIsLoadingData(true);

      Promise.allSettled([getUserDetails(), getSubscription()]).then(
        ([userDetailsPromise, subscriptionPromis]: [
          PromiseSettledResult<PostgrestSingleResponse<UserDetails>>,
          PromiseSettledResult<PostgrestSingleResponse<Subscription>>
        ]) => {
          if (userDetailsPromise.status === "fulfilled") {
            setUserDetails(userDetailsPromise.value.data);
          }

          if (subscriptionPromis.status === "fulfilled") {
            setSubscription(subscriptionPromis.value.data);
          }

          setIsLoadingData(false);
        }
      );
    } else if (!user && !isLoadingUser && !isLoadingData) {
      setUserDetails(null);
      setSubscription(null);
      setIsLoadingData(false);
    } else {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isLoadingData]);

  const value = {
    accessToken,
    user,
    userDetails,
    isLoading: isLoadingUser || isLoadingData,
    subscription,
  };

  return (<UserContext.Provider value={value} {...props} />);
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a MyUserContextProvider.`);
  }
  return context;
};
