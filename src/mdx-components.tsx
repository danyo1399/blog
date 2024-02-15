import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mt-10 mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-lg font-bold mt-5 mb-3">{children}</h2>
    ),
    p: ({ children }) => <p className="my-4">{children}</p>,
    img: ({ children, ...rest }) => <img className="mx-auto" {...rest}/>,
    ul: ({ children }) => (
      <ul className="list-outside pl-5 my-5 list-disc space-y-3">{children}</ul>
    ),
    ...components,
  };
}
