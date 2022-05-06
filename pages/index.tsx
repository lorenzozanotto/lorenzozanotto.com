import type { NextPage } from 'next'
import Head from 'next/head'
import MainWindow from '../components/MainWindow'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Lorenzo Zanotto | Engineer & Designer based in Italy</title>
    </Head>
    <div className='h-screen bg-dark-gray'>
      <MainWindow />
    </div>
    </>
  )
}

export default Home
