import PropTypes from 'prop-types';

const Button = ({ onClick, children }) => (
  <button type="button" className="button" onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = {
  onClick: () => null,
  children: null,
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
