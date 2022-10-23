import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  height: 100vh;

  background-color: var(--dark-gray);
`;

export const Timer = styled.div`
  & > h1 {
    color: white;
    font-size: 2rem;
  }
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LinesWrapper = styled.div``;

export const Word = styled.span`
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.backgroundColor};
  border-radius: 0.2rem;
  padding: 0.2rem;
  font-weight: 500;
  font-size: 1.5rem;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #444446;
  color: white;
  font-size: 1.7rem;
  padding: 0.2rem;
  margin-top: 1rem;

  &:focus {
    outline: none;
  }

  text-align: center;
`;
