import type { NextPage } from 'next'
import Head from 'next/head'
import Login from '../components/home/login'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Moglet for Restaurants</title>
        <link rel="icon" href='/moglet_logo.png' />
      </Head>
      <main>
        <Login />
      </main>
    </div>
  )
}

export default Home