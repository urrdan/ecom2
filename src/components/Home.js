import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import Item from './Item'
import {Consume} from '../context.js'

class Home extends Component {
    render() { 
        return (
            <div className='Home'>
                <div className='category'>
                    <div>
                        <h1>men</h1>
                        <NavLink to='/men'>
                            <img src={require('../images/men.jpg')}/>
                        </NavLink>
                        
                    </div>
                    <div>
                        <h1>women</h1>
                        <NavLink to='/men'>
                            <img src={require('../images/women.jpg')}/>
                        </NavLink>
                    </div>
                    <div>
                        <h1>kids</h1>
                        <NavLink to='/men'>
                            <img src={require('../images/kids.jpg')}/>
                        </NavLink>
                    </div>
                        
                </div>

                <Consume>
                        {val=>
                            {
                                const onsale=val.data.filter(item=>{if(item.id<=3){return true}})
                                const trending=val.data.filter(item=>{if(item.id>3&&item.id<7){return true}})
                                return [
                                    <h2 className='home-head'>On Sale</h2>,
                                    onsale.map(item=><Item x={item} addCart={val.addCart} addDetail={val.addDetail}/>),
                                    <h2 className='home-head'>Trending</h2>,
                                    trending.map(item=><Item x={item} addCart={val.addCart} addDetail={val.addDetail}/>)
                                ]
                            }
                        }
                </Consume>
            </div>
        )
    }
}
 
export default Home;