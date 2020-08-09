import React,{Component} from 'react'
import {data} from './data'

const ProductContext=React.createContext();


class  ProductProvider extends Component {
    
    constructor(){
        super()
        this.state = {
            data: data,
            chapter:{},
            articleContent:[]
            
        }
    }
    
    OpenArticle=(chapter)=>{
    
      
        //SEARCH FOR THE ARTICLE WE CLICK
        const chapterIndex=this.state.data.find(o=>o.title===chapter)
        
        let contentPreload=[]
        
        //LOAD THE CONTENT ARRAY IN BODY INTO CONTENTPRELOAD AND ARTICLE WILL DISPLAY CONTENTPRELOAD
        chapterIndex.body.map((value,index)=>{
            const {isImage,imageSrc,custom,content, className} = value
 
            return contentPreload.push(
                isImage?
                <img className={className} src={require('./images/article'+imageSrc)} key={index} alt='index'/>:
                custom? <p key={index} >{content}<a href={custom}>{custom}</a></p>:
                className?<p key={index} className={className}>{content}</p>:<p key={index} >{content}</p>)
        })

        this.setState(()=>{
            
            return {
                chapter: chapterIndex,
                articleContent:contentPreload
            }
            
        })

        
    }
    
    FindArticle=(id)=>{
        
        const chapterIndex=this.state.data.find(o=>o.id===id)
        
        let contentPreload=[]
        
        //LOAD THE CONTENT ARRAY IN BODY INTO CONTENTPRELOAD AND ARTICLE WILL DISPLAY CONTENTPRELOAD
        chapterIndex.body.map((value,index)=>{
            const {isImage,imageSrc,custom,content, className} = value
 
            return contentPreload.push(
                isImage?
                <img className={className} src={require('./images/article'+imageSrc)} key={index} alt='index'/>:
                custom? <p key={index} >{content}<a href={custom}>{custom}</a></p>:
                className?<p key={index} className={className}>{content}</p>:<p key={index} >{content}</p>)
        })

        this.setState(()=>{
            
            return {
                chapter: chapterIndex,
                articleContent:contentPreload
            }
            
        })
        
    }
    
    
    render(){
        return(
            <ProductContext.Provider value ={{
            
            OpenArticle:this.OpenArticle,
            FindArticle: this.FindArticle,
            articleContent:this.state.articleContent,
            chapter: this.state.chapter
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer= ProductContext.Consumer;

export {ProductContext, ProductProvider, ProductConsumer}