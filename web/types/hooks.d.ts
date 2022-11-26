interface Route {
  href: string;
  title: string;
  icon: ReactElement;
  isActive: boolean;
}

export type PageTitleHook = () => string;
export type RoutesHook = (username: string, route: string) => Route[];
