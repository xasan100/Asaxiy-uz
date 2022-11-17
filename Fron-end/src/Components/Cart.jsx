import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Cart = () => {
const cart=useSelector((state=>state.cart ))

    return ( 
        <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.cartItems.length===0 ? <div className="cart-empty">
        <p>Your cart is currently empty </p>
        <div className="statrt-shopping">
         <Link to={"/"}> <span>
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
         <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
         </svg>
          Start Shopping </span> </Link>
        </div>
        </div>:
        <div>
    <div className="titles">
    <div className="prduct-title">Product </div>
    <h3 className="price"> Price</h3>
    <h3 className="quantity"> Quantity</h3>
    <h3>Total</h3>
    </div>
    <div className="cart-itmes">
        {cart.cartItems?.map((cartItem)=>{
            return (
                <div key={cartItem.id} className="cart-item">
                  <div className="cart-product">
                    <img src={cartItem?.image} alt={cartItem?.name} />
                    <div>
                        <h3>{cartItem.name}</h3>
                        <h3>{cartItem.desc}</h3>
                        <button>Remove</button>
                    </div>
                  </div>
                  <div className="cart-product-price">${cartItem.price}</div>
                  <div className="cart-product-quantity"> 
                 <button>-</button> 
                 <div className="count"> {cartItem .cartQuantity}</div>
                 <button>+</button>
                 </div>
                    <div className="cart-product-total-price">
                        ${cartItem.price* cartItem.cartQuantity}
                    </div>
                </div>
            )
        })}
    </div>
    <div className="cart-sumary">
        <div className="clear-cart">Clear Cart</div>
        <div className="cart-checout">
            <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.CartTotalAmount}</span>
            </div>
            <p>Taxes and shipping caculated at checout</p>
            <button>Checkout</button>
            <div className="continue-shopping">
             <Link to={"/"}> <span>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
             <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
             Continue Shopping </span> </Link>
             </div>
             </div>
         </div>
        </div> }
        </div>
     );
}
    
export default Cart;