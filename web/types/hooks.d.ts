interface Route {
  href: string;
  title: string;
  icon: ReactElement;
  isActive: boolean;
}

type Environment = "client" | "server";

export type PageTitleHook = (environment: Environment) => string;
export type RoutesHook = (username: string, route: string) => Route[];
