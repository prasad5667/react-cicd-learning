import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearAllItems } from "./redux/slice";
import { useEffect } from "react";
import { fetchProducts } from "./redux/productSlice";

const Product = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts())
    }, []);
    const productSelector = useSelector((state) => state.products.items);
    console.log(productSelector);
    const cartSelector = useSelector((state) => state.cart);
    console.log(cartSelector.items);
    return (
        <>
            <div className="grid">
                {

                    productSelector?.products.length && productSelector?.products.map((item) => (
                        <div className="product-box" key={item.id}>
                            <img src={item.thumbnail} alt="product-image" />
                            <div className="content">
                                <div className="title">{item.title}</div>
                                <div className="brand">{item.brand}</div>
                                <div className="price">{item.price}</div>
                                <div className="rating">{item.rating}</div>
                                {
                                    cartSelector?.items.find(cartItem => cartItem.id === item.id) ?
                                         <button onClick={() => dispatch(removeItem(item))} className="remove-cart-btn">
                                            <FontAwesomeIcon icon={faMinus} /> Remove from Cart
                                        </button>
                                        :
                                        <button onClick={() => dispatch(addItem(item))} className="add-cart-btn">
                                            <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
                                        </button>
                                }

                            </div>
                        </div>

                    ))
                }


            </div>
            {/* </div> */}
        </>
    )
}

export default Product;