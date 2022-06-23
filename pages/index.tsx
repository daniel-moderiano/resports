import Head from 'next/head';
import Example from './exampleQuery';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Resports</title>
      </Head>

      <main>
        {/* Uncomment the Example component to see the GAPI request in action */}
        {/* <Example /> */}
        <h2>Home</h2>
      </main>

      <footer>
      </footer>
    </div>
  )
}
