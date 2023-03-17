import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Text from 'components/Text/Text';
import Loader from 'components/Loader/Loader';
import fetchPhoto from 'services/Api';
import Modal from 'components/Modal/Modal';

export class ImagesView extends Component {
  state = {
    images: [],
    page: 1,
    error: null,
    isNextPage: false,
    status: 'idle',
    shoowModal: false,
    url: null,
    tag: null,
  };

  componentDidUpdate(prevProps) {
    const { searchingQuery } = this.props;

    if (prevProps.searchingQuery !== searchingQuery) {
      this.setState({ page: 1, images: [], error: null });
      this.fetchingPhotos();
    }
  }

  fetchingPhotos = async () => {
    const { page } = this.state;
    const { searchingQuery } = this.props;
    // this.setState({ status: 'pending' });
    try {
      const { hits, isTheNextPage } = await fetchPhoto(searchingQuery, page);
      this.setState(({ images }) => ({
        images: [...images, ...hits],
        status: 'resolved',
        isNextPage: isTheNextPage,
        page: page + 1,
      }));
      console.log(this.state);

      // window.scrollTo({
      //   top: document.documentElement.scrollHeight,
      //   // behavior: 'smooth',
      // });
    } catch (error) {
      this.setState({ error, status: 'rejected' });
    }
  };
  togleModal = () => {
    this.setState(({ shoowModal }) => ({ shoowModal: !shoowModal }));
  };
  handleClick = (url, tag) => this.setState({ url, tag });

  handleButtonClick = () => {
    this.fetchingPhotos();
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  handleImgClick = e => {
    const { onClick, togleModal } = this.props;
    if (e.target.className !== 'imageGalleryItem-image') {
      return;
    }
    const largeUrl = e.target.attributes.url.value;
    onClick(largeUrl, e.target.alt);
    togleModal();
  };

  //  Запит черерз Fetch
  // fetch(
  //   `https://pixabay.com/api/?key=24522625-682bca817ecb73336eef5fcc0&q=${this.props.searchingQuery}&page=${this.state.page}&image_type=photo&orientation=horizontal&per_page=12`
  // )
  //   .then(resp => {
  //     if (resp.ok) {
  //       return resp.json();
  //     }
  //     return Promise.reject(new Error('fetch not found!'));
  //   })
  //   .then(({ hits, totalHits }) =>
  //     this.setState(({ images, page }) => ({
  //       images: [...images, ...hits],
  //       status: 'resolved',
  //       page: page + 1,
  //     }))
  //   )
  //   .catch(error => this.setState({ error, status: 'rejected' }));

  render() {
    const { images, shoowModal, error, status, isNextPage } = this.state;

    if (status === 'idle') {
      return <Text>Enter samething to find.</Text>;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <Text>{error.message}</Text>;
    }
    if (status === 'resolved') {
      return (
        <>
          {shoowModal && (
            <Modal onClose={this.togleModal}>
              <img src={this.state.url} alt={this.state.tag} />
            </Modal>
          )}
          <ImageGallery images={images} onClick={this.handleImgClick} />
          {isNextPage ? (
            <Button onClick={this.handleButtonClick} />
          ) : (
            <Text>There is no more photo.</Text>
          )}
        </>
      );
    }
  }
}

ImagesView.propTypes = {
  searchingQuery: PropTypes.string.isRequired,
};

export default ImagesView;

// export class ImageGallery extends Component {

//     onLoadMore = () => {
//         this.setState({status: 'pending',});
//         this.setState({page: this.state.page + 1});

//         console.log(this.state.page)

//         const nextName = this.props.pictureName;

//             GalleryApi(nextName, this.state.page + 1)
//             .then(nextPictures  => {

//                 const pictures = this.state.pictures.concat(nextPictures)

//                 console.log(pictures)
//                 this.setState({ pictures, status: 'resolved' })})
//             .catch(error => this.setState({ error, status: 'rejected' }))
//     };
