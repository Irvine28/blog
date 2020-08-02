import React, {Component} from 'react';
import {data} from '../data';
import Articlelistselect from './articlelistselect';
import Background from './UI/background.js'

class articlelist extends Component {
    
    constructor(){
        super()
        this.state = {
            articles: data,
        }
    }
    
    componentDidMount(){
        
    
    }
    
    render(){
 
        return(
        <Background>
            <div className='articlelist-background'>
                {
                            this.state.articles.map((value, index) => {
                            return (
                                <Articlelistselect key={index} data={value} />
                            )
                        })
                }
            </div>
        </Background>
                

            
        )
    }
}

                                
export default articlelist;