import { styled } from 'styled-components';

export const StyledFeedbackButton = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: 500ms;
  @media (hover: hover) {
    &:hover {
      background-color: #1228ba;
      color: #fff;
    }
  }
`;
