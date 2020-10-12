import React from 'react';
import Product from './Product'
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
            />

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
            <Product
                id="1"
                title="Iphone 11 Pro"
                price={1200}
                rating={4}
                image="http://www.pngall.com/wp-content/uploads/5/iPhone-11-PNG-Transparent-HD-Photo.png"
            />
            <Product
                id="1"
                title="PS 4 Pro 1Tb"
                price={650}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51ROi4d4puL._SL1280_.jpg"
            />
            </div>
            <div className="home__row">
            <Product
                id="1"
                title="Nvidia Titam RTX"
                price={2.499}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71OpiCVK%2B0L._AC_SL1500_.jpg"
            />
            <Product
                id="1"
                title="ROG Zephyrus M Thin and Portable Gaming labtop"
                price={1.699}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71EaqA7y7LL._AC_SL1500_.jpg"
            />
            <Product
                id="1"
                title="Asus ROG Rapture GT-AX11000"
                price={449}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71zLTz2duHL._AC_SL1500_.jpg"
            />
            </div>
            <div className="home__row">
            <Product
                id="1"
                title="SAMSUNG 85-inch Class QLED Q70T Series - 4k UHD Dual LED Quantum HDR Smart TV with Alexa Built-in"
                price={6500}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51d1lfcMIaL._AC_SL1000_.jpg"
            />
            <Product
                id="1"
                title="Sony XBR85X850F 85-Inch 4K Ultra HD Smart LED TV"
                price={5900}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/61DfNTAW4tL._AC_SL1200_.jpg"
            />
            </div>
        </div>
    );
}

export default Home;

