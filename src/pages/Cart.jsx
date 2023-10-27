import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { emptyCart, removeFromCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';


function Cart() {

  const navigate = useNavigate()

const cartArray = useSelector((state)=>state.cartReducer)

const dispatch = useDispatch()

const [total,setTotal] = useState(0)

const totalAmount = () => {
  if(cartArray.length>0){
  setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
}else{
  setTotal(0)
}
}

const checkOut = () => {
  alert("Order has successfully placed, Thank you for purchasing with us.")
  dispatch(emptyCart())
  navigate('/')
}

useEffect(()=>{
  totalAmount(0)
},[cartArray])

  return (
    <div style={{marginTop:"100px"}}>
      <div className='row container'>
        <div className='col-md-8'>
          <table className='mt-5 table border shadow'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product Name</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
          { 
              cartArray.length > 0 ? cartArray.map((product,index)=>(
                  
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{product.title}</td>
                      <td><img width={'100px'} height={'100px'} src={product.thumbnail} alt="" /></td>
                      <td>{product.price}</td>
                      <td onClick={()=>dispatch(removeFromCart(product.id))}><i className='fa-solid fa-trash text-danger'></i></td>
                    </tr>
              )) : <p className='fw-bolder text-danger'>Cart is empty</p>
            
          }
              </tbody>
          </table>
        </div>
        <div className='col-md-1'></div>
        <div className="col-lg-3 p-5 mt-5 border rounded ">
          <h3 className='fw-bolder text-primary'>Cart Summary</h3>
          <h5>Total Products: <span>{cartArray.length}</span></h5>
          <h4>Total : $ <span>{total}</span></h4>
          <div className='d-grid'><button onClick={checkOut} className='btn btn-success rounded'>Check Out</button></div>
        </div>
      </div>
    </div>
  )
}

export default Cart