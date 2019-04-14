import React from 'react';
import {NavLink} from 'react-router-dom'
import Cart from '../svg/cart.svg'
import Home from '../svg/home.svg'
import Search from '../svg/search.svg'
import {Consume} from '../context.js'
const TopMenu = () => {
    return ( 
            <Consume>
                {val=>{
                    
                    const cartTotal=val.data.reduce((total,item)=>total+(item.cart ? 1 : 0),0)
                    return(
                        <div className='TopMenu'>
                            <div>
                                <NavLink to='/'>
                                    <img src={Home} alt='Home' height='25px'/>
                                </NavLink>
                            </div>
                            <div className='search'>
                                <input type='text' placeholder='Search'/> <img src={Search} alt='Search' height='25px' className='srch'/>
                            </div>
                            <div>
                                <NavLink to='/cart'>
                                    <img src={Cart} alt='Cart' height='25px'/> <p className='cartTotal'>{cartTotal>0 && `(${cartTotal})`}</p>
                                </NavLink>
                            </div>
                        </div>
                    )
                }}
               
            </Consume>
        
    );
}
export default TopMenu;
