import React, { Component } from "react";
import "./App.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    return (
      <div className="text-center">
        <h1 className="m-3">This test will determine your IQ!</h1>
        <Form>
          <FormGroup tag="fieldset">
            <legend>Is Wesley stoopid?</legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> lol.
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> No
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> No
              </Label>
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <legend>Is Zoey the best?</legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" /> Yes
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" /> Yes
              </Label>
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <Button onClick={this.toggle}>See your IQ!</Button>
          </FormGroup>
        </Form>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Your IQ Results!</ModalHeader>
          <ModalBody>
            Congrats! Your IQ is:
            <h1>0</h1>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default App;
