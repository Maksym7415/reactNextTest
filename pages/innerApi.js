import useSWR from 'swr'
import React, { useState } from 'react';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Person() {
  const [counter, setCounter] = useState(1);
  const { data, error } = useSWR('/api/hello', fetcher);

  const handleSetCounter = () => setCounter(counter + 1)
  return (
  <div>
    <div>Inner API</div>
    <div>{data && data.name}</div>
    <div>{counter}</div>
    <button onClick={handleSetCounter}>Click</button>
  </div>
  )
}