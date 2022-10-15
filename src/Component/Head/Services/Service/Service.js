import React from 'react';
import serviceStyle from '../../../../Assist/service.module.css';

const Service = ({ datas, addToCart }) => {
   const { name, price, img, } = datas;
   return (
      <div className={serviceStyle.service}>
         <img src={img} alt="product" />
         <h2>name: {name} </h2>
         <span>price: {price}</span>
         <br />
         <button onClick={() => addToCart(datas)} type="button" className="btn btn-primary my-5">Add to cart</button>
      </div>
   );
};

export default Service;