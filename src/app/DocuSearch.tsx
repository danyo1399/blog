import Script from "next/script";

export function DocuSearch() {
  return (
    <>
      <Script async src="https://cdn.jsdelivr.net/npm/@docsearch/js@3"></Script>
      <Script src="/docsearch.js"></Script>
    </>
  );
}
