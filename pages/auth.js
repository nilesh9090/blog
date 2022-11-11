import { useEffect, useState } from 'react'
import { marked } from 'marked';
import hljs from 'highlight.js';
import Link from 'next/link';
import Head from 'next/head';

const Auth = () => {
    const [IsAdmin, setIsAdmin] = useState(false);

    const [Markdown, setMarkdown] = useState('');
    const [Content, setContent] = useState('');
    marked.setOptions({
        highlight: function (code, lang) {
            return hljs.highlight(lang, code).value;
        },
        gfm: true,
    });

    useEffect(() => {
        if (window) {
            setIsAdmin(localStorage.getItem('admin') === '@NILESH003');
            if (sessionStorage.getItem('content')) {
                setContent(sessionStorage.getItem('content'));
                setMarkdown(marked(sessionStorage.getItem('content')))
                sessionStorage.removeItem('content');
            }
        }
    }, []);

    const changeContent = (e) => {
        setMarkdown(marked(e.target.value));
        setContent(e.target.value);
    }
    const Upload = () => {
        fetch(`/api/md`, {
            method: 'POST',
            body: Content,
        });
        alert('file written successfully')
    }
    return (
        <>
            <Head>
                <meta name="robots" content="noindex, nofollow" />
                <title>Power My Code | Dashboard </title>
            </Head>
            {IsAdmin ?

                <div className='flex flex-col gap-2 py-5'>
                    <h1 className='text-3xl m-2 text-center'>Welcome Nilesh</h1>
                    <div className='p-3 w-full gap-2 flex flex-col md:flex-row md:justify-center' >
                        <textarea name="md" id="md" spellCheck={false} value={Content} onChange={changeContent} className='text-lg p-2 md:w-1/2 rounded-md border-none outline-none ring-1 focus:outline-yellow-300' cols="50" rows="20"></textarea>
                        <div dangerouslySetInnerHTML={{ __html: Markdown }} className='p-3 md:w-1/2 bg-gray-100  dark:bg-dark-bg-2 prose  dark:prose-pre:bg-dark-bg prose-pre:bg-gray-900 prose-yellow dark:prose-invert'></div>
                    </div>
                    <div className='flex px-20 gap-3'>
                        <Link href='/dashboard'><a className='p-2 w-2/3 mx-auto my-6 text-black rounded-md bg-yellow-400 text-center'>Back </a></Link>
                        <button type='submit' onClick={Upload} className='p-2 w-2/3 mx-auto my-6 text-black rounded-md bg-yellow-400'>Submit</button>
                    </div>
                </div>


                :
                <h1>you are not allowed to see this page</h1>

            }

        </>
    )
}

export default Auth