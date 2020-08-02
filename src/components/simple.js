import React,{Component} from 'react'
import Sharebutton from './UI/sharebutton.js'

class simple extends Component {
    
    constructor(props) {
    super(props);
        this.state={
            car:0,
            url:'www.google.com'
        }
    }

    handle() {
        
        
    }
    
    render(){
        console.log(window.location.href)
        return(
            <div>
                <p>This is simple{this.props.match.params.year}</p>
                   <Sharebutton/>
            </div>
        )
    }
}


export default simple