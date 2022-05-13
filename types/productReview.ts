import { EntryFields, Metadata, Sys } from "contentful";

export interface productReview {
  sys: Sys;
  fields: {
    userName: string;
    reviewDate: string;
    reviewContent: string;
    stars: string;
  };

  metadata: Metadata;
}
