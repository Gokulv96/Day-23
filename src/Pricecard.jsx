import React, { useState } from "react";
import './App.css'

function Pricecard() {
  const [products , setProducts] =useState([{
    name:"Laptop",
    brand:"HP",
    Price:"$10,000",
    sold:false,
    img:"../hp_laptop.png"
  },
  {
    name:"Mobile",
    brand:"SamSung",
    Price:"$5,000",
    sold:false,
    img:"../samsung_mobile.png"
  },
  {
    name:"Head Phone",
    brand:"boat",
    Price:"$1000",
    sold:false,
    img:"../boat_headphone.png"
  },
  {
    name:"Speaker",
    brand:"Sony",
    Price:"$3000",
    sold:false,
    img:"../sony_speaker.png"
  },
  {
    name:"I phone",
    brand:"Apple",
    Price:"$30,000",
    sold:false,
    img:"../iphone.png"
  },
  {
    name:"Watch",
    brand:"Fast Track",
    Price:"$8,000",
    sold:false,
    img:"../fasttrack_watch.png"
  },
  {
    name:"TV",
    brand:"Sony",
    Price:"$10000",
    sold:false,
    img:"../sony_tv.png"
  },
  {
    name:"Mac book",
    brand:"Apple",
    Price:"$300000",
    sold:false,
    img:"../apple_macbook.png"
  }]);
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(false);
 
  const addCount = (index)=>{
       setCount(count+1);
       setClick(products[index].sold = true);
  }
  const removeCount = (index)=>{
       if(count<=0){
        return
       }
       setCount(count-1);
       setClick(products[index].sold = false);
  }
  return (
  <>
 <div className="container-fluid">
  <nav className="navbar navbar-expand-lg navbar-light" >
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Sign up</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Login</a>
      </li>
    </ul>
    <div className="container">
    <i className="fa fa-shopping-cart fa-2x" aria-hidden="true">{count}</i>
    </div>
  </div>
</nav>
</div>
 <div class="row row-cols-1 row-cols-md-4">
    {products.map((product,index)=>(
     <div className="col mb-4">
       <div className="card">
         <img src={product.img} class="card-img-top" alt="..."/>
         <div className="card-body">
           <h5 className="card-title">{product.name}</h5>
           <p className="card-text">{product.brand}</p>
           <p className="card-text">{product.Price}</p>
           {product.sold ? <button className = "btn btn-primary" key ={index} onClick={()=>removeCount(index)}>Remove to Card</button>:<button className = "btn btn-primary" key ={index} onClick={()=>addCount(index)}>Add to Card</button>}
         </div>
       </div>
     </div>
      
))
}
</div>
</>
  )
}

export default Pricecard