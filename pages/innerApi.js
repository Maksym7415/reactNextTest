import useSWR from 'swr';
import React, { useState } from 'react';
import fetcher from '../helpers/fetcher';

export default function Person() {
  const [counter, setCounter] = useState(1);
  const { data, error } = useSWR('/api/hello', fetcher);

  const handleSetCounter = () => setCounter(counter + 1);
  
  return (
  <div>
    <div>Inner API</div>
    <div>{data && data.name}</div>
    <div>{counter}</div>
    <button onClick={handleSetCounter}>Click</button>
  </div>
  )
};