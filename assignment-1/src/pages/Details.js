import React, { useState, useEffect, Component }  from 'react';
import {useLocation, Link } from "react-router-dom";
import '../App.css';
import '../index.css';

function ProductContent(){
    const [count, setCount] = useState(0);
    let query = new URLSearchParams(useLocation().search);
    return (
        <div className="main">
            <div className="product-images">
                <img src={query.get("productImg")} alt={query.get("productName")}/>
            </div>
            <div className="product-info">
                <div className="name">{query.get("productName")}</div>
                <div className="price">
                    <span className="tier"><del>{query.get("tierPrice")}</del></span>
                    <span className="normal">{query.get("price")}</span>
                </div>

                <div className="qty-box">
                    <span className="qty-ket"> QTY : </span>
                    <button onClick={() => setCount(count - 1)}><span>-</span></button>        
                    <span className="qty"> {count} </span>
                    <button onClick={() => setCount(count + 1)}><span>+</span></button>
                </div>

                <div className="action">
                    <Link className="checkout" to="/cart">Add to Cart</Link>
                </div>

                <div className="description">
                    <div className="desc-title">Description</div>
                    <div className="desc-content">
                        Featuring a cinch closure concealed by a slender top flap, the Iona backpack unites everyday practicality with clean design. The scaled down Herschel Little America™ Mid-Volume backpack is inspired by classic mountaineering style and constructed for everyday use.

                        <li> 15" laptop sleeve and internal key clip</li>
                        <li> Adjustable drawstring closure</li>
                        <li> Clip fastened adjustable webbing straps</li>
                        <li> Reinforced base</li>
                    </div>
                </div>
            </div>
        </div>

    )
}

function Cart() {
  return (
    <div className="product-page">
        <ProductContent/>
    </div>
  );
}




export default Cart;
