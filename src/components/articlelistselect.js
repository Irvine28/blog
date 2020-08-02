import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context'

class articlelistselect extends Component {
    
    constructor(props) {
    super(props);
    this.state = {
        title: this.props.data.title,
        date: this.props.data.date,
        id: this.props.data.id,
        description: this.props.data.description,
        coverImage: this.props.data.coverImage
    };
    }
    
    render(){
        return(
        
                <ProductConsumer>
                    {value=>{
                     
                    return(
                        <div className="card">
                            <div className='card-background'>
                                <div className="card-img">
                                        <img className='card-img' src={require('../images/article'+this.state.coverImage)} alt='cover'/>
                                </div>
                                <div className='card-info'>
                                    <div className="card-title">
                                        {this.state.title}
                                    </div>
                                    <div className="card-date">
                                        {this.state.date}
                                    </div>
                                    <div className='card-desc'>
                                        <p>{this.state.description}</p>
                                    </div>
                                    <div className='card-btn' onClick={()=>value.OpenArticle(this.state.title)}>
                                        <Link to={`/article/${this.state.id}`}>Continue Reading</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                    )}}
                </ProductConsumer>
                        
      
        
        )
    }
}


export default articlelistselect