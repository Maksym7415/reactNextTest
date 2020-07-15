// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {delay} from '../post/serverSideProps';

export default async (req, res) => {
  res.statusCode = 200;
  await delay(5000)
  res.json({ name: 'John Doe' })
}

