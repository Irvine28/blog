import React,{Component} from 'react'


class Default extends Component {
    
    constructor(props) {
    super(props);
    this.state = {
      
    };
    }
    
    
    render(){
        return(
            <div style={{height:'60%'}}>
            <div style={{margin:'auto'}}>
                <h1>404</h1>
                <h2>Page not found</h2>
                <h3>The requested URL<br/> 
                    <span>
                        {this.props.location.pathname} 
                    </span>
                 <br/>was not found</h3>
            </div>
        </div>
        )
    }
}


export default Default