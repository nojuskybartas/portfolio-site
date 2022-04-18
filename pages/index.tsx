import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useRouter } from 'next/router'
import { getCodeData, getCodeImage } from '../src/lib/github'

const Home: NextPage = () => {

  const router = useRouter();
  const [codeSnap, setCodeSnap] = useState<any>(null)

  useEffect(() => {
    getCodeData(router)
    .then(data => {
      getCodeImage(data)
      .then(url => setCodeSnap(url))
    })
  }, [])

  return (
    <div className='bg-white h-screen w-full'>
      <Head>
        <title>Nojus Kybartas: Home</title>
        <meta name="Nojus Kybartas' portfolio" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img src={codeSnap} className='w-full h-fit'/>

    </div>
  )
}

export default Home
