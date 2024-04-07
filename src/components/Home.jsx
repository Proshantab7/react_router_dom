import  { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
    let navigation = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
             navigation('*');
    }, 3000);

    }, [])
  return (
    <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <h1>Home Page</h1>
    </div>
  )
}

export default Home