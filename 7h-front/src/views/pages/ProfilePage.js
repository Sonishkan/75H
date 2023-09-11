/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";



// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";

// core components
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import Footer from "../../components/Footer/Footer.js";

const carouselItems = [
  {
    src: require("../../assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "Big City Life, United States",
  },
  {
    src: require("../../assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States",
  },
  {
    src: require("../../assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "Stocks, United States",
  },
];

let ps = null;

export default function ProfilePage() {
  const [tabs, setTabs] = React.useState(1);
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);
    const handleButtonClick = () => {
      console.log("Button clicked!, tabs = ", tabs);
      // this is used change the setting of how the challenge is completed
      // if the user is on the "All" tab, then if one item isnt checked off then the whole challenge restarts
      // if the user is on the "Individual" tab, then if one item isnt checked off then only that item restarts
    };
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="dots"
            src={require("../../assets/img/dots.png")}
          />
          <img
            alt="..."
            className="path"
            src={require("../../assets/img/path4.png")}
          />
          <Container className="align-items-center">
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">Welcome</h1>
                <h5 className="text-on-back">01</h5>
                <p className="profile-description">
                Welcome to your 75 Hard profile, the hub for your transformative journey! 
                Here, you'll track your progress and commit to the challenge, which was 
                created by fitness entrepreneur Andy Frisella. You have two options for tackling 
                the challenge: 'All-In' for unwavering commitment or 'Individual' for flexibility. 
                In 'All-In,' any slip-up restarts the entire challenge, while 'Individual' lets 
                you focus on specific attributes. It's your journey, your choice. Push your limits, 
                build resilience, and achieve personal growth with 75 Hard.
                </p>
                
              </Col>
              <Col className="ml-auto mr-auto" lg="4" md="6">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={require("../../assets/img/mike.jpg")}
                    />
                    <h4 className="title">Mike Scheinder</h4>
                  </CardHeader>

                  
                  <CardBody>
                    
                    <Nav
                      className="nav-tabs-primary justify-content-center"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 1,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(1);
                          }}
                          href="#pablo"
                        >
                          All-In
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 2,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(2);
                          }}
                          href="#pablo"
                        >
                          Individual
                        </NavLink>
                      </NavItem>
                      
                    </Nav>
                    <div className="text-center text-muted mb-4 mt-0">
                      <small>Set Challenge Type</small>
                    </div>
                    <TabContent
                      className="tab-subcategories"
                      activeTab={"tab" + tabs}
                      
                    >
                      
                      <Button
                          className="btn-simple btn-icon btn-round float-right"
                          color="primary"
                          type="submit"
                          id="submitButton"
                          onClick={handleButtonClick}
                        >
                          <i className="tim-icons icon-send" />
                        </Button>

                        <UncontrolledTooltip placement="bottom" target="submitButton">
                          Update the Challenge Type
                        </UncontrolledTooltip>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        
        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={carouselItems} />
                </Row>
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">Projects</h1>
                <h5 className="text-on-back">02</h5>
                <p className="profile-description text-left">
                  An artist of considerable range, Ryan — the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                  performs and records all of his own music, giving it a warm,
                  intimate feel with a solid groove structure. An artist of
                  considerable range.
                </p>
                <div className="btn-wrapper pt-3">
                  <Button
                    className="btn-simple"
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-book-bookmark" /> Bookmark
                  </Button>
                  <Button
                    className="btn-simple"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-bulb-63" /> Check it!
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        
        <Footer />
      </div>
    </>
  );
}
