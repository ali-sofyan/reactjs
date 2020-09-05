import React, { useState, useEffect, Component }  from 'react';
import {useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/action/cart";
import '../App.css';
import '../index.css';
import { connect } from 'react-redux';


function ProductContent(props){
    const [count, setCount] = useState(0);
    let query = new URLSearchParams(useLocation().search);

    const dispatch = useDispatch();

    let productID = query.get("productId");
    let productName = query.get("productName");
    let productImage = query.get("productImg");
    let productPrice = query.get("price");
    let productTierprice = query.get("tierPrice");
    let productQty = count;
    
    const addtoCart  = (productID, productName, productImage, productPrice, productQty) => {
    dispatch(
        addProduct({
        id: productID,
        name: productName,
        img : productImage,
        price : productPrice,
        qty : productQty
        })
    );
    };
    console.log(props);
    return (
        <div className="product-page">
        <div className="main">
            <div className="product-images">
                <img src={productImage} alt={productName}/>
            </div>
            <div className="product-info">
                <div className="name">{productName}</div>
                <div className="price">
                    <span className="tier"><del>{productTierprice}</del></span>
                    <span className="normal">{productPrice}</span>
                </div>
  
                <div className="qty-box">
                    <span className="qty-ket"> QTY : </span>
                    <button onClick={() => setCount(count - 1)}><span>-</span></button>        
                    <span className="qty"> {count} </span>
                    <button onClick={() => setCount(count + 1)}><span>+</span></button>
                </div>

                <div className="action">
                    <button onClick={() => addtoCart(query.get("productId"), productName, productImage, productPrice, count )}>Add to Cart</button>
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
        </div>

    )
}

const mapsStateProps = (state) => {
    return {
        order: state.cart
    }
}



export default connect(mapsStateProps)(ProductContent);
