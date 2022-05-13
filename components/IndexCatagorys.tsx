import { productCatagory } from "../types/productCatagory";

export default function IndexCatagorys({
  catagorys,
}: {
  catagorys: productCatagory[];
}) {
  return (
    <div>
      {catagorys.map((c) => {
        return <div key={c.sys.id}>{c.fields.title}</div>;
      })}
    </div>
  );
}
