import { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import Modal from 'components/Modal/Modal';
export class App extends Component {
  state = {};
  handleSubmit = data => {
    console.log(data);
  };

  render() {
    return (
      <App>
        <Searchbar onSubmit={this.handleSubmit} />
        <Modal />
      </App>
    );
  }
}
