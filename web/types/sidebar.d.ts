export interface SidebarProps {
  isActive: string;
  isOnPostInfo?: {
    visible: boolean;
    title: string;
    _id?: string;
    href: string;
    postedBy: string;
  };
}

export interface SidebarOptionProps {
  href: any;
  title: string;
  icon: JSX.Element;
  isActive: boolean;
}
