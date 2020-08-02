import React,{Component} from 'react'


class about extends Component {
    
    constructor(props) {
    super(props);
    this.state = {
      
    };
    }
    
    
    render(){
        return(
            <div className='about-background'>
                <div className='about-header'>
                    <img src={require('../images/about/profile.jpg')} alt='profile' />
                    <h1>Pei Jie</h1>
                </div>
                <div className='about-body'>
                    <div className='about-me'>
                        <div className='about-me-title'>
                            About Me
                        </div>
                        <div className='about-me-content'>
                                <div>
                                    Introduction
                                </div>
                                <div >
                                    :&emsp;朝九晚六员工／职业妈妈／旅游部落格／更多更多
                                </div>
                        </div> 
                        <div className='about-me-content'>
                                <div>
                                    Join
                                </div>
                                <div >
                                    :&emsp;since January 2016
                                </div>
                        </div> 
                        <div className='about-me-content'>
                                <div>
                                    Quote
                                </div>
                                <div >
                                    :&emsp;lorem ipsum
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default about