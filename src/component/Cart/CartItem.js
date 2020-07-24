import React from "react"
import "../../App.css"

export default function CartItem({item,value}){
  const {id,title,img,price,total,count} = item;
  const {increment,decrement,removeItem} = value;
  return (
    <div className="row my-2 text-capitalise text-center">
      <div className="col-10 mx-auto  col-lg-2">
        <img src={img} style={{width:"5rem",height:"5rem"}} className="img-fluid" alt="product"/>
      </div>

      <div className="col-10 mx-auto  col-lg-2">
        <span className="d-lg-node">product:</span> {title}
      </div>

      <div className="col-10 mx-auto  col-lg-2">
        <span className="d-lg-node">price: </span>{price}
      </div>

      <div className="col-10 mx-auto  col-lg-2">
        <div className="d-flex justify-content-center">
          <div>
            <button className=" btn_1  mx-1" onClick={()=>{decrement(id)}}>-</button>
            <button className=" btn_1  mx-1">{count}</button>
            <button className=" btn_1  mx-1" onClick={()=>{increment(id)}}>+</button>
          </div>
        </div>
      </div>

      <div className="col-10 mx-auto  col-lg-2">
        <div className="cart-icon" onClick={()=>removeItem(id)}>
        <i className="fas fa-trash"></i>
        </div>
      </div>

      <div className="col-10 mx-auto  col-lg-2">
        <strong className="d-lg-node">item total: ${total}</strong>
      </div>


    </div>
  )
}
