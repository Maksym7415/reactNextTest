import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GoodCard from '../../components/category/goodCard';
import Navbar from '../../components/navbar';

function Goods() {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div className='good-card-container'>
      <Navbar/>
      <GoodCard/>

      <style jsx>{`
        .good-card-container {
          display: flex;
        }
      `}</style>
    </div>
  )
}

export default Goods