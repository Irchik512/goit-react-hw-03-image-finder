import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from 'components/Searchbar/Searchbar';
import Modal from 'components/Modal/Modal';
import ImageGallery from './ImageGallery/ImageGallery';
import 'style.css';
import Button from './Button/Button';

export class App extends Component {
  state = {
    shoowModal: false,
    searchQuery: null,
    searchResponse: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      fetch(
        `https://pixabay.com/api/?key=24522625-682bca817ecb73336eef5fcc0&q=${this.state.searchQuery}&page=1&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(resp => resp.json())
        .then(searchResponse => {
          if (searchResponse.total !== 0) {
            this.setState({ searchResponse });
          }
        });
    }
  }

  handleSubmit = searchQuery => {
    console.log(searchQuery);
    this.setState({ searchQuery });
  };
  togleModal = () => {
    this.setState(({ shoowModal }) => ({ shoowModal: !shoowModal }));
  };
  render() {
    const { shoowModal } = this.state;
    return (
      <div className="app">
        <Searchbar onSubmit={this.handleSubmit} />
        <ToastContainer autoClose={3000} icon={false}></ToastContainer>
        {this.state.searchResponse && (
          <>
            <ImageGallery images={this.state.searchResponse.hits} />
            <Button children="Load-more" />
          </>
        )}

        {shoowModal && <Modal onClose={this.togleModal} />}
      </div>
    );
  }
}
//
