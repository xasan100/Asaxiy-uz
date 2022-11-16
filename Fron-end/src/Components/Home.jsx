import { useSelector } from "react-redux";
import { productsApi, useGetAllProductsQuery } from "./features/ProductsApi";

const Home = () => {
const {data,error,isLoading} = useGetAllProductsQuery()
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
   <button>Add TO Cart</button>
   </div>)
})}
   </div>
   </>}
   </div> );
}
 
export default Home;