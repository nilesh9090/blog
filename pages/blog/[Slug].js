import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import Author from '../../components/_child/Author';
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter';
import Link from 'next/link';
import { marked } from 'marked';
import hljs from 'highlight.js';
import { IoIosArrowForward } from 'react-icons/io'
import { sortByDate } from '../../utils';
const Slug = ({ frontmatter, Slug, content, posts }) => {


  marked.setOptions({
    highlight: function (code, lang) {
      return hljs.highlight(lang, code).value;
    },
    gfm: true,
  });


  while (posts.length > 5) {
    posts.pop();
  }

  const LatestPost = ({ data }) => {
    return (
      <div>
        <Link href={`/blog/${data.slug}`}><h3 className="text-yellow-500 cursor-pointer capitalize hover:underline">{data.frontmatter.title}</h3></Link>
        <div className="block mt-2 font-medium text-gray-700  hover:text-gray-500 dark:text-gray-400 ">
          {data.frontmatter.desc}
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700" />
      </div>
    )
  }

  let markdown = marked(content);

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="title" content={frontmatter && frontmatter.title} />
        <meta name="description" content={frontmatter.desc} />
        <meta name="author" content="Nilesh Darji" />
        <meta name="keywords" content={frontmatter.keyword.map((item) => { return item })} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://powermycode.vercel.app/blog/" + Slug} />
        <meta property="og:title" content={frontmatter && frontmatter.title} />
        <meta property="og:description" content={frontmatter.desc} />
        <meta property="og:image" content={'https://powermycode.vercel.app' + frontmatter.cover_image} />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content={"https://powermycode.vercel.app/blog/" + Slug} />
        <meta property="twitter:title" content={frontmatter && frontmatter.title} />
        <meta property="twitter:description" content={frontmatter.desc} />
        <meta property="twitter:image" content={'https://powermycode.vercel.app' + frontmatter.cover_image} />
        <link rel="canonical" href={"https://powermycode.vercel.app/blog/" + Slug} />
        <meta name="robots" content="index, follow" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5/" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>{frontmatter && frontmatter.title}</title>
      </Head>

      <section className="bg-white dark:bg-dark-bg">
        <div className="container lg:px-6  mx-auto">
          <div className="lg:flex  lg:-mx-6">
            {/* body  */}
            <div className="lg:w-3/4 pb-10 dark:bg-dark-bg-2 bg-gray-100">
              <div className="bg-gray-200 z-10 mb-4 dark:bg-dark-bg-2">
                <div className="container flex items-center px-6 py-4 mx-auto overflow-y-auto whitespace-nowrap">

                  <Link href="/" className="text-gray-600 cursor-pointer dark:text-gray-200">
                    Home
                  </Link>
                  <span className="mx-3 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                    <IoIosArrowForward />
                  </span>

                  <Link href="/blogs" className="text-gray-600 dark:text-gray-200 hover:underline">
                    Blogs
                  </Link>
                  <span className="mx-3 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                    <IoIosArrowForward />
                  </span>

                  <Link href={`/blog/${Slug}`} className="text-gray-600 dark:text-gray-200 hover:underline">
                    {Slug}
                  </Link>

                </div>
              </div>

              {/* content  */}
              <div className='lg:px-6'>
                <div className='px-4'>
                  <Image className="object-cover object-center w-full h-80 xl:h-[34rem]  rounded-xl" width={1000} height={600} src={frontmatter.cover_image} alt={Slug} />
                </div>
                <div className='lg:px-10 px-3'>
                  <p className="mt-6 text-sm text-yellow-500 uppercase">{frontmatter.date}</p>
                  <h1 className="max-w-lg mt-4 text-4xl font-semibold leading-tight text-gray-800 dark:text-white">
                    {frontmatter.title}
                  </h1>
                  <Author />
                  {content && <article className='max-w-full  py-10  lg:max-w-4xl md:max-w-3xl  prose md:prose-lg lg:prose-xl   dark:prose-pre:bg-dark-bg prose-pre:bg-gray-900 prose-yellow prose-pre:shadow-lg dark:prose-invert prose-pre:select-all' dangerouslySetInnerHTML={{ __html: markdown }} ></article>}
                  <Link href={'/'}><a className='w-28 mx-5 bg-yellow-500 px-4 py-2 hover:bg-primary shadow-md text-gray-900 rounded'>Go Back</a></Link>
                </div>
              </div>

            </div>

            {/* latestPost  */}
            <div className="mt-8 lg:w-1/4 py-10 lg:mt-0  lg:px-6  px-3">
              <h2 className='text-2xl my-2 text-center font-semibold'>Latest Blogs</h2>
              {posts.map((data) => {
                return (
                  data.slug !== Slug && <LatestPost data={data} key={data.slug} />
                )
              })}
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      Slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { Slug } }) {

  const markdownWithMeta = fs.readFileSync(
    path.join('posts', Slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  // Get slug and frontmatter from posts
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdown = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )
    const { data: frontmatter } = matter(markdown)
    return {
      slug,
      frontmatter,
    }
  })


  return {
    props: {
      frontmatter,
      Slug,
      content,
      posts: posts.sort(sortByDate)
    },
  }
}


export default Slug
