import React from 'react'
import {Consume} from '../context.js'
import {NavLink} from 'react-router-dom'
const Detail = () => {
    return (
        <Consume>
            {val=>
            <div className='Detail'>
                <div className='detail-info'>
                    <h2>{val.detail.name}</h2>
                    <p>{val.detail.details}</p>
                    <p className='size-p'>select size: </p>
                    <select className='size'  onChange={(e)=>{val.size(e,val.detail.id)}}>
                        <option value= '4' >4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                        <option value='11'>11</option>
                        <option value= '12'>12</option>
                        
                    </select>
                    <p className='detail-price'>${val.detail.price}</p>
                    <button onClick={val.addCart.bind(this,val.detail.id)}><NavLink to='/cart'>add to cart</NavLink></button>
                    <button><NavLink to='/'>Continue</NavLink></button>
                </div>
                <div className='detail-pic' style={{backgroundImage: `url(${require(`../images/${val.detail.pic}`)})` }}>
                </div>
            </div>
            }
        </Consume>
    );
}
 
export default Detail