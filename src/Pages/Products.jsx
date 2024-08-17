import React ,{ useState , useEffect} from 'react';
import Data from '../../Data.json';
import Product from '../Components/Product';
import axios from 'axios';
 
const Products = () => {

    const [products , setProducts] = useState(Data.products);

      //const [products,setProducts] = useState();
  
      //const {id} = useParams();
      /* useEffect (() => {
          axios.get('https://drive.google.com/file/d/1mBA4azCOF4ouh5iVie-Pe7F_CX2d-gYD/view')
          .then(res => setProducts(res.products))
          .catch(error => console.error(error));
       },[])*/
       
  return (
    <div className='container mt-5' >
    <div className='row row-cols-1 row-cols-md-3 g-4 h-50'>
        {
            products.map( p =>(
                <Product product={p} />
            ))
        }
    </div>
    </div>
  )
}

export default Products