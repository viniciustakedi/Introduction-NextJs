import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [number, setNumber] = useState(0);

  const SumClicks = () => {
    setNumber(number + 1);
  }

  const ClearClicks = () => {
    setNumber(0);
  }

  return (
    <div className={styles.container}>
      <Head>
        <html lang="pt-bt" />
        <title>Testing my first app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.title}>
        <h1 id={styles.Firsth1}>My first application in</h1>
        <h1 id={styles.Secondh1}>Next.js</h1>
      </div>

      <div className={styles.alignItens}>
        <div className={styles.screen}>
          <h1>{number}</h1>
        </div>
        <div className={styles.button}>
          <input id={styles.styleButton} type="button" onClick={SumClicks} value="Click here to add!"/>
          <input id={styles.styleButton} type="button" onClick={ClearClicks} value="Click here to clear!"/>
        </div>
      </div>


    </div>
  )
}
