import React from "react";
import "./index.css";

function CardData() {
    const rtn = [{
        title: "CARNATIONS",
        desc: "Join Ex-Commando Indian Army Rescue Specialist, P.S. Negi on a week long adventure in Chitkul as he trains you in trekking, camping, mountaineering, and everything in between.",
        url: "url(" + "https://s3.ap-south-1.amazonaws.com/zo-media/cache/_4a78303e01f03b43dcc9d23ee0b3e811/081_ChembraTeaEstate_14_233x260.jpg" + ")"
      }, {
        title: "STREET",
        desc: "A street is a public thoroughfare (usually paved) in a built environment.",
        url: "url(" + "https://s3.ap-south-1.amazonaws.com/zo-media/cache/_4a78303e01f03b43dcc9d23ee0b3e811/081_ChembraTeaEstate_14_233x260.jpg" + ")"
      },{
        title: "CARNATIONS",
        desc: "Carnations require well-drained, neutral to slightly alkaline soil, and full sun. Numerous cultivars have been selected for garden planting.[4] Typical examples include 'Gina Porto', 'Helen', 'Laced Romeo', and 'Red Rocket'.",
        url: "url(" + "https://s3.ap-south-1.amazonaws.com/zo-media/cache/_4a78303e01f03b43dcc9d23ee0b3e811/081_ChembraTeaEstate_14_233x260.jpg" + ")"
      }, {
        title: "STREET",
        desc: "A street is a public thoroughfare (usually paved) in a built environment.",
        url:"url(" + "https://s3.ap-south-1.amazonaws.com/zo-media/cache/_4a78303e01f03b43dcc9d23ee0b3e811/081_ChembraTeaEstate_14_233x260.jpg" + ")"
      },{
        title: "CARNATIONS",
        desc: "Carnations require well-drained, neutral to slightly alkaline soil, and full sun. Numerous cultivars have been selected for garden planting.[4] Typical examples include 'Gina Porto', 'Helen', 'Laced Romeo', and 'Red Rocket'.",
        url:"url(" + "https://s3.ap-south-1.amazonaws.com/zo-media/cache/_4a78303e01f03b43dcc9d23ee0b3e811/081_ChembraTeaEstate_14_233x260.jpg" + ")"
      }, {
        title: "STREET",
        desc: "A street is a public thoroughfare (usually paved) in a built environment.",
        url: "url(" + "https://s3.ap-south-1.amazonaws.com/zo-media/cache/_4a78303e01f03b43dcc9d23ee0b3e811/081_ChembraTeaEstate_14_233x260.jpg" + ")"
      },{
        title: "CARNATIONS",
        desc: "Carnations require well-drained, neutral to slightly alkaline soil, and full sun. Numerous cultivars have been selected for garden planting.[4] Typical examples include 'Gina Porto', 'Helen', 'Laced Romeo', and 'Red Rocket'.",
        url:"url(" + "https://s3.ap-south-1.amazonaws.com/zo-media/cache/_4a78303e01f03b43dcc9d23ee0b3e811/081_ChembraTeaEstate_14_233x260.jpg" + ")"
      }, {
        title: "STREET",
        desc: "A street is a public thoroughfare (usually paved) in a built environment.",
        url:"url(" + "https://s3.ap-south-1.amazonaws.com/zo-media/cache/_4a78303e01f03b43dcc9d23ee0b3e811/081_ChembraTeaEstate_14_233x260.jpg" + ")"
      }]
    return rtn;
  }
  

  
class Cards extends React.Component {
    render() {
      const cardData = CardData();
      return (
        <section>
        {
          cardData.map((card, i) => {
            return (
              <div class="card-new slider-card card" id="card"style={this.props.cardStyle} >
    <a href="https://www.zostel.com/zostel/wayanad/">
        
              <div class="div-thumb__new" style={{  
  backgroundImage: card.url,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}
              >
              
              </div>
        
    </a>
    <div class="info-c">
        <div class="info-w__new">
            <p class="p-info-c-category">{card.title}</p>
            <p class="p-info-c-location" >{card.title}</p>
            <p class="desc">{card.desc}</p>
        </div>
        <div class="info-button">
            <a href="https://www.zostel.com/zostel/wayanad/">
                <button type="button" class="btn bttn-lg red-bg">EXPLORE</button>
            </a>
        </div>
    </div>
    <div class="social-c" >
        <i class="fa fa-share-alt" aria-hidden="true"></i>
    </div>
</div>
            )
          })
        }
        </section>
        
      )
    }
  }
class WhatsNew extends React.Component {
    
    
      constructor(props) {
        super(props);
        this.state = {
          currentCard: 0,
          position: 0,
          cardStyle: {
            transform: 'translateX(0px)'
          },
          width: 0,
        };
      }
    
      componentDidMount() {
        let boxWidth = document.getElementById("card").clientWidth;
        this.setState({ width: boxWidth });
        
      }
      
      // func: click the slider buttons
      handleClick(type) {
        // get the card's margin-right
        let margin = window.getComputedStyle(document.getElementById("card")).marginRight;
       let m = margin = JSON.parse(margin.replace(/px/i, '')); 
        const cardWidth = this.state.width*2; 
        const cardMargin = margin; // the card's margin
        const cardNumber = CardData().length; // the number of cards
        let currentCard = this.state.currentCard; // the index of the current card
        let position = this.state.position; // the position of the cards
    
        // slide cards
        if(type === 'next' && currentCard < cardNumber-1) {
          currentCard++;
          position -= (cardWidth+cardMargin);
        } else if(type === 'prev' && currentCard > 0) {
          currentCard--;
          position += (cardWidth+cardMargin);
        }
        this.setCard(currentCard, position);
      }
      
      setCard(currentCard, position) {
        this.setState({
          currentCard: currentCard,
          position: position,
          cardStyle: {
            transform: `translateX(${position}px)`
          }
        })
      }
    
      render() {
        return (<div>
            <div class="block__head mb-l10-m5">
            <div class="f-left">
                <h1 class="head-title">ZOSTEL DESTINATIONS</h1>
            </div>
            <div class="f-right">
                <a href="/zostel/" >
                    <p class="head-explore">Explore</p>
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                </a>
            </div>
        </div>
          <div className="cards-slider">
            <div className="slider-btns">
              <button className="slider-btn btn-l" onClick={() => this.handleClick('prev')}>&lt;</button>
              <button className="slider-btn btn-r" onClick={() => this.handleClick('next')}>&gt;</button>
            </div>
            <Cards cardStyle={this.state.cardStyle} />
          </div></div>
        )
      


}
}
    export default (WhatsNew);