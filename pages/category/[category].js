import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import GoodCard from '../../components/category/goodCard';
import MainPage from '../../components/main';

function Goods(props) {
  const router = useRouter();
  const { category } = router.query;
  const {data} = props;

  return (
      <MainPage>
        <div className='content'>
          {
            data && data.map((item) => (
              <GoodCard
                key={item.id}
                image={`${category}-${item.id}`}
                name={item.name}
                description={item.description}
                model={item.model}
              />
            ))
          }
        </div>

        <style jsx>{`
          .content {
            display: flex;
            flex-wrap: wrap;
          }
        `}</style>
      </MainPage>
  )
}


export async function getServerSideProps({params}) {
  const res = await fetch(`http://localhost:3000/api/post/getGoods/${params.category}`)
  const data = await res.json()

  return { props: { data } }
}

export default Goods;