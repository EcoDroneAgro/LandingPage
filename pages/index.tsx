import Head from 'next/head'
import Image from 'next/image'

import { Parallax } from 'react-scroll-parallax'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eco Drone</title>
      </Head>

      <div className={styles.page}>
        <h1>Eco Drone</h1>
        <div className={styles.plants}>
          <Parallax className="custom-class" x={[-100, 100]} y={[-30, 30]} tagOuter="figure">
            <Image src="/assets/drone.png" alt='drone' width='92' height='63'  />
          </Parallax>
        </div>
        <h1>Eco Drone</h1>
      </div>

      <div className={styles.page}>
        teste
      </div>
    </div>
  )
}
