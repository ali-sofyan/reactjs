import React, { useState, useEffect, Component }  from 'react';
import '../App.css';
import '../index.css';
import ImgProduct1 from '../product/product1.jpg';
import ImgProduct2 from '../product/product2.jpg';
import ImgProduct3 from '../product/product3.jpg';

const product = [
    { productTitle: "Amayn Pinstripe Dress", tierPrice: "Rp. 300.000", price: "Rp. 150.000", imgSrc: ImgProduct1},
    { productTitle: "Tolrae Gingham Sleeve", tierPrice: "Rp. 350.000", price: "Rp. 200.000", imgSrc: ImgProduct2},
    { productTitle: "Mignon Printed Skirt", tierPrice: "Rp. 350.000", price: "Rp. 150.000", imgSrc: ImgProduct3}
]

function CartContent(){
    return (
        <>
            <div className="main">
                <div className="product-section">
                    {product.map((order, index) => (
                    <li key={index} class="product-info">
                        <img src={order.imgSrc} className="imgProduct"></img>
                        <div className="titleProduct">
                            <h1>{order.productTitle}</h1>
                            <h3 className="priceProduct">{order.price}</h3>
                        </div>
                    </li>
                    ))}
                </div>
            </div>
            <div class="sidebar">
                <div className="total">
                    <ul className="avg">
                        <li>
                            <span className="text">Total :</span>
                            <span className="price">Rp. 500.000</span>
                        </li>
                        <li>
                            <span className="text">Pengiriman :</span>
                            <span className="price">Rp. 25.000</span>
                        </li>
                        <li>
                            <span className="text">Diskon :</span>
                            <span className="price">Rp. 20.000</span>
                        </li>
                    </ul>
                    <ul className="subtotal">
                        <li>
                            <span className="text">Sub Total :</span>
                            <span className="price">Rp. 505.000</span>
                        </li>
                    </ul>
                    <button className="checkout">Go to checkout</button>
                </div>
            </div>
        </>

    )
}

function Cart() {
  return (
    <div className="cart-page">
        <CartContent/>
    </div>
  );
}
export default Cart;
