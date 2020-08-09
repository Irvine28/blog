import React,{Component} from 'react'

class background extends Component {
      
    render(){
        return(
            <div className='root-background'>
                {this.props.children}
            </div>
                
        )
    }
}

export default background