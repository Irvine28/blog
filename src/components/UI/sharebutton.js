import React,{Component} from 'react'
import { FacebookShareButton, FacebookIcon } from "react-share"
import { LineShareButton, LineIcon } from "react-share"
//import { TelegramShareButton, TelegramIcon } from "react-share"
import { WhatsappShareButton, WhatsappIcon } from "react-share"
import { TwitterShareButton, TwitterIcon } from "react-share"

class sharebutton extends Component {
    
    constructor(props) {
    super(props);
        this.state={
            url: 'www.google.com'
        }
    }
    
    componentDidMount(){
        
        this.setState(()=>{
            
            return {
                url: window.location.href
            }
            
        })
        
    }
    
    render(){
        return(
                <div className='share-button'>
                    <FacebookShareButton url={window.location.href}>
                        <FacebookIcon round='true' size='2em' />
                    </FacebookShareButton>
                    <LineShareButton url='www.google.com'>
                        <LineIcon round='true' size='2em' />
                    </LineShareButton>
                    
                    <WhatsappShareButton url={window.location.href}>
                        <WhatsappIcon round='true' size='2em' />
                    </WhatsappShareButton>
                    <TwitterShareButton url={window.location.href}>
                        <TwitterIcon round='true' size='2em' />
                    </TwitterShareButton>
                </div>
                
        )
    }
}


export default sharebutton