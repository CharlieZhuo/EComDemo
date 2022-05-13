import styles from ".HeroContent.module.css";
import { product } from "../types/product";
export default function HeroContent({ heroProduct }: { heroProduct: product }) {
  const fields = heroProduct?.fields;
  return (
    <div className={styles.container}>
      <div className={styles.image}></div>
      <div className={styles.discription}>
        <p>{fields.title}</p>
        <p>{fields.priceInDollar}</p>
      </div>
    </div>
  );
}
