import Nav from "./nav"

const Home = () =>{
    return (
        <>
        <div>This is Home</div>
        {/* <Nav></Nav> */}
        <div className="home_div">
            <div>
                <div className="sub_div">
                    <p>Title</p>
                    <p>Price</p>
                </div>
                <div className="change"> 
                <form className="AddToCartForm">
                    <input type="submit" name="Add To Cart" value="Add To Cart"></input>
                </form>
                </div>
                
            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
        </>
    )
}

export default Home;