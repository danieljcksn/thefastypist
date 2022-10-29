import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  height: calc(100vh - 2rem);
  padding: 1rem 30rem;

  background-color: var(--dark-gray);

  justify-content: space-between;
`;

export const Logo = styled.h1`
  font-family: "Poppins", sans-serif;

  color: var(--light-gray);

  font-weight: 600;
  font-style: italic;

  font-size: 1.6rem;

  &:hover {
    cursor: pointer;
  }

  & > span {
    color: var(--green);
  }
`;

export const InlineButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--light-gray);

  background-color: transparent;
  outline: none;
  border: none;

  font-size: 1rem;

  &:hover {
    cursor: pointer;
    color: var(--green);
  }

  & > span {
    margin-left: 0.5rem;
  }
  transition: 0.2s;
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

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FooterButtonContainer = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--light-gray);

  font-size: 1rem;

  &:hover {
    cursor: pointer;
    color: var(--green);
  }

  & > span {
    margin-left: 0.5rem;
  }

  transition: 0.2s;
`;

export const Word = styled.span`
  color: ${(props) => props.textColor};
  padding: 0.2rem;
  font-weight: 400;
  font-size: 1.7rem;
`;

export const SecondaryLine = styled.span`
  color: var(--light-gray);
  font-weight: 400;
  font-size: 1.5rem;
`;

export const PrimaryLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SecondaryLinesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Letter = styled.p`
  color: ${(props) => props.color};
  font-weight: 400;
  font-size: 1.7rem;
`;
