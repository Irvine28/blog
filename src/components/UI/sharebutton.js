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
    
    
    render(){
        return(
                <div className='share-button'>
                    <FacebookShareButton url={this.state.url}>
                        <FacebookIcon round='true' size='2em' />
                    </FacebookShareButton>
                    <LineShareButton url='www.google.com'>
                        <LineIcon round='true' size='2em' />
                    </LineShareButton>
                    
                    <WhatsappShareButton url='www.google.com'>
                        <WhatsappIcon round='true' size='2em' />
                    </WhatsappShareButton>
                    <TwitterShareButton url='www.google.com'>
                        <TwitterIcon round='true' size='2em' />
                    </TwitterShareButton>
                </div>
                
        )
    }
}


export default sharebutton