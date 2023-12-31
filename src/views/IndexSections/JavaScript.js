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
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledCarousel,
} from "reactstrap";

const carouselItems = [
  {
    src: require("../../assets/img/before_after/1.png"),
    altText: "Slide 1",
    caption: "https://www.neverjordinary.com/post/my-review-of-75-hard-by-andy-frisella-with-tips",
    title: "Before",
  },
  {
    src: require("../../assets/img/before_after/2.png"),
    altText: "Slide 2",
    caption: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fandyfrisella.com%2Fpages%2F75hard-info&psig=AOvVaw1lm5S3IRVgc27oOgtXxXIW&ust=1694722887808000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCLjqye-0qIEDFQAAAAAdAAAAABAR",
    title: "Before",
  },
  {
    src: require("../../assets/img/before_after/3.png"),
    altText: "Slide 3",
    caption: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tomaskeenan.com%2F75-hard-a-life-changing-challenge&psig=AOvVaw1lm5S3IRVgc27oOgtXxXIW&ust=1694722887808000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCLjqye-0qIEDFQAAAAAdAAAAABAE",
    title: "Before",
  },
];

export default function JavaScript() {
  // const [demoModal, setDemoModal] = React.useState(false);
  // const [miniModal, setMiniModal] = React.useState(false);
  // const [formModal, setFormModal] = React.useState(false);
  // const [emailFocus, setEmailFocus] = React.useState(false);
  // const [passwordFocus, setPasswordFocus] = React.useState(false);
  return (
    <div className="section section-javascript" id="javascriptComponents">
      <img alt="..." className="path" src={require("../../assets/img/path5.png")} />
      <img
        alt="..."
        className="path path1"
        src={require("../../assets/img/path5.png")}
      />
      {/* <Container>
        <h3 className="title mb-5">Javascript components</h3>
        <h4 className="mb-5">Modal</h4>
        <Row id="modals">
          <Col md="4">
            <Button color="primary" onClick={() => setDemoModal(true)}>
              Launch Modal
            </Button>
          </Col>
          <Col md="4">
            <Button color="warning" onClick={() => setMiniModal(true)}>
              Launch Modal Mini
            </Button>
          </Col>
          <Col md="4">
            <Button color="success" onClick={() => setFormModal(true)}>
              Launch Modal Form
            </Button>
          </Col>

          <Modal isOpen={demoModal} toggle={() => setDemoModal(false)}>
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setDemoModal(false)}>
                <i className="tim-icons icon-simple-remove" />
              </button>
              <h4 className="title title-up">Modal title</h4>
            </div>
            <div className="modal-body">
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth.
              </p>
            </div>
            <div className="modal-footer">
              <Button color="default" type="button">
                Nice Button
              </Button>
              <Button
                color="danger"
                type="button"
                onClick={() => setDemoModal(false)}
              >
                Close
              </Button>
            </div>
          </Modal>

          <Modal
            modalClassName="modal-mini modal-primary modal-mini"
            isOpen={miniModal}
            toggle={() => setMiniModal(false)}
          >
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setMiniModal(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              <div className="modal-profile">
                <i className="tim-icons icon-single-02" />
              </div>
            </div>
            <div className="modal-body">
              <p>Always have an access to your profile</p>
            </div>
            <div className="modal-footer">
              <Button className="btn-neutral" color="link" type="button">
                Back
              </Button>
              <Button
                className="btn-neutral"
                color="link"
                onClick={() => setMiniModal(false)}
                type="button"
              >
                Close
              </Button>
            </div>
          </Modal>
          

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
                <h3 className="mb-0">Sign in with</h3>
              </div>
            </div>
            <div className="modal-body">
              <div className="btn-wrapper text-center">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img alt="..." src={require("../../assets/img/github.svg")} />
                </Button>
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img alt="..." src={require("../../assets/img/google.svg")} />
                </Button>
              </div>
              <div className="text-center text-muted mb-4 mt-3">
                <small>Or sign in with credentials</small>
              </div>
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

        </Row>
        <br />
        <br />
        <h4 className="mb-5 mt-3">Datepicker</h4>
        <Row>
          <Col md="4">
            <div className="datepicker-container">
              <FormGroup>
                <ReactDatetime
                  inputProps={{
                    className: "form-control",
                    placeholder: "Date Picker Here",
                  }}
                />
              </FormGroup>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <h4 className="mb-5 mt-3">Popovers</h4>
            <Button
              color="default"
              data-container="body"
              data-content="Here will be some very useful information about his popover."
              data-placement="top"
              id="tooltip657685043"
              size="sm"
              type="button"
            >
              On top
            </Button>
            <UncontrolledPopover placement="top" target="tooltip657685043">
              <PopoverHeader>Popover on Top</PopoverHeader>
              <PopoverBody>
                Here will be some very useful information about his popover.
              </PopoverBody>
            </UncontrolledPopover>
            <Button
              color="default"
              data-container="body"
              data-content="Here will be some very useful information about his popover.<br>
 Here will be some very useful information about his popover."
              data-placement="right"
              id="tooltip72798464"
              size="sm"
              type="button"
            >
              On right
            </Button>
            <UncontrolledPopover placement="right" target="tooltip72798464">
              <PopoverHeader>Popover on Right</PopoverHeader>
              <PopoverBody>
                Here will be some very useful information about his popover.
                <br /> Here will be some very useful information about his
                popover.
              </PopoverBody>
            </UncontrolledPopover>
            <Button
              color="default"
              data-container="body"
              data-content="Here will be some very useful information about his popover."
              data-placement="bottom"
              id="tooltip995717467"
              size="sm"
              type="button"
            >
              On bottom
            </Button>
            <UncontrolledPopover placement="bottom" target="tooltip995717467">
              <PopoverHeader>Popover on Bottom</PopoverHeader>
              <PopoverBody>
                Here will be some very useful information about his popover.
              </PopoverBody>
            </UncontrolledPopover>
            <Button
              color="default"
              data-color="primary"
              data-container="body"
              data-content="Here will be some very useful information about his popover."
              data-placement="left"
              id="tooltip31162359"
              size="sm"
              type="button"
            >
              On left
            </Button>
            <UncontrolledPopover placement="left" target="tooltip31162359">
              <PopoverHeader>Popover On Left</PopoverHeader>
              <PopoverBody>
                Here will be some very useful information about his popover.
              </PopoverBody>
            </UncontrolledPopover>
          </Col>
          <Col md="6">
            <h4 className="mb-5 mt-3">Tooltips</h4>
            <Button
              className="btn-tooltip"
              color="default"
              id="tooltip376048342"
              size="sm"
            >
              On left
            </Button>
            <UncontrolledTooltip
              delay={0}
              placement="left"
              target="tooltip376048342"
            >
              Tooltip on left
            </UncontrolledTooltip>
            <Button
              className="btn-tooltip"
              color="default"
              id="tooltip297889956"
              size="sm"
            >
              On top
            </Button>
            <UncontrolledTooltip
              delay={0}
              placement="top"
              target="tooltip297889956"
            >
              Tooltip on top
            </UncontrolledTooltip>
            <Button
              className="btn-tooltip"
              color="default"
              id="tooltip789511871"
              size="sm"
            >
              On bottom
            </Button>
            <UncontrolledTooltip
              delay={0}
              placement="bottom"
              target="tooltip789511871"
            >
              Tooltip on bottom
            </UncontrolledTooltip>
            <Button
              className="btn-tooltip"
              color="default"
              id="tooltip353488548"
              size="sm"
            >
              On right
            </Button>
            <UncontrolledTooltip
              delay={0}
              placement="right"
              target="tooltip353488548"
            >
              Tooltip on right
            </UncontrolledTooltip>
            <div className="clearfix" />
            <br />
            <br />
          </Col>
        </Row>
      </Container> */}
      <div className="section">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="title">
              Discover the Challenge
              </h1>
              <p className="text-white mt-4">
              Explore the 75 Hard challenge, a transformative fitness journey pioneered by entrepreneur Andy Frisella. This unique challenge has been a catalyst for personal growth and self-improvement for countless individuals. It's an intensive 75-day commitment that involves daily workouts, a strict diet, hydration goals, consistent reading, and progress tracking. The 75 Hard challenge is a test of your mental and physical resilience, designed to help you build unwavering discipline and develop lasting habits. Discover how this challenge has impacted lives and consider taking on this extraordinary endeavor yourself.
              </p>
              <Button
                className="mt-4"
                color="warning"
                href="https://www.forbes.com/health/fitness/what-is-the-75-hard-challenge/"
              >
                Learn More
              </Button>
            </Col>
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
