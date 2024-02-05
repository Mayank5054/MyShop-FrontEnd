import Nav from "./nav"
import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5354/feed/products")
            .then(
                result => {
                    setData(result.data.data);
                    console.log(result);
                }
            ).catch(err => {
                console.log(err);
            })
    }, [])

    const addIntoCart = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <>
            <div>This is Home</div>
            {/* <Nav></Nav> */}
            {data.map(x =>
                <div className="home_div" key={x._id}>
                    <div>
                        <div className="sub_div">
                            <p>{x.title}</p>
                            <p>{x.price}</p>
                        </div>
                        <div className="change">
                            <form className="AddToCartForm" onSubmit={addIntoCart}>
                                <input type="hidden" value={x._id}></input>
                                <input type="submit" name="Add To Cart" value="Add To Cart"></input>
                            </form>
                        </div>
                    </div>
                </div>
            )
            }

        </>
    )
}

export default Home;