import React from 'react';
import Data from './Data.js';

var myContext= React.createContext()

class Provide  extends React.Component {
    constructor(){
        super()
        this.state = { 
            data: Data,
            detail: ''
        }
        this.addCart=this.addCart.bind(this)
        this.removeCart=this.removeCart.bind(this)
        this.addDetail=this.addDetail.bind(this)
        this.quantity=this.quantity.bind(this)
        this.size=this.size.bind(this)
    }
    addCart(id){
        this.setState(prev=>{
            const updated=prev.data.map(item=>{
                if(item.id===id){
                    item.cart=true
                }
                return item
            })
            return {data: updated}
        })
    }

    removeCart(id){
        this.setState(prev=>{
            const updated=prev.data.map(item=>{
                if(item.id===id){
                    item.cart=false
                }
                return item
            })
            return {data: updated}
        })
    }

    addDetail(id){
        this.setState(prev=>{
            const updated=prev.data.filter(item=>{
                if(item.id===id){
                    return true
                }
            })
            return {detail: updated[0]}
        })
    }

    quantity (e,id) {
        e.persist()
        this.setState(prev=>{
            const updated=prev.data.map(item=>{
                if(item.id===id){
                    item.quantity= e.target.value
                }
                return item
            })
            return {data: updated}
        
        })
        
    } 
    size (e,id) {
        e.persist()
        this.setState(prev=>{
            const updated=prev.data.map(item=>{
                if(item.id===id){
                    item.size= e.target.value
                }
                return item
            })
            return {data: updated}
        
        })
        
    } 

    render() { 
        return ( 
            <myContext.Provider value={{data:this.state.data, addCart:this.addCart,removeCart:this.removeCart, addDetail:this.addDetail,detail:this.state.detail, quantity:this.quantity, size:this.size}}>
                {this.props.children}
            </myContext.Provider>
         )
    }
}

const Consume= myContext.Consumer
export {Consume,Provide};