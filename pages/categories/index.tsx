import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../../components/header'
import Image from 'next/image'
import PostCard from '../../components/post-card'
import styles from '../../styles/Home.module.css'
import axios from 'axios'
import Link from 'next/link'

const Home: NextPage = ({articles, categories}) => {
  return (
    <div className="bg-purple-100">
      <Head>
        <title>Promager</title>
        <meta name="description" content="Promager" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>    
      <main className={styles.main}>
        <div className="flex justify-center items-center flex-col">
          {
            categories.map((category) => (
              <div key={category.id} className="mb-8">
                <div className="flex justify-between">
                  <h2>{category.name}</h2>
                  <Link href={`/categories/${category.slug}`}>
                    <a className="text-purple-800 hover:text-purple-300">
                      More
                    </a>
                  </Link>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
                  {
                    category.articles.map((article:any) => (
                      <PostCard key={article.id} title={article.title} description={article.description} slug={article.slug}/>
                    ))
                  }
                  {[...Array(3 - category.articles.length)].map((x, index) =>
                    <div key={index} className="flex justify-center items-center">
                      <div className="w-2 h-2 bg-purple-900 rounded-full">
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          }
          
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

export const getStaticProps = async () => {
  const res = await axios.get('http://localhost:1337/categories');
  const categories = res.data.map((category) => {
    category.articles = category.articles.slice(0, 3);
    return category;
  })
  return {
    props: {
      articles: res.data,
      categories
    },
  }
}

export default Home
