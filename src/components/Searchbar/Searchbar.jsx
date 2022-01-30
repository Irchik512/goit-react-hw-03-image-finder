import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'style.css';

class Searchbar extends Component {
  //   state = {
  //     name: '',
  //     number: '',
  //   };

  //   handleChange = e => {
  //     const { name, value } = e.currentTarget;
  //     this.setState({ [name]: value });
  //   };

  //   handleSubmit = e => {
  //     e.preventDefault();
  //     this.props.onSubmit(this.state);
  //     this.reset();
  //   };

  //   reset = () => {
  //     this.setState({ name: '', number: '' });
  //   };

  render() {
    //     const { name, number } = this.state;
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.props.onSubmit()}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
