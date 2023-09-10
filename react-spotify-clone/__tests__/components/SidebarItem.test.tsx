
import { render, screen } from '@testing-library/react';
import SidebarItem from '@/components/SidebarItem'
import { IRoute } from '@/hooks/useRoutes';
import { exampleRouteElement } from '@/__utils__/sidebar.const';

it('should render an active sidebar item', () => {
    // given
    const props: IRoute = exampleRouteElement;
    render(<SidebarItem {...props} />)

    // when
    const sidebarItem: HTMLAnchorElement = screen.getByTestId('cy-sidebar-item');
    const icon: HTMLOrSVGElement = screen.getByTestId('cy-sidebar-item-icon');
    const label: HTMLParagraphElement = screen.getByTestId('cy-sidebar-item-p');

    // then
    expect(sidebarItem).toBeInTheDocument();
    expect(sidebarItem).toHaveClass('text-white')
    expect(sidebarItem).toHaveAttribute('href', props.href)
    expect(icon).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(props.label);
})

it('should render an inactive sidebar item', () => {
    // given
    const props: IRoute = { ...exampleRouteElement, active: false }
    render(<SidebarItem {...props} />)

    // when
    const sidebarItem: HTMLAnchorElement = screen.getByTestId('cy-sidebar-item');
    const icon: HTMLOrSVGElement = screen.getByTestId('cy-sidebar-item-icon');
    const label: HTMLParagraphElement = screen.getByTestId('cy-sidebar-item-p');

    // then
    expect(sidebarItem).toBeInTheDocument();
    expect(sidebarItem).not.toHaveClass('text-white')
    expect(sidebarItem).toHaveAttribute('href', props.href)
    expect(icon).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(props.label);
})
