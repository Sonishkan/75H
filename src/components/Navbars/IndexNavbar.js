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
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";




// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Modal,
  Form,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Label,

} from "reactstrap";


export default function IndexNavbar() {

  const [formModal, setFormModal] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [color, setColor] = React.useState("navbar-transparent");
  const [buttonText, setButtonText] = React.useState("Sign In");
  const [disableClick, setDisableClick] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

    const location = useLocation();
    React.useEffect(() => {
      console.log(location.pathname);
      if (location.pathname === "/profile") { {/* if the path is /profile, then set the button to SIGN OUT */}
        setButtonText("Sign Out");
        setDisableClick(true);        
      } else {
        setButtonText("Sign In");
        setDisableClick(false);
      }
    });
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };

  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand id="navbar-brand">
            <span>75 Hard • </span>
            Build Mental Toughness
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Project made by Sonish Kandel
          </UncontrolledTooltip>
            
          <Button
            id="profileButton"
            className="navbar-toggler"
            color="default"
            onClick={() => setFormModal(true)}
            disabled={disableClick} // Disable the button when disableClick is true
          >
            <i className="tim-icons icon-single-02" /> {buttonText}
          </Button>

          
        </div>
        
          
          <Nav navbar>
            
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="default"
                onClick={() => setFormModal(true)}
                disabled={disableClick} // Disable the button when disableClick is true
              >
                <i className="tim-icons icon-single-02" /> {buttonText}
              </Button>
            </NavItem>
          </Nav>


        {/* Sign In Modal */}
        <Modal
            modalClassName="modal-black"
            isOpen={formModal}
            toggle={() => setFormModal(false)}
          >
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setFormModal(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              <div className="text-muted text-center ml-auto mr-auto">
                <h3 className="mb-0">Sign in</h3>
              </div>
            </div>
            <div className="modal-body">

              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup
                    className={classnames("input-group-alternative", {
                      "input-group-focus": emailFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      onFocus={(e) => setEmailFocus(true)}
                      onBlur={(e) => setEmailFocus(false)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup
                    className={classnames("input-group-alternative", {
                      "input-group-focus": passwordFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      onFocus={(e) => setPasswordFocus(true)}
                      onBlur={(e) => setPasswordFocus(false)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup check className="mt-3">
                  <Label check>
                    <Input defaultChecked type="checkbox" />
                    <span className="form-check-sign" />
                    Remember me!
                  </Label>
                </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button">
                    Sign in
                  </Button>
                </div>
              </Form>
            </div>
          </Modal>
          
      </Container>
    </Navbar>
  );
}
