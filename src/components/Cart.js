import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utilis/cartSlice";
import {Link} from "react-router-dom"
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearItems = ()=>{
    dispatch(clearCart());
  }
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 && <h1 className="font-bold text-green-500"><Link to = "/">Add items to cart</Link></h1>}
      <ItemList itemCards={cartItems} />
      <button className="border border-black bg-red-600 hover:bg-blue-500 rounded-md p-2" onClick={handleClearItems}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
