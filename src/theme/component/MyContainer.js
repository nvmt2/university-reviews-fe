import styled from 'styled-components';

export const MyContainer = styled.div`
  background: ${({ theme }) => theme.backgroundContainer};
  color: ${({ theme }) => theme.textColor};
`;
