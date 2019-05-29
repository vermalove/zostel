import React from 'react';

import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { headerData } from "../constants/headerTopic"
import Header from "./Header"
import Slidedown from '../component/header/SlideDown';
import { HomePage } from './HomePage';


export class App extends React.Component {
    static propTypes = {
        //   auth: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            // isAuthenticateLoading: true,
            // isSessionIdle: false
            isOverlay: false
        };
    }

    overlay = () => {

        console.log("click")
        this.setState({ isOverlay: !this.state.isOverlay });
    }
    hideOverlay = () => {

        console.log("bouble click")
        this.setState({ isOverlay: !this.state.isOverlay });
    }

    render() {

        return (<Router>
            <Header overlay={this.overlay} headerData={headerData}/>
           <div  className="topMargin"> <HomePage />
            {!this.state.isOverlay && (
                <Slidedown hideOverlay={this.hideOverlay} />)
            }
</div>
        </Router>)
    }



}

export default (App);