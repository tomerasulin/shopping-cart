import styled from 'styled-components';
import { IconButton } from '@mui/material';

export const Wrapper = styled.div`
  margin: 40px;

  h1 {
    text-align: center;
    font-size: 48px;
    padding: 0;
    margin: 0 0 20px 0;
  }

  @media screen and (max-width: 375px) {
    h1 {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 320px) {
    h1 {
      font-size: 36px;
    }
  }
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 45px;

  @media screen and (max-width: 375px) {
    right: 10px;
    top: 40px;
  }

  @media screen and (max-width: 320px) {
    right: 10px;
    top: 40px;
  }
`;
