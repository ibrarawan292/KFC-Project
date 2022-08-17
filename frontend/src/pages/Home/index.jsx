import React, {useEffect} from 'react'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Slider from '../../components/Slider'

import { useSelector, useDispatch} from 'react-redux'
import { getAllProducts } from '../../redux/actions/productAction'

const Home = () => {

  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.products);
  console.log(products)
  useEffect(()=>{
    dispatch(getAllProducts())
  }, [])

  return (
    <div className="home-wrapper">
      <Header />
      <Slider />
      <div className="lead-text">
        <h3>SIGNATURE BOXES</h3>
      </div>
      <div className="card-wrapper">
        <div className="row">
            {
              products && products.map(product=><Card product={product}/>)
            }
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home