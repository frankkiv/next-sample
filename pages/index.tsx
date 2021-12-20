import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
    <div className="text-3xl font-bold underline">
      Hello world! Test
    </div>
  </Layout>
  )
}

export default Home
