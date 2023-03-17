import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'style.css';
import { toast } from 'react-toastify';
import { ReactComponent as SearchIcon } from 'icons/search.svg';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const trimQuery = this.state.searchQuery.trim();
    if (trimQuery === '') {
      return toast.error('There is nothing to find. Try again!', {
        theme: 'colored',
      });
    }
    this.props.onSubmit(trimQuery);
    this.reset();
  };

  reset = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <button
            type="submit"
            className="searchForm-button"
            aria-label="find image"
          >
            <SearchIcon></SearchIcon>
          </button>

          <input
            className="searchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleChange}
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
