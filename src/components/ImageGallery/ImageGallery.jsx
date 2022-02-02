import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import 'style.css';

export default function ImageGallery({ images }) {
  return (
    <ul className="imageGallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          alt={image.tags}
          src={image.webformatURL}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {};
