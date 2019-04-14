import React from 'react';
import Item from './Item'
import {Consume} from '../context.js'

class Men extends React.Component {
    state = {  }
    render() { 
        return (
            <div className='Home'>
                <Consume>
                    {val=>val.data.map(item=><Item x={item} addCart={val.addCart} addDetail={val.addDetail}/>)}
                </Consume>
            </div>
        );
    }
}
 
export default Men;