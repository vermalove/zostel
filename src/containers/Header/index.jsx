import React from 'react';
import "./index.css";
import zostelLogo from "../../resources/logo/zostelLogo.png"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }

  headerTopic = (props) => {
    console.log(this.props.headerData)


    const data = this.props.headerData;
    const topicHead = data.map((data) =>
      <li key={data.id}>
        {data.name}
      </li>
    );
    //    {props.answers.map((answer, index) => {
    //       return (
    //         <div className="mb-3" key={index}>
    //           {/* <ViewTemplateAnswer answer={answer} selectedLanguage={props.selectedLanguage} /> */}
    //         </div>
    //       );
    //     })} 
    return (
      <ul>{topicHead}</ul>
    );
  }

  render() {
    {
      this.props.headerData.map((headerData, index) => {
        console.log(this.props.headerData);
      })
    }
    const { overlay } = this.props;
    return (
      <div>
        <Navbar color="light" light expand="md" className="header"  >
          <NavbarBrand href="/"><img className="logoCss" src={zostelLogo} alt="Logo" /></NavbarBrand>
          <NavbarToggler onClick={this.props.overlay} />


          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              {/* {this.headerTopic()} */}
              {this.props.headerData.map((headerData, index) => {
                const rowData = headerData

                return (

                  headerData.datatype == "#" ?
                    <NavItem>
                      <NavLink href="/components/">{headerData.name}</NavLink>
                    </NavItem>
                    :
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        {headerData.name}
                      </DropdownToggle>
                      <DropdownMenu right className="mul-col-3">
                        {
                          rowData.node.map((node, index) => {
                            return (

                              <DropdownItem>
                                {node}
                              </DropdownItem>



                            );
                          })
                        }
                      </DropdownMenu>
                    </UncontrolledDropdown>


                );
              })}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}