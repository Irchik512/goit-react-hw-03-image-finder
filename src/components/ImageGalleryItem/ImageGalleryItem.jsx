import PropTypes from 'prop-types';
import 'style.css';

export default function ImageGalleryItem({ alt, src }) {
  return (
    <li className="imageGalleryItem ">
      <img className="imageGalleryItem-image" src={src} alt={alt} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
