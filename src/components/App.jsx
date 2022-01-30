import { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import Modal from 'components/Modal/Modal';
export class App extends Component {
  state = {
    shoowModal: true,
  };
  handleSubmit = data => {
    console.log(data);
  };
  togleModal = () => {
    this.setState(({ shoowModal }) => ({ shoowModal: !shoowModal }));
  };
  render() {
    const { shoowModal } = this.state;
    return (
      <div className="app">
        <Searchbar onSubmit={this.handleSubmit} />
        {shoowModal && <Modal onClose={this.togleModal} />}
      </div>
    );
  }
}
