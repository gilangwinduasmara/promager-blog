import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../../components/header'
import Image from 'next/image'
import PostCard from '../../components/post-card'
import styles from '../../styles/Home.module.css'
import axios from 'axios'
import { serialize } from 'next-mdx-remote/serialize'

const Home: NextPage = ({articles}) => {
  return (
    <div className="bg-purple-100">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>    
      <main className={styles.main}>
        <div className="flex justify-center items-center flex-col">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {
              articles.map((article:any) => (
                <PostCard key={article.id} title={article.title} description={article.description} slug={article.slug} />
              ))
            }
          </div>
          <div className="mt-8 grid gap-1 grid-cols-4 text-purple-900">
            <div className="bg-purple-200 rounded-md container mx-auto my-auto text-center">
              <a className="p-2" href="#">Prev</a>
            </div>
            <div className="bg-purple-200 rounded-md container mx-auto my-auto text-center">
              <a className="p-2" href="#">1</a>
            </div>
            <div className="shadow-xl bg-white rounded-md container mx-auto my-auto text-center">
              <a className="p-2" href="#">2</a>
            </div>
            <div className="shadow-xl bg-white rounded-md container mx-auto my-auto text-center">
              <a className="p-2" href="#">Next</a>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div>
          Powered by <div className="text-purple-800 font-bold ml-1">Promager</div>
        </div>
      </footer>
    </div>
  )
}
export async function getStaticPaths() {
  const categories = await axios.get(`http://localhost:1337/categories`);
  const paths = categories.data.map((categories:any) => ({
    params: { slug: categories.slug },
  }))
  return { paths, fallback: false }
}

export const getStaticProps = async ({params}) => {
  const res = await axios.get(`http://localhost:1337/categories?slug=${params.slug}`);
  return {
    props: {
      articles: res.data[0].articles,
    },
  }
}

export default Home