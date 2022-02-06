import PropTypes from 'prop-types';

const Button = ({ onClick }) => (
  <button type="button" className="button" onClick={onClick}>
    Load more
  </button>
);

Button.defaultProps = {
  onClick: () => null,
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
