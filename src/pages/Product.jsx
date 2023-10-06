import styles from "./Product.module.css";
import PageNav from "../components/PageNav";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="src/assets/product.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About Travel Diary.</h2>
          <p>
            Travel Diary is a web application that allows users to keep track of
            their adventures and to share their stories with the world.
          </p>
        </div>
      </section>
    </main>
  );
}
