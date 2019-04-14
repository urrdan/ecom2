import React, { Component } from 'react';
import {Consume} from '../context.js'
import {NavLink} from 'react-router-dom'
class Cart extends Component {
    constructor(){
        super()
        this.state = { 
            checky: '1'
        }
    }
    cartTotal (cart,x=1) {
        const total=cart.reduce((total,item)=>total+(item.price*(isNaN(item.quantity) ? 1 : item.quantity )),0)
        return total*x
     }
    render() { 
        
        return (
            <div className='Cart'>
                <Consume>
                    {val=>{
                        var cart=val.data.filter(item=>{
                            if(item.cart===true){
                                return true
                            }
                        })
                        
                        if(cart.length<1){
                                   return <p className='empty'>You Cart Is Currently Empty</p>
                        }else{return(
                            [                               
                                cart.map(itemm=>
                                    <div className='cart'>
                                        <NavLink to='/detail'>
                                            <div 
                                                className='cart-pic' 
                                                style={{backgroundImage: `url(${require(`../images/${itemm.pic}`)})`}}
                                                onClick={val.addDetail.bind(this,itemm.id)}
                                            >
                                            
                                            </div>
                                        </NavLink>
                                        
                                        <div className='cart-sec'>
                                            <h3>{itemm.name}</h3>
                                            <p>size {itemm.size}</p>
                                            <button onClick={val.removeCart.bind(this, itemm.id)}>delete</button>
                                        </div>
                                        
                                        <div className='cart-price'>${itemm.price*itemm.quantity? itemm.price*itemm.quantity : itemm.price}</div>
                                        <div className='quantity'>
                                            <p>${itemm.price} x </p>
                                            <select  onChange={(e)=>{val.quantity(e,itemm.id)}}>
                                                <option value='1'>1</option>
                                                <option value='2'>2</option>
                                                <option value='3'>3</option>
                                                <option value='4'>4</option>
                                                <option value='5'>5</option>
                                                <option value='6'>6</option>
                                                <option value='7'>7</option>
                                                <option value='8'>8</option>
                                                
                                            </select>
                                        </div>
                                    </div>                                                                 
                                ),

                                <div className='checkout'>
                                    <h2>Check Out</h2>
                                    <section><p>Bought</p><p>${Math.round(this.cartTotal(cart)*100)/100}</p></section>
                                    <section><p>Tax</p><p>${Math.round(this.cartTotal(cart,.08)*100)/100}</p></section>
                                    <section><p>Total</p><p>${Math.round(this.cartTotal(cart,1.08)*100)/100}</p></section>
                                    <button>Checkout &rarr;</button>
                                    
                                </div>
                            ]
                            
                            
                        )}
                    }}
                </Consume>
            </div>
        )
    }
}
 
export default Cart;