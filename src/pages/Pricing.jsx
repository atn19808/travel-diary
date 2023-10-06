// Uses the same styles as Product
import styles from "./Product.module.css";
import PageNav from "../components/PageNav";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>Get started on your travel diary today.</p>
        </div>
        <img src="/price.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
