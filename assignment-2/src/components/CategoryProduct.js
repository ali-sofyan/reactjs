import React from "react";
import { Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import ImgProduct1 from '../product/product1.jpg';
import ImgProduct2 from '../product/product2.jpg';
import ImgProduct3 from '../product/product3.jpg';
import ImgProduct4 from '../product/product4.jpg';
import ImgProduct5 from '../product/product5.jpg';
import Card from '../components/Card';


const productNew = [
  { id: 1, productTitle: "Amayn Pinstripe Dress", tierPrice: "Rp. 300.000", price: "Rp. 150.000", imgSrc: ImgProduct1},
  { id: 2, productTitle: "Tolrae Gingham Sleeve", tierPrice: "Rp. 350.000", price: "Rp. 250.000", imgSrc: ImgProduct2},
  { id: 3, productTitle: "Mignon Printed Skirt", tierPrice: "Rp. 350.000", price: "Rp. 170.000", imgSrc: ImgProduct3},
  { id: 4, productTitle: "Charli Relaxed Blazer", tierPrice: "Rp. 400.000", price: "Rp. 210.000", imgSrc: ImgProduct4},
  { id: 5, productTitle: "Gingham Blazer Dress", tierPrice: "Rp. 300.000", price: "Rp. 110.000", imgSrc: ImgProduct5},
  { id: 6, productTitle: "Madison Sleeve Mignon", tierPrice: "Rp. 500.000", price: "Rp. 320.000", imgSrc: ImgProduct3},
  { id: 7, productTitle: "Skirt Mignon Printed", tierPrice: "Rp. 340.000", price: "Rp. 240.000", imgSrc: ImgProduct1},
  { id: 8, productTitle: "Pinstripe Dress Amayn", tierPrice: "Rp. 510.000", price: "Rp. 190.000", imgSrc: ImgProduct2},
  { id: 9, productTitle: "Blazer Charli Relaxed", tierPrice: "Rp. 920.000", price: "Rp. 210.000", imgSrc: ImgProduct4},
  { id: 10, productTitle: "Blazer Knit Wear", tierPrice: "Rp. 230.000", price: "Rp. 200.000", imgSrc: ImgProduct1},
  { id: 11, productTitle: "Tolrae Relaxed Skirt", tierPrice: "Rp. 430.000", price: "Rp. 420.000", imgSrc: ImgProduct2}
]

const productBest = [
    { id: 21, productTitle: "Tolrae Relaxed Skirt", tierPrice: "Rp. 430.000", price: "Rp. 420.000", imgSrc: ImgProduct2},
    { id: 22, productTitle: "Blazer Knit Wear", tierPrice: "Rp. 230.000", price: "Rp. 200.000", imgSrc: ImgProduct1},
    { id: 23, productTitle: "Blazer Charli Relaxed", tierPrice: "Rp. 920.000", price: "Rp. 210.000", imgSrc: ImgProduct4},
    { id: 24, productTitle: "Gingham Blazer Dress", tierPrice: "Rp. 300.000", price: "Rp. 110.000", imgSrc: ImgProduct5},
    { id: 25, productTitle: "Skirt Mignon Printed", tierPrice: "Rp. 340.000", price: "Rp. 240.000", imgSrc: ImgProduct1},
    { id: 26, productTitle: "Pinstripe Dress Amayn", tierPrice: "Rp. 510.000", price: "Rp. 190.000", imgSrc: ImgProduct2},
    { id: 27, productTitle: "Amayn Pinstripe Dress", tierPrice: "Rp. 300.000", price: "Rp. 150.000", imgSrc: ImgProduct1},
    { id: 28, productTitle: "Tolrae Gingham Sleeve", tierPrice: "Rp. 350.000", price: "Rp. 250.000", imgSrc: ImgProduct2},
    { id: 29, productTitle: "Mignon Printed Skirt", tierPrice: "Rp. 350.000", price: "Rp. 170.000", imgSrc: ImgProduct3},
    { id: 20, productTitle: "Charli Relaxed Blazer", tierPrice: "Rp. 400.000", price: "Rp. 210.000", imgSrc: ImgProduct4}
]
    
function Product(cat){
    let { url } = useRouteMatch();
    if (cat.id == 111) {
        return (
            <div className="category-page">
                <div className="top">
                    <h1 className="title">New Arrivals</h1>
                    <span className="desc">Browse our latest styles and upgrade your wardrobe. From classic closet staples to trendy fashion pieces, discover new favourites to take you from work to the weekend.</span>
                </div>
                <div className="content">
                    {productNew.map((data, i)=>{
                        return(
                            <>
                                <Card
                                    id = {data.id}
                                    productName = {data.productTitle}
                                    productImage= {data.imgSrc}
                                    price = {data.price}
                                    tierPrice = {data.tierPrice}
                                />
                            </>
                        )
                    })}
                </div>
            </div>
        );
           
    }
    if (cat.id == 222){
        return (
            <div className="category-page">
                <div className="top">
                    <h1 className="title">Best Sellers</h1>
                    <span className="desc">Explore our collection of women’s clothing and uncover more to add to your closet. With a mix of casual chic separates, corporate sets and evening pieces, styling the perfect look for the office or occasion is easy.</span>
                </div>
                <div className="content">
                    {productBest.map((data, i)=>{
                        return(
                            <>
                            <Card
                                id = {data.id}
                                productName = {data.productTitle}
                                productImage= {data.imgSrc}
                                price = {data.price}
                                tierPrice = {data.tierPrice}
                            />

                            </>
                        )
                    })}
                </div>
            </div>
        );
    }
}


export default Product;