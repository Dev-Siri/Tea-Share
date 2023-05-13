type Method = "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "HEAD" | "TRACE" | "CONNECT" | "PATCH";

export type QueryClient = <T>(
  endpoint: string,
  options: Partial<{
    method: Method;
    body: Record<string, any>;
    cache: RequestCache;
    revalidate: number;
    searchParams: Record<string, any>;
  }>
) => Promise<T>;
