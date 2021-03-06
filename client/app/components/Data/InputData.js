import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';

import InputDataForm from './InputDataForm';

class InputData extends Component {

  render() {
    return (
      <Modal
        trigger={<Button color={this.props.buttonColor}>{this.props.buttonTriggerTitle}</Button>}
        dimmer='inverted'
        size='tiny'
        closeIcon='close'
      >
        <Modal.Header>{this.props.headerTitle}</Modal.Header>
        <Modal.Content>
          <InputDataForm
            buttonSubmitTitle={this.props.buttonSubmitTitle}
            buttonColor={this.props.buttonColor}
            dataID={this.props.dataID}
            onDataAdded={this.props.onDataAdded}
            onDataUpdated={this.props.onDataUpdated}
            server={this.props.server}
            socket={this.props.socket}
          />
        </Modal.Content>
      </Modal>
    );
  }
}

export default InputData;
