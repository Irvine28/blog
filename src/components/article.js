import React,{Component} from 'react'
import {ProductConsumer} from '../context'
import {data} from '../data'
import {Redirect} from 'react-router-dom';
import Sharebutton from './UI/sharebutton.js'

class article extends Component {
    
    constructor(props) {
    super(props);
    this.state = {
        data: data
    };
    }
    
    componentDidMount(){
        window.scrollTo(0,0)
    }
    
    
    
    render(){
        return(
        <ProductConsumer>
            
            
                    {value=>{
                        
                        if (value.articleContent.length===0) 
                         return <Redirect to='/articlelist' />
                        
                        return(
                            <div className="article-container">
                                
                                <div className='article-heading'>
                                    <div className='article-title'>
                                        {value.chapter.title}
                                    </div>
                                    
                                    <Sharebutton/>
                                    
                                </div>
                                    
                                
                                <div className="article-body">                           
                                    {value.articleContent}
                                </div>
                            </div>
                        )
                    }}
        </ProductConsumer>
        )
    }
}


export default article