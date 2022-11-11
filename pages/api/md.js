// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'
import matter from 'gray-matter';

export default async  function handler(req, res) {
    if (req.method === 'POST') {
        const { data: frontmatter } = matter(req.body);
        fs.promises.writeFile(`posts/${frontmatter.slug}.md`, req.body);
    }
}
