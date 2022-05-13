import { Sys, Metadata } from "contentful";

export interface productCatagory {
  sys: Sys;
  fields: {
    title: string;
    discription: string;
  };
  metadata: Metadata;
}
