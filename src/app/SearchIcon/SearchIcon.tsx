'use client';
import { DocSearch } from "@docsearch/react";
import './style.css';
import { useEffect } from "react";
export function SearchIcon() {
  useEffect(() => {
const ele = document.createElement('div');
    ele.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
`
    const docEle = document.querySelector('.DocSearch-Button');
    docEle?.appendChild(ele);
    return () => {
      docEle?.removeChild(ele);
    }
  }, [])
  return (
    <>
      <style>
        
      </style>
    <DocSearch
      appId="0W1BPOHWSS"
      indexName="danyo"
      apiKey="7babc6b4324e147a94f323a6b6f3b8fe"
    >
    </DocSearch>
    </>
  );
}
