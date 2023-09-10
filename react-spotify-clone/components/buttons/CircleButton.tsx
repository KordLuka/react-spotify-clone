
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface CircleButtonProps {
  icon: IconType;
  type?: 'button' | 'submit';
  onClick?: () => void;
  secondary?: boolean;
}

const CircleButton: React.FC<CircleButtonProps> = ({ icon: Icon, type = 'button', onClick, secondary }) => {
  return (
    <button
      onClick={onClick}
      data-testid="cy-circle-button"
      type={type}
      className={twMerge(`
        rounded-full
        p-2
        flex
        items-center
        justify-center
        hover:opacity-75
        transition
      `,
        secondary ? 'bg-white' : 'bg-black')
      }>
      <Icon
        data-testid="cy-circle-button-icon"
        size={35}
        className={`${secondary ? 'text-black' : 'text-white'}`}
      />
    </button>
  );
};

export default CircleButton;
