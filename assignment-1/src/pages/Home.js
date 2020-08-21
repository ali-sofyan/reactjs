import React, { useState, useEffect, Component }  from 'react';
import '../App.css';
import '../index.css';
import '../style.less';
import ImgBanner from '../banner.jpg';
import CategorybyId from '../components/CategorybyId';

function Banner(){
    return (
        <div className="banner-img">
            <div>
                <img src={ImgBanner}></img>
            </div>
        </div>
    )
}

function Home() {
  return (
    <div className="home-index">
        <Banner/>
        <CategorybyId/>
    </div>
  );
}
export default Home;
