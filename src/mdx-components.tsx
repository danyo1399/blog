import { ArrowRightIcon } from "lucide-react";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mt-10 mb-10 -mx-5 px-5 py-10 bg-slate-200 dark:bg-slate-800">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl dark:text-amber-400 text-amber-600 font-bold mt-5 mb-1">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h2 className="text-lg dark:text-indigo-400 text-indigo-600 font-semibold mt-5 mb-1">
        {children}
      </h2>
    ),
    p: ({ children }) => <p className="mb-4">{children}</p>,
    img: ({ children, ...rest }) => <img className="mx-auto my-10" {...rest} />,
    ul: ({ children }) => (
      <ul className="list-outside pl-5 my-5 space-y-3">{children}</ul>
    ),
    li: ({ children }: any) => (
      <li className="flex gap-4 items-start">
        <ArrowRightIcon className="min-w-5 w-5 mt-1 text-blue-500" />
        <div>{children}</div>
      </li>
    ),
    ...components,
  };
}
