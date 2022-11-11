import React from 'react'
import Image from 'next/image'
import fs from 'fs'
import Link from 'next/link'
import { sortByDate } from '../utils'
import matter from 'gray-matter'
import path from 'path'
import Head from 'next/head'
const post = ({ slug, frontmatter }) => {
  return (
    <>
      <div className="  z-10 flex justify-center  ">
        <Image width={600} height={400} className='rounded-md' src={frontmatter.cover_image} alt={slug} />
      </div>

      <div className="relative hover:scale-110 transition-all z-20 md:max-w-sm   max-w-xs9 p-6 mx-auto md:-mt-20 bg-gray-100 rounded-md shadow dark:bg-dark-bg-2">
        <Link href={`/blog/${slug}`}><a className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
          {frontmatter.title}
        </a></Link>

        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
          {frontmatter.desc}
        </p>

        <p className="mt-3 text-sm text-yellow-500">{frontmatter.date}</p>
      </div>
    </>
  )
}
const Blogs = ({ posts }) => {

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="title" content="Powermycode | Blog" />
        <meta name="description" content="powermycode is website where you can find all thing related to programming and other facts . Here You will get tips and advise related to the various topics" />
        <meta name="author" content="Nilesh Darji" />
        <meta name="keywords" content="next js,powermycode,powermycode blog,powermycode nextjs,Nilesh darji,blog website" />
        <link rel="canonical" href="https://powermycode.vercel.app/blogs" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://powermycode.vercel.app/blogs" />
        <meta property="og:title" content="powermycode" />
        <meta property="og:description" content="powermycode is website where you can find all thing related to programming and other facts . Here You will get tips and advise related to the various topics" />
        <meta property="og:image" content="https://powermycode.vercel.app/powermycode.jpg" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://powermycode.vercel.app/blogs" />
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
        <title>Power My Code | Blogs </title>
      </Head>
      <h1 className='md:text-3xl text-2xl font-semibold text-center p-4'>Powermycode Blogs ( {posts.length} )</h1>
      <section className="bg-white dark:bg-dark-bg">
        <div className=" md:px-6 px-4  py-10 mx-auto">
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((data) => {
              return <div key={data.slug}>{post(data)}</div>
            })}
          </div>
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
export default Blogs