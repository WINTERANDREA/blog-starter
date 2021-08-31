import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Script from 'next/script'


export default function Index({ allPosts }) {
  const heroPost = []
  const morePosts = []

  
  allPosts.forEach(element => {
    if(element.title === "Il mondo Blockchain ti appassiona?"){
      heroPost.push(element)
    } else if(element.title === "Promemoria sintassi .md") {
      //pass
    } else{
      morePosts.push(element)
    }
  });
  
  return (
    <>
      <Layout>
        <Head>
          <title>Blockchain. | Blog per aspiranti sviluppatori</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost[0].title}
              coverImage={heroPost[0].coverImage}
              date={heroPost[0].date}
              author={heroPost[0].author}
              slug={heroPost[0].slug}
              excerpt={heroPost[0].excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
