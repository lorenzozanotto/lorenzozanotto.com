import type { NextPage } from 'next'
import MainWindow from '../components/MainWindow'

const Home: NextPage = () => {
  return (
    <div className='h-screen bg-dark-gray'>
      <MainWindow />
    </div>
  )
}

export default Home
