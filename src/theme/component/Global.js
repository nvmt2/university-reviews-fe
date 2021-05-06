import { createGlobalStyle } from 'styled-components';
export const Global = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    transition: all 500ms;
  }
`;
