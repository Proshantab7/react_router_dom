
import {useParams} from 'react-router-dom'
const Product = () => {
    let { id } = useParams();
  return (
    <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>Product ---{id}</div>
  )
}

export default Product