import React,{Component} from 'react'
import {Link} from 'react-router-dom'


class Navbar extends Component {
    render(){
        return(
        <React.Fragment>
            <div className="navbar-title">
                    斜杠。生活
            </div>
            <nav className="navbar">
                <Link to='/articlelist' className='nav-item'>Articles</Link>
                <Link to='/about' className='nav-item'>About</Link>
                <Link to='/contact' className='nav-item'>Contact us</Link>
            </nav>
        </React.Fragment>
        
        )
    }s
}


export default Navbar