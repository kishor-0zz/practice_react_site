import React from 'react';
import { useState, useEffect } from 'react';
import Service from './Service/Service';
import servicesStyle from '../../../Assist/service.module.css';

const Services = () => {
   // servics data
   const [data, setData] = useState([]);
   const [search, setSearch] = useState([]);
   const [cart, setCart] = useState([]);

   useEffect(() => {
      fetch('products.JSON')
         .then(res => res.json())
         .then(data => {
            setData(data)
            setSearch(data)
         })

   }, [])

   const searchHandel = (e) => {
      const searchValue = e.target.value;
      const matchSearch = data.filter(pro => pro.name.toLowerCase().includes(searchValue.toLowerCase()))
      setSearch(matchSearch);

   }

   const addToCart = (id) => {
      const exsist = cart.find(carte => carte.key === id.key)
      console.log(exsist);


      setCart(exsist)
      console.log(id);
   }
   console.log(cart);
   return (
      <div className='pt-5 pb-5 text-center container'>
         <div className='search-bar'>
            <input onChange={searchHandel} className={servicesStyle.searchinput} type="search" placeholder="Search product" aria-label="Search" />
         </div>
         <span>items: {search.length}</span>
         {
            search.length > 0 ? <p></p> : <p>products doseot match</p>
         }


         <div className="row">
            <div className="col-lg-9 col-md-9 col-12">
               <div className={`${servicesStyle.maindata} `}>
                  {
                     search.map(datas => <Service datas={datas} key={datas._id} addToCart={addToCart}></Service>)
                  }
               </div>

            </div>
            <div className="col-lg-3 col-md-3 col-12">
               <h2>cart:</h2>
            </div>
         </div>
      </div>
   );
};

export default Services;