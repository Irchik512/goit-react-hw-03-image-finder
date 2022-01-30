import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'style.css';

class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidApdate');
  }
  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
  }
  render() {
    return (
      <div class="overlay">
        <div class="modal">
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Modal;
