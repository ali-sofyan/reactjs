import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartContent() {
    const data = useSelector((state) => state.cart);
    const [datacart, setDataCart] = useState([]);
    useEffect(() => {
        const getData = () => {
            for (let key in data.cart) {
                setDataCart(prevArray => [...prevArray,
                {
                    img: data.cart[key].data.img,
                    name: data.cart[key].data.name,
                    qty: data.cart[key].data.qty,
                    price: data.cart[key].data.price
                },
                ]);
            }
        };
        getData();
    }, []);
    return (
      <>
        <div className="main">
            <div className="product-section">
              {datacart.length > 0 ? (
                datacart.map((val, index) => (
                <li key={index} class="product-info">
                    <img src={val.img} className="imgProduct"></img>
                    <div className="titleProduct">
                        <h1>{val.name}</h1>
                        <h3 className="priceProduct">{val.price}</h3>
                        <h4>{val.qty} pcs</h4>
                    </div>
                </li>
                ))
                ) : (
                <li class="product-info">
                  <h1>There is no product</h1>
                </li>
              )}
            </div>
        </div>
        <div class="sidebar">
          
          {datacart.length > 0 ? (
            <div className="total">
                <ul className="avg">
                    <li>
                        <span className="text">Total :</span>
                        <span className="price">Rp. 500.000</span>
                    </li>
                    <li>
                        <span className="text">Pengiriman :</span>
                        <span className="price">Rp. 0</span>
                    </li>
                    <li>
                        <span className="text">Diskon :</span>
                        <span className="price">Rp. 0</span>
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
            ) : (
            <div className="total">
              <ul className="avg">
                  <li>
                      <span className="text">Total :</span>
                      <span className="price">-</span>
                  </li>
                  <li>
                      <span className="text">Pengiriman :</span>
                      <span className="price">-</span>
                  </li>
                  <li>
                      <span className="text">Diskon :</span>
                      <span className="price">-</span>
                  </li>
              </ul>
              <ul className="subtotal">
                  <li>
                      <span className="text">Sub Total :</span>
                      <span className="price">-</span>
                  </li>
              </ul>
              <Link to="/category/111">
                <button className="checkout">Pilih product terlebih dulu</button>
              </Link>
          </div>
          )}
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