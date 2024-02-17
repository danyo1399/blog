import { Metadata } from "next";

export type MetaData = {
  title: string,
  description: string,
  createDate: string;
  lastModifiedDate: string;
} & Omit<Metadata,'title' | 'description' >;
