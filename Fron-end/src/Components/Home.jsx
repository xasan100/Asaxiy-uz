import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToCart } from "./features/cartSlice";
import { productsApi, useGetAllProductsQuery } from "./features/ProductsApi";


const Home = () => {
   const history=useHistory()
   const  dispatch=useDispatch()
   const {data,error,isLoading} = useGetAllProductsQuery()

   const handleAddToCart =(val)=> { 
      dispatch(addToCart(val))
      history.push('/cart')
   }
   
    return ( 
   <div className="home-container">
   {isLoading ? <p>Loading...</p>:error ? <p> An error occured...</p>:
   <>
   <h2>New Arrivals</h2>
   <div className="products">
   {data?.map((val)=>{ 
    return (
   <div key={val.id} className="product">
   <h3>{val.name}</h3> 
   <img src={val.image} alt={val.name} />    
   <div className="details">
    <span>{val.desc}</span>
    <span className="price">${val.price}</span>
   </div>
   <button onClick={()=>handleAddToCart(val)}>Add TO Cart</button>
   </div>)
})}
   </div>
   </>}
   </div> );
}
 
export default Home;