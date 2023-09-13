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
import { Auth , Hub} from 'aws-amplify';

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


export default function IndexNavbar(props) {

  const [formModal, setFormModal] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [color, setColor] = React.useState("navbar-transparent");
  const [buttonText, setButtonText] = React.useState("Sign In");
  const [disableClick, setDisableClick] = React.useState(false);


  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState();

  const handleSignOut = async () => {
    try {
      Auth.signOut({ global: true }); // Wait for the signOut method to complete
      // Perform any additional actions after successful sign out
      console.log('User signed out successfully', props.currentUser);
      props.currentUser = null;
      //console.log(props.currentUser, "props.currentUser");
    } catch (error) {
      // Handle any sign out errors here
      console.error('Sign out error:', error);
    }
  };

  let handleSignIn = async function (event) {
    try {

        event.preventDefault();
        let response = await Auth.signIn(email, password);
        //console.log(response, "response");
        setFormModal(false);
        
    } catch (error) {
        //console.log(error.message, "error signing in");

        

        if (error.message && error.message.includes(':')) {
          const errorMessageParts = error.message.split(':');
          if (errorMessageParts.length > 1) {
            setErrorMessage(errorMessageParts[1].trim());
          }
        } else {
          setErrorMessage(error.message);
        }

        if (error.message && error.message.includes('Custom auth lambda trigger is not configured for the user pool.')) {
          setErrorMessage('Password cannot be empty');
        }

        
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

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
  //console.log("props.currentUser", props.currentUser);


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
          
          {props.currentUser !== null ? (
            // Render the sign-out button when props is not null
            <Button
              id="profileButton"
              className="navbar-toggler"
              color="default"
              onClick={handleSignOut}

            >
              
              <i className="tim-icons icon-single-02" /> Sign Out
            </Button>
          ) : (
            // Render the sign-in button when props is null
            <Button
              id="profileButton"
              className="navbar-toggler"
              color="default"
              onClick={() => setFormModal(true)}

            >
              <i className="tim-icons icon-single-02" /> Sign In
            </Button>
          )}

          
        </div>
        
          
          <Nav navbar>
          {props.currentUser !== null ? (
            
            <NavItem>
              <Button
                id="profileButton"
                className="nav-link d-none d-lg-block"
                color="default"
                onClick={handleSignOut}
              >
                <i className="tim-icons icon-single-02" /> Sign Out
              </Button>
            </NavItem>
          ) : (
            <NavItem>
              <Button
                id="profileButton"
                className="nav-link d-none d-lg-block"
                color="default"
                onClick={() => setFormModal(true)}
              >
                <i className="tim-icons icon-single-02" /> Sign In
              </Button>
            </NavItem>
          )}
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
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ borderColor: errorMessage && errorMessage.includes('User') ? 'red' : '' }}
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
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ borderColor: errorMessage && errorMessage.includes('Password cannot') ? 'red' : '' }}
                    />
                  </InputGroup>
                  {errorMessage !== null && (
                    <div className="text-left text-muted">
                      <small style={{ color: 'red' }}>{errorMessage}</small>
                    </div>
                  )}
                </FormGroup>
                <FormGroup check className="mt-3">
                  <Label check>
                    <Input defaultChecked type="checkbox" />
                    <span className="form-check-sign" />
                    Remember me!
                  </Label>
                </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button" onClick={handleSignIn}>
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
