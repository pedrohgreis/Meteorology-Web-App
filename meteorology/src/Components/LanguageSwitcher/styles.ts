import { styled } from "styled-components";

export const Languages = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 2px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
