import { product } from "../types/product";
import Image from "next/image";

export default function IndexBestSellers({
  bestSellers,
}: {
  bestSellers: product[];
}) {
  return (
    <div>
      {bestSellers.map((p) => (
        <div key={p.sys.id}>
          {/* <Image ></Image> */}
          <div>{p.fields.title}</div>

          <div>{p.fields.priceInDollar}</div>

          {/* average review */}
        </div>
      ))}
    </div>
  );
}
