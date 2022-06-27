import Head from 'next/head';
import styles from '../styles/pageStyles/index.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Resports</title>
      </Head>
      <h2>Home</h2>
      <main className={styles.main}>
        <div>
          Hello
        </div>
      </main>
    </>
  )
}


