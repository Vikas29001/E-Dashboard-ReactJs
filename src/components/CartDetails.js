import React, { useState } from 'react'
import CartData from './CartData'
import { useDispatch, useSelector } from 'react-redux';
import { Add } from '../redux/actions/action'
import { useParams } from 'react-router-dom';

function CartDetails() {
    const [data, setData] = useState(CartData);
    const dispatch = useDispatch()
    const {id} = useParams;
    const getdata = useSelector((state) => state.cartreducer.carts);
    const compare = () => {
        let comparedata = getdata.filter((e) => {
            return e.id == id
        });
        setData(comparedata);
    }

    const send = (e) => {
        console.log(e)
        dispatch(Add(e))
    }

    return (
        <>
            <h1>CartDetails</h1>
            <div className='container'>
                <div className='row justify-content-center align-items-center'>
                    {/* here i did elements center */}
                    {
                        data.map((element, key) => {
                            // here i use map loop to get all elements 
                            return (
                                <>
                                    <div className="card mx-2 my-4" style={{ width: "18rem", border: "none" }}>
                                        <img src={element.imgdata} className="card-img-top" alt="..." style={{ height: "12rem" }} />
                                        {/* here i set height of Image */}
                                        <div className="card-body">
                                            <h5 className="card-title">{element.name}</h5>
                                            <p className="card-text">Price:{element.price}</p>
                                            <button type="button" className="btn btn-success" onClick={() => send(element)}>Buy Item</button>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default CartDetails
