import Head from 'next/head';
import Example from './exampleQuery';
import styles from '../styles/pageStyles/index.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Resports</title>
      </Head>
      <h2>Home</h2>
      <main className={styles.main}>
        {/* Uncomment the Example component to see the GAPI request in action */}
        {/* <Example /> */}
        <div>
          Hello
        </div>
      </main>
    </>
  )
}
