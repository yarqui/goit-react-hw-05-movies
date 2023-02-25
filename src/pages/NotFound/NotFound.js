const { Link } = require('react-router-dom');
const { default: PAGE_NAMES } = require('router/paths');

const NotFound = () => {
  return (
    <>
      <p>There's no such page</p>
      <Link to={PAGE_NAMES.homepage}>Back to Homepage</Link>
    </>
  );
};

export default NotFound;
