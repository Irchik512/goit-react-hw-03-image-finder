import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import 'style.css';

export default function ImageGallery({ images, onClick }) {
  return (
    <ul className="imageGallery" onClick={onClick}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          alt={image.tags}
          src={image.webformatURL}
          url={image.largeImageURL}
        />
      ))}
    </ul>
  );
}

ImageGallery.defaultProps = {
  onClick: () => null,
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  onClick: PropTypes.func,
};
