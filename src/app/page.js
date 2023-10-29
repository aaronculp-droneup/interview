'use client'

// Libraries

import Image from 'next/image'
import { useCallback, useState } from 'react'

// Dependencies 

import styles from './page.module.css'
import Browns from '../../public/browns.jpeg';
import Cavs from '../../public/cavs.png';
import Guardians from '../../public/guardians.jpg';

// Public

export default function Home() {
  const [imageSet] = useState([Browns, Cavs, Guardians]);
  const [currentImg, setCurrentImg] = useState(0);

  const changeImg = useCallback((e) => {
    const { id } = e.currentTarget

    if (id === 'previous') {
      setCurrentImg((prevIndex) =>
        prevIndex - 1 < 0 ? imageSet.length - 1 : prevIndex - 1)
    } else {
      setCurrentImg((prevIndex) =>
        prevIndex + 1 === imageSet.length ? 0 : prevIndex + 1)
    }

  }, [currentImg])

  return (
    <main className={styles.main}>
      <button id="previous" onClick={(e) => changeImg(e)}>
        Previous Image
      </button>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src={imageSet[currentImg]}
          alt="Next.js Logo"
          width={180}
          height={37}
        />
      </div>
      <button id="next" onClick={(e) => changeImg(e)}>
        Next Image
      </button>
    </main>
  )
}
