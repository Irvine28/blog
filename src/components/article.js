import React,{Component} from 'react'
import {ProductContext, ProductConsumer} from '../context'
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

        let value = this.context;


        if (value.articleContent.length===0)
        {value.FindArticle(this.props.match.params.id);}   
             
    }
    
    render(){
        return(
        <ProductConsumer>
            
                    {value=>{  
                        
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

article.contextType = ProductContext;

export default article