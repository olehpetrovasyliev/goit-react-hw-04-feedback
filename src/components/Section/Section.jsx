import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

// Section.PropTypes = {
//   title: PropTypes.string,
//   children: PropTypes.node,
// };

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
