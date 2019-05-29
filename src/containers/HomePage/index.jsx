import React, { Component } from 'react';
import Carousel from '../../component/carousel';
import "./index.css";

import CardTab from '../../component/zostelDestination';
import WhatsNew from '../../component/whatsNew';

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {


    return (
      <React.Fragment>
        <Carousel />
        <div className="cardTabCss mt-40 ">
          <CardTab /></div>
        <div className="cardTabCss mt-40 ">
          <WhatsNew /></div>
      </React.Fragment>

    )

  }

}
export default (HomePage) 