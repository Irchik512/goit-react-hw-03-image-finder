import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from 'components/Searchbar/Searchbar';
import Modal from 'components/Modal/Modal';
import ImagesView from './ImagesView/ImagesView';
import 'style.css';

export class App extends Component {
  state = {
    shoowModal: false,
    searchingQuery: '',
    url: null,
    tag: null,
  };
  handleClick = (url, tag) => this.setState({ url, tag });
  handleSubmit = searchingQuery => {
    this.setState({ searchingQuery });
  };
  togleModal = () => {
    this.setState(({ shoowModal }) => ({ shoowModal: !shoowModal }));
  };
  render() {
    const { shoowModal, searchingQuery } = this.state;
    return (
      <div className="app">
        <Searchbar onSubmit={this.handleSubmit} />
        <ToastContainer autoClose={3000} icon={false}></ToastContainer>
        {shoowModal && (
          <Modal onClose={this.togleModal}>
            <img src={this.state.url} alt={this.state.tag} />
          </Modal>
        )}
        <ImagesView
          searchingQuery={searchingQuery}
          onClick={this.handleClick}
          togleModal={this.togleModal}
        />
      </div>
    );
  }
}
