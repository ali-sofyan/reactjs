import React, { useState, useEffect, Component }  from 'react';
import { Switch, Route, Link } from "react-router-dom";
import '../App.css';
import '../index.css';
import Heart from '../product/heart.svg';


function Card(props) {
  const [count, setCount] = useState(0);

  return (
    <li className="product">
      <style jsx="true">{`
        .tier {
          color: #afafaf;
        }
        .qty {
          padding: 10px;
        }
        .btn{
          background: black;
          color: white;
        }
        .card{
          border: 1px solid;
          padding: 10px;
          margin: 20px;
          background: salmon;
        }

        .product-info{
          text-align: center
        }

        .product-images{
          position: relative;
        }

        .wishlist{
          position: absolute;
          right: 0;
          width: 25px;
          padding: 10px;
        }
    `}</style>
      <div className="product-images">
          <span>
            <img src={props.productImage}></img>
          </span>
          <span className="wishlist"><img src={Heart} /></span>
      </div>
      <div className="product-info">
        <h1 className="header-text">{props.productName}</h1>
        <h4 class="tier"><del>{props.tierPrice}</del></h4>
        <h2>{props.price}</h2>
        {/* setnya disini */}
        <div className="bottom-info">
            <button onClick={() => setCount(count - 1)}>-</button>        
            <span className="qty"> {count} </span>
            <button onClick={() => setCount(count + 1)}>+</button>
            <Link className="go-details" to={`/detail?productId=${props.id}&productName=${props.productName}&productImg=${props.productImage}&price=${props.price}&tierPrice=${props.tierPrice}`}>View Detail</Link>
        </div>
      </div>
    </li>
  )
}


export default Card;
