import { PUBLIC_BACKEND_URL } from "$env/static/public";

type Method =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "OPTIONS"
  | "HEAD"
  | "TRACE"
  | "CONNECT"
  | "PATCH";

interface Options<S, B> {
  method: Method;
  body: B;
  searchParams: S;
  customFetch(
    input: URL | RequestInfo,
    init?: RequestInit | undefined,
  ): Promise<Response>;
}

export default async function queryClient<
  T,
  S = Record<string, any>,
  B = Record<string, any>,
>(endpoint: string, options?: Partial<Options<S, B>>) {
  const { method = "GET", body, searchParams, customFetch } = options ?? {};
  const url = new URL(endpoint, PUBLIC_BACKEND_URL);
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (searchParams)
    Object.keys(searchParams).forEach((searchParamKey) =>
      url.searchParams.set(
        searchParamKey,
        searchParams[searchParamKey as keyof typeof searchParams],
      ),
    );

  try {
    const opts = {
      method,
      body: JSON.stringify(body),
      headers,
    };

    const response = customFetch
      ? await customFetch(url, opts)
      : await fetch(url, opts);

    if (!response.ok) throw new Error(await response.text());

    if (response.headers.get("Content-Type")?.includes("application/json")) {
      return (await response.json()) as T;
    } else {
      return (await response.text()) as T;
    }
  } catch (error) {
    // Print the error message on the server, only trigger the +error.svelte on the client.
    // Extra validation to make sure actual error objects are never printed in the browser.
    if (typeof window !== "undefined") throw error;

    if (error instanceof TypeError)
      console.error("A network error was thrown with message:", error.message);
    else if (error instanceof SyntaxError)
      console.error("Failed to parse JSON body:", error.message);
    else if (
      typeof DOMException !== "undefined" &&
      error instanceof DOMException &&
      error.name === "AbortError"
    )
      console.error("Request was aborted with message:", error.message);
    else if (error instanceof Error)
      console.error(
        "A new instance of `Error` was thrown with message:",
        error.message,
      );
    else console.error("An unknown error was thrown:", error);

    if (error instanceof Response)
      switch (error.status) {
        case 400:
          console.error("The client sent a bad response.");
          break;
        case 404:
          console.error("Resource not found.");
          break;
        case 500:
          console.error("Internal Server Error");
      }

    throw error; // triggers +error.svelte
  }
}
