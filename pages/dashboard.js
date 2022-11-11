import React, { useEffect, useState } from 'react'
import fs from 'fs'
import Link from 'next/link';
import path from 'path'
import matter from 'gray-matter';
import { sortByDate } from '../utils'
import Head from 'next/head';
const Dashboard = ({ posts }) => {
    const [Admin, setAdmin] = useState(false)
    const [Pass, setPass] = useState('')
    useEffect(() => {
        if (window) {
            if (localStorage.getItem('admin') === '@NILESH003') {
                setAdmin(true);
            }
        }
    }, [])
    const changePass = (e) => {
        setPass(e.target.value);
    }

    const submit = () => {
        if (Pass === '@NILESH003') {
            setAdmin(true);
            localStorage.setItem('admin', '@NILESH003');
        } else {
            alert('Wrong Password !!');
        }
    }
    return (
        <>
            <Head>
                <meta name="robots" content="noindex, nofollow" />
                <title>Power My Code | Dashboard </title>
            </Head>
            {Admin ?
                <>

                    <h1 className="text-center my-4 text-3xl">Dashboard</h1>

                    <div className="overflow-x-auto relative py-10">
                        <table className="w-full md:w-[80%] mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-dark-bg-2 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        Title
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Date
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Edit
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Delete
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Live
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map((data) => {

                                    return (
                                        <tr className="bg-white border-b dark:bg-comp-bg dark:border-gray-700" key={data.slug}>
                                            <th scope="row" className="py-4 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {data.frontmatter.title}
                                            </th>
                                            <td className="py-4 px-6">
                                                {data.frontmatter.date}
                                            </td>
                                            <td onClick={() => {
                                                if (confirm('are you sure to delete >>' + data.frontmatter.title + '<<')) {
                                                    fetch('/api/delete', {
                                                        method: 'POST',
                                                        body: data.slug,
                                                    });

                                                }
                                            }} className="cursor-pointer text-yellow-600 underline underline-offset-2 hover:text-yellow-500 py-4 px-6">
                                                Delete
                                            </td>

                                            <td onClick={() => {
                                                sessionStorage.setItem('content', data.markdownWithMeta);
                                                window.location.pathname = 'auth';
                                            }} className="cursor-pointer text-yellow-600 underline underline-offset-2 hover:text-yellow-500 py-4 px-6">
                                                Edit
                                            </td>

                                            <Link href={'/blog/' + data.slug}><td className="cursor-pointer text-yellow-600 underline underline-offset-2 hover:text-yellow-500 py-4 px-6">
                                                See
                                            </td></Link>
                                        </tr>
                                    )
                                })}


                            </tbody>
                        </table>
                    </div>
                    <Link href={'/auth'}>
                        <div className='w-full md:w-[80%] cursor-pointer mx-auto p-2 mb-7 text-center  text-black rounded-md bg-yellow-400'>Add One</div>
                    </Link>

                </>
                :

                <div className='p-5 my-10 flex flex-col w-full mx-auto gap-3 md:w-[60%]'>
                    <input type="password" className='p-2 rounded-md border-none outline-none ring-1 focus:outline-yellow-300' value={Pass} onChange={changePass} placeholder='Password' />
                    <button type='submit' className='p-2 text-black rounded-md bg-yellow-300' onClick={submit}>submit</button>

                </div>}
        </>
    )
}

export default Dashboard

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
            markdownWithMeta
        }
    })

    return {
        props: {
            posts: posts.sort(sortByDate),
        },
    }
}