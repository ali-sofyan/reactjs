import React from "react";
import { Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import ImgProduct1 from '../product/product1.jpg';
import ImgProduct2 from '../product/product2.jpg';
import ImgProduct3 from '../product/product3.jpg';
import ImgProduct4 from '../product/product4.jpg';
import Card from '../components/Card';

const categoryId = [
  { id: "111", name: "New Arrivals" },
  { id: "222", name: "Best Sellers" }
];

const product = [
  { productTitle: "Amayn Pinstripe Dress", tierPrice: "Rp. 300.000", price: "Rp. 150.000", imgSrc: ImgProduct1},
  { productTitle: "Tolrae Gingham Sleeve", tierPrice: "Rp. 350.000", price: "Rp. 250.000", imgSrc: ImgProduct2},
  { productTitle: "Mignon Printed Skirt", tierPrice: "Rp. 350.000", price: "Rp. 170.000", imgSrc: ImgProduct3},
  { productTitle: "Charli Relaxed Blazer", tierPrice: "Rp. 400.000", price: "Rp. 210.000", imgSrc: ImgProduct4}
]

function Product(){
  return (
      <>
          {product.map((data, i)=>{
              return(
              <Card
                  productName = {data.productTitle}
                  productImage= {data.imgSrc}
                  price = {data.price}
                  tierPrice = {data.tierPrice}
              />
              )
          })}
      </>
  );
}

function CaregoryById() {
  let { url } = useRouteMatch();
  return (
    <>
      <ul class="cat">
        {categoryId.map((categoryId, index) => (
          <li key={index} class="category-section">
            <h1>{categoryId.name}</h1>
            <Link to={`category/${categoryId.id}`}>View More</Link>
            <Product/>
          </li>
        ))}
      </ul>
    </>
  );
}


export default CaregoryById;