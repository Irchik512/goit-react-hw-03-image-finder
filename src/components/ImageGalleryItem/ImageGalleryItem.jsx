import PropTypes from 'prop-types';

export default function ImageGalleryItem(props) {
  return (
    <li class="gallery-item">
      <img src="" alt="" />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
