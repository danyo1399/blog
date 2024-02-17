import { Metadata } from "next";

export type MetaData = {
  key: string,
  title: string,
  description: string,
  createDate: string;
  lastModifiedDate: string;
} & Omit<Metadata,'title' | 'description' >;
