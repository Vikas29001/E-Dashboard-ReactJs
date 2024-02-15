import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { Del, Add, Remove } from '../redux/actions/action'

function ItemDetails() {

  const [price, setPrice] = useState(0);
  console.log(price)

  const getDAta = useSelector((state) => state.cartreducer.carts)
  console.log(getDAta)

  const dispatch = useDispatch();

  const delete_product = (id) => {
    dispatch(Del(id))
  }

  const total_price = () => {
    let price = 0
    getDAta.map((element, key) => {
      price = element.price  + price;
    })
    setPrice(price)
  }

  useEffect(() => {
    total_price()
  }, [total_price])

  const send = (e) => {
    console.log(e)
    dispatch(Add(e))
}

const remove = (e) => {
  console.log(e)
  dispatch(Remove(e))
}


  return (
    <>
      <div className='container mt-2'>
        <h1>Items Details</h1>
        {
          getDAta.map((e) => {
            return (
              <>
                <section className='container mt-2'>
                  <div className='itemdetails'>
                    <div className='itemimage'>
                      <img src={e.imgdata} style={{ height: "18rem" }} />
                    </div>
                    <div className="details">
                      <p> <strong>Name: {e.name}</strong> </p>
                      <p> <strong>Price: {e.price}</strong> </p>
                      <p> <strong>ItemAmount: {e.price * e.qnty}</strong> </p>
                      <button type="button" className="btn btn-primary" onClick={e.qnty <=1 ?()=>delete_product(e.id):()=>remove(e)}>-</button>
                      <strong>Quantity:  {e.qnty}</strong>
                      <button type="button" className="btn btn-primary" onClick={()=>send(e)}>+</button>
                      <button type="button" className="btn btn-danger" onClick={() => delete_product(e.id)}>Delete Item</button>
                    </div>
                  </div>
                </section>
              </>
            )
          })
        }



        <p> <strong>Total Amount: {price}</strong> </p>
      </div>
    </>
  )
}

export default ItemDetails
