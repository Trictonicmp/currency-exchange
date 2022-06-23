import PropTypes from 'prop-types';

const DetailsHeader = (props) => {
  const { name, flag } = props;

  return(
    
  );
};

DetailsHeader.propTypes = {
  name: PropTypes.string,
  flag: PropTypes.string,
};

DetailsHeader.defaultProps = {
  name: 'Unknown',
  flag: '⚠️',
};

export default DetailsHeader;
