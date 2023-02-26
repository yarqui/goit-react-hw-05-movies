import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  padding: 24px;
  margin: 0 auto;
  align-items: center;
  max-width: 400px;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: none;
  outline: none;
  padding: 12px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 47px;
  color: #ffffff;
  border: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-image: url('https://cdn-icons-png.flaticon.com/512/711/711319.png');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  opacity: 1;

  :hover {
    opacity: 0.8;
  }
`;
