import { useRouter } from 'next/router';

function Posts() {
  const router = useRouter()
  const { id } = router.query

  return <div>Post: {id}</div>
}

export default Posts