import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {

  const wishlist = useSelector((state)=>state.wishlistReducer)

  const cart = useSelector((state)=>state.cartReducer)

  return (
    <>
     <nav style={{position:'fixed', top:'0',zIndex:"100",backgroundColor:"darkviolet"}} className="navbar navbar-expand-lg navbar-light w-100">
        <div className="container px-4 px-lg-5">
          <Link to={'/'} className="navbar-brand" href="#!"><i className="fa-solid fa-cart-shopping me-1"></i>E cart</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <form className="d-flex ms-auto">
                <Link  to={'/wishlist'} className="btn btn-outline-dark" type="submit">
                  <i className="fa-solid fa-heart text-danger me-1"></i>
                    Wishlist
                    <span className="badge bg-dark text-white ms-1 rounded-pill">{wishlist.length}</span>
                </Link>
                <Link to={'/cart'} className="btn btn-outline-dark" type="submit">
                  <i className="fa-solid fa-cart-plus me-1"></i>
                    Cart
                    <span className="badge bg-dark text-white ms-1 rounded-pill">{cart.length}</span>
                </Link>
              </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header