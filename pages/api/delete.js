// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'

export default async  function handler(req, res) {
    if (req.method === 'POST') {
        fs.promises.unlink(`posts/${req.body}.md`)
    }
}
