import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Articlelist from './components/articlelist'
import Article from './components/article'
import About from './components/about'
import Default from './components/default'
import Footer from './components/footer'
import Simple from './components/simple'
import Navbar from './components/Navbar'
import Contact from './components/contact'
import './App.css';

class App extends Component {
    
    
    
    render(){
        return (
        <React.Fragment>
            <Router>
               
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={Articlelist} />
                    <Route path='/articlelist' component={Articlelist} />
                    <Route path='/about' component={About} />
                    <Route path='/article/:id' component={Article} />
                    <Route path='/contact' component={Contact} />
                    <Route component={Default}/>
                </Switch>
                <Footer/>
            </Router>
        </React.Fragment>
        )
    }
}

export default App;
