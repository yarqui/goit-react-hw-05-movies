import {
  LinkStyled,
  SecondaryTitle,
} from 'pages/MovieDetails/MovieDetails.styled';

const { default: PAGE_NAMES } = require('router/paths');

const NotFound = () => {
  return (
    <>
      <SecondaryTitle>There's no such page</SecondaryTitle>
      <LinkStyled to={PAGE_NAMES.homepage}>Back to Homepage</LinkStyled>
    </>
  );
};

export default NotFound;
