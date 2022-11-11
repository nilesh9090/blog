import Image from 'next/image'
import Link from 'next/link';
import Head from 'next/head'
import Blogitem from '../components/Blogitem';
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Author from '../components/_child/Author';
import SwiperCore, { Autoplay } from 'swiper'
import { sortByDate } from '../utils'
import { useState } from 'react';

function post({ frontmatter, slug }) {

  return (
    <div className="p-4 lg:flex lg:items-center">
      <Image width={800} height={500} className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl " src={frontmatter.cover_image} alt={slug} />

      <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
        <p className="text-sm text- ow-500 uppercase">{frontmatter.date}</p>

        <Link href={`/blog/${slug}`} >
          <a className="block mt-4 text-2xl font-semibold underline-offset-4 text-gray-800 hover:underline dark:text-white md:text-3xl">{frontmatter.title}</a>
        </Link>

        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
          {frontmatter.desc}
        </p>

        <Link href={`/blog/${slug}`} ><a className="inline-block mt-2 text-yellow-500 underline hover:text-yellow-400">Read more</a></Link>

        <Author />
      </div>
    </div>
  )
}


export default function Home({ posts }) {
  SwiperCore.use([Autoplay]);

  let latest = [];
  let latest2 = [];
  for (let i = 0; i < 6; i++) {

    if (i < 3) {
      latest.push(posts[i])
      latest2.push(posts[i])
    } else if (i < posts.length && i < 6) {
      latest2.push(posts[i])
    }
  }



  return (
    < >
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="title" content="powermycode" />
        <meta name="description" content="powermycode is website where you can find all thing related to programming and other facts . Here You will get tips and advise related to the various topics" />
        <meta name="author" content="Nilesh Darji" />
        <meta name="keywords" content="next js,powermycode,powermycode blog,powermycode nextjs,Nilesh darji,blog website" />
        <link rel="canonical" href="https://powermycode.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://powermycode.vercel.app/" />
        <meta property="og:title" content="powermycode" />
        <meta property="og:description" content="powermycode is website where you can find all thing related to programming and other facts . Here You will get tips and advise related to the various topics" />
        <meta property="og:image" content="https://powermycode.vercel.app/powermycode.jpg" />
        <meta name="google-site-verification" content="xy1FyOILRbps4rSWe35dSmQ7AKIUFfrHPQTinrwfEUw" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://powermycode.vercel.app/" />
        <meta property="twitter:title" content="powermycode" />
        <meta property="twitter:description" content="powermycode is website where you can find all thing related to programming and other facts . Here You will get tips and advise related to the various topics" />
        <meta property="twitter:image" content="https://powermycode.vercel.app/powermycode.jpg" />

        <meta name="robots" content="index, follow" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5/" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>Power My Code | Home </title>
      </Head>
      <section className="py-16 ">
        <div className="container mx-auto md:px-10 select-none  ">
          <h2 className="font-bold text-4xl pb-12 text-center">Latest Blog</h2>

          <Swiper
            slidesPerView={1}
            autoplay={{
              delay: 3000
            }}
            loop={true}
            className='dark:bg-dark-bg-2 bg-gray-200'
          >
            {latest.map((data) => {
              return <SwiperSlide key={data.slug}>{post(data)} </SwiperSlide>
            })}

          </Swiper>

        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:justify-start justify-center -m-4">
            {latest2.map((data) => {
              return <Blogitem src={data.slug} title={data.frontmatter.title} desc={data.frontmatter.desc} img={data.frontmatter.cover_image} key={data.slug} date={data.frontmatter.date} />
            })}
          </div>
          {posts.length > 6 && <Link href={'/blogs'}>
            <a className="text-primary inline-flex items-center mt-4 absolute right-5 md:mb-2 lg:mb-0 ">More Blogs
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </Link>}
        </div>
      </section>

    </>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}