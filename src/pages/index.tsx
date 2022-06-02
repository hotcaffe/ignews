import { GetStaticProps } from "next";
import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";
import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: string;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Ig.news</title>
      </Head>
      <main className={styles.content}>
        <section className={styles.announce}>
          <p>👏 Hey, welcome</p>
          <h1>
            News about <br />
            the <mark>React</mark> world
          </h1>
          <p>
            Get acess to all the publications <br />
            <mark>for {product.amount} month</mark>
          </p>
          <SubscribeButton />
        </section>
        <div className={styles.avatar}>
          <img
            src="/images/avatar.svg"
            alt="Image of a lady coding on her desk"
          />
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1L61vaJbVWXA0SXTevtw14r7");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 60 //24 hours
  };
};
