import Head from 'next/head'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Inmacula Cruz - Nicaraguan Painter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="text-6xl font-bold">
          Inmaculada Cruz - Nicaraguan Painter
        </h1>
      </main>
      <Footer />
    </div>
  )
}

export default Home
