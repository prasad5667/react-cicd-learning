import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const AddToCart = () => {
    const cartSelector = useSelector((state) => state.cart);   
    // console.log(cartSelector.items);
    
    return (
        <>
            <div className="cart">
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="cart-count">{cartSelector?.items.length ? cartSelector?.items.length : 0}</span>
            </div>
        </>
    )
}

export default AddToCart;