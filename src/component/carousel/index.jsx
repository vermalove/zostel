import React from "react";
import "./index.css";

import { Carousel } from 'react-responsive-carousel';
import { carouselData } from "../../constants/carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

class CarouselTab extends React.Component {
    render() {

    return (
    
<React.Fragment>
        <Carousel showArrows={false} autoPlay={true} showThumbs={false} showIndicators={false}showStatus={false} interval={2000} stopOnHover={false} swipeable={false}>
        {carouselData.map((carouselData, index) => {
            return (
        <div >
            <img src={carouselData.imgUrl}/>
          
        </div>)
    
    })}
   
        
    </Carousel>
 <div class="banner-center-text">
 <p> Live it. Now </p>
</div>

</React.Fragment>
    )




}
}
    export default (CarouselTab);