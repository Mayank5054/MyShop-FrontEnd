import React from "react";
import ReactDOM  from "react-dom";
import Nav from "./components/nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import AllProduct from "./components/AllProducts";
import Cart from "./components/Cart";
import Order from "./components/Order";
import Login from "./components/Login.";
const App = () => {
    const divText = "hello Variable !"
    return (
        <>
        
        <BrowserRouter>
        <Nav></Nav>
        <Routes>
            <Route index path="/home" element={<Home></Home>}></Route>
            <Route exact path="/allProduct" element={<AllProduct></AllProduct>}></Route>
            <Route exact path="/cart" element={<Cart></Cart>}></Route>
            <Route exact path="/order" element={<Order></Order>}></Route>
            <Route exact path="/login" element={<Login></Login>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

ReactDOM.render(
<App />,
document.querySelector("#root")
);