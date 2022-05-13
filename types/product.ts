import { Asset, Metadata, Sys } from "contentful";
import { productReview } from "./productReview";

export interface product {
  sys: Sys;
  fields: {
    title: string;
    priceInDollar: number;
    detail: number;
    subType: [[]];
    mainImages: [Asset];
    reviews: [productReview];
  };
  metadata: Metadata;
}
