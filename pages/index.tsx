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
        <header className={styles.header}>
          <h1>EcoDrone</h1>
          <Image src="/assets/logo.jpg" alt="EcoDrone" width='437' height='424' />
        </header>
        <div className={styles.squareContainer}>
          <div className={styles.square}>
            <Parallax className="custom-class" x={[-100, 0]} tagOuter="figure">
              <Image src="/assets/trator.png" alt='drone' width='320' height='100'  />
            </Parallax>
          </div>
          <div className={styles.square}>
            <h1>
              Teste
            </h1>
          </div>
        </div>

      </div>

      <div className={styles.page}>
        teste
        <div className={styles.plants}>
          <Parallax className="custom-class" x={[-100, 100]} y={[-30, 30]} tagOuter="figure">
            <Image src="/assets/drone.png" alt='drone' width='92' height='63'  />
          </Parallax>
        </div>
      </div>
    </div>
  )
}
