import Head from 'next/head';
import styles from '../styles/pageStyles/index.module.css';
import { ApiClient } from '@twurple/api';
import authProvider from 'config/twitchAPI';

const apiClient = new ApiClient({ authProvider });

async function searchChannels(query: string) {
  const channels = await apiClient.search.searchChannels(query);
  return channels;
}



export default function Home() {
  searchChannels('smash').then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
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
