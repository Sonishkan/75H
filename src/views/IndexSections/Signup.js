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
import { Link } from "react-router-dom";
import { Auth, Hub } from 'aws-amplify';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  Modal,
  formModal,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Signup() {

  
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [formModal, setFormModal] = React.useState(false);
  const [fullname, setFullName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [confirmCode, setConfirmCode] = React.useState("");
  const [confirmFocus, setConfirmFocus] = React.useState(false);

  function listenToAutoSignInEvent() {
    Hub.listen('auth', ({ payload }) => {
      const { event } = payload;
      if (event === 'autoSignIn') {
        const user = payload.data;
        // assign user
      } else if (event === 'autoSignIn_failure') {
        // redirect to sign in page
      }
    })
  }

  let handleSubmit = async function (event) {
    try {

        //event.preventDefault();
        //let response = await Auth.signIn(email, password);
        //console.log(response, "response");
        { /* if the response is successful, then redirect to the profile page */ }
        console.log(email, confirmCode);
        let response = await Auth.confirmSignUp(email, confirmCode);
        

        
    } catch (error) {
        console.log(error, "error signing in");
        //alert("Incorrect username or password");
    }
  };
  let handleRegister = async function (event) {
    try {
    
    console.log(fullname, password, email);
    
    const {user} = await Auth.signUp({
      username: email,
      password: password
      ,userAttributes: {fullname},
      autoSignIn: {
        enabled: true,
      },

    });
    setFormModal(true);
    console.log(user, 'hey');
    } catch (error) {
      alert(error.message);
    }


  }

  return (
    
    
    <div className="section section-signup">
      <Container>
      
        <div className="squares square-1" />
        <div className="squares square-2" />
        <div className="squares square-3" />
        <div className="squares square-4" />
        <Row className="row-grid justify-content-between align-items-center">
          <Col lg="6">
            <h3 className="display-3 text-white">
              Sign Up and Take Control
            </h3>
            <p className="text-white mb-3">
            Ready to conquer the 75 Hard challenge? Sign up now and take control 
            of your fitness and mental fortitude. Our platform is your perfect companion 
            on this demanding journey. Track your daily workouts, diet, water intake, 
            reading progress, and see your transformation unfold. Join a community of 
            dedicated individuals who are committed to pushing their limits and becoming 
            the best version of themselves. Don't wait any longer; start your 75 Hard challenge 
            and watch your life change one day at a time. Sign up today and let's get started!
            </p>

          </Col>
          <Col className="mb-lg-auto" lg="6">
            <Card className="card-register">
              <CardHeader>
                <CardImg
                  alt="..."
                  src={require("../../assets/img/square-purple-1.png")}
                />
                <CardTitle tag="h4">Register</CardTitle>
              </CardHeader>
              <CardBody>
                <Form className="form">
                  <InputGroup
                    className={classnames({
                      "input-group-focus": fullNameFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Full Name"
                      type="text"
                      onFocus={(e) => setFullNameFocus(true)}
                      onBlur={(e) => setFullNameFocus(false)}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames({
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
                      type="text"
                      onFocus={(e) => setEmailFocus(true)}
                      onBlur={(e) => setEmailFocus(false)}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames({
                      "input-group-focus": passwordFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-lock-circle" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      onFocus={(e) => setPasswordFocus(true)}
                      onBlur={(e) => setPasswordFocus(false)}
                      onChange={(e) => setPassword(e.target.value)}
                      
                    />
                  </InputGroup>
                  <FormGroup check className="text-left">
                    <Label check>
                      <Input type="checkbox" />
                      <span className="form-check-sign" />I agree to the{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        terms and conditions
                      </a>
                      .
                    </Label>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-round" color="primary" size="lg" onClick={handleRegister}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>


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
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup
                    className={classnames("input-group-alternative", {
                      "input-group-focus": confirmFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Confirmation Code"
                      type="number"
                      onFocus={(e) => setConfirmFocus(true)}
                      onBlur={(e) => setConfirmFocus(false)}
                      onChange={(e) => setConfirmCode(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button" onClick={handleSubmit}>
                    Confirm
                  </Button>
                </div>
              </Form>
            </div>
          </Modal>
      </Container>

      
    </div>

    
  );
}
