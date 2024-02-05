const Cart = () => {
    return (
        <>
       <div className="cart">
        <div className="sub_class_cart">
            <div>
                <p>title</p>
                <p>value</p>
            </div>
            <form>
                <input type="submit" value="Delete"></input>
            </form>
        </div>
        <div className="sub_class_cart">

        </div>
        <div className="sub_class_cart">

        </div>
        <div className="sub_class_cart">

        </div>
       </div>
       <form>
        <input type="submit" value="Place Order"></input>
       </form>
        </>
    )
}

export default Cart;