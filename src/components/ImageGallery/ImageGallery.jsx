import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery(props) {
  return (
    <ul class="gallery">
      {props.map(prop => (
        <ImageGalleryItem />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {};
