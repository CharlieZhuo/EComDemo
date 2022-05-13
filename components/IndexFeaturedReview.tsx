import { productReview } from "../types/productReview";

export default function IndexFeaturedReview({
  FeaturedReviews,
}: {
  FeaturedReviews: productReview[];
}) {
  return (
    <div>
      {FeaturedReviews.map((r) => (
        <div key={r.sys.id}>
          <div>{r.fields.userName}</div>
          <div>{r.fields.reviewContent}</div>
          <div>{r.fields.reviewDate}</div>
        </div>
      ))}
    </div>
  );
}
