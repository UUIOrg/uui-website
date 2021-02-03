import { useRouter } from 'next/router'
import React from 'react';
 
export default function Home() {
  const Router = useRouter();
  React.useEffect(() => {
    Router.push('/form');
  },[])
  return (
    <h1>Hello</h1>
  )
}
