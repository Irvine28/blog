import React,{Component} from 'react'

class background extends Component {
    
    constructor(props) {
    super(props);

    }
    
    
    render(){
        return(
            <div className='root-background'>
                {this.props.children}
            </div>
                
        )
    }
}


export default background