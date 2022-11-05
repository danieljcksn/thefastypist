import styled from "styled-components";

// 320px — 480px: Mobile devices
// 481px — 768px: iPads, Tablets
// 769px — 1024px: Small screens, laptops
// 1025px — 1200px: Desktops, large screens
// 1201px and more —  Extra large screens, TV

export const PageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  height: calc(100vh - 2rem);

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 2rem 1.5rem;
  }

  @media (min-width: 480px) and (max-width: 768px) {
    padding: 1rem 1rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
  }

  @media (min-width: 1201px) {
    padding: 1rem 22rem;
  }

  background-color: var(--dark-gray);

  justify-content: space-between;
`;

export const Timer = styled.div`
  & > h1 {
    color: white;
    font-size: 2rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Word = styled.span`
  color: ${(props) => props.textColor};
  padding: 0.2rem;

  font-weight: 400;

  //media min width and max width
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1.4rem;
  }

  @media (min-width: 480px) and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
  }

  @media (min-width: 1201px) {
    font-size: 1.3rem;
  }
`;

export const Paragraph = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const Letter = styled.p`
  color: ${(props) => props.color};
  font-weight: 400;
  font-size: 1.7rem;
`;
