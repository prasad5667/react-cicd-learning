import AddToCart from "./AddToCart";

const Header = () => {
    return (
        <>
            <header>
                <div className="logo">ShopEase</div>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>
                <AddToCart/>
            </header>
        </>
    )
}

export default Header;