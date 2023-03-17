import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from 'components/Searchbar/Searchbar';
import ImagesView from './ImagesView/ImagesView';
import 'style.css';

export class App extends Component {
  state = {
    searchingQuery: '',
  };
  handleSubmit = searchingQuery => {
    this.setState({ searchingQuery });
  };

  render() {
    const { searchingQuery } = this.state;
    return (
      <div className="app">
        <Searchbar onSubmit={this.handleSubmit} />
        <ToastContainer autoClose={3000} icon={false}></ToastContainer>

        <ImagesView searchingQuery={searchingQuery} />
      </div>
    );
  }
}
