import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ externalPostData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Blog</h1>
        <div className={styles.grid}>
          <Link href="/posts/post-satu">
            <div className={styles.card}>
              <h3>First Post</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry...
              </p>
            </div>
          </Link>
          <Link href="/posts/post-kedua">
            <div className={styles.card}>
              <h3>Second Post</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry...
              </p>
            </div>
          </Link>
          {externalPostData.map((data) => {
            return (
              <Link href={data.link}>
                <div className={styles.card} key={data.id}>
                  <h3>{data.title}</h3>
                  <p>{data.excerpt}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
export async function getStaticProps() {
  const apiURL = "http://localhost:3001/posts";
  const response = await fetch(apiURL);
  const data = await response.json();

  return {
    props: {
      externalPostData: data,
    },
  };
}