import styled from "styled-components";

// 320px — 480px: Mobile devices
// 481px — 768px: iPads, Tablets
// 769px — 1024px: Small screens, laptops
// 1025px — 1200px: Desktops, large screens
// 1201px and more —  Extra large screens, TV

export const Logo = styled.h1`
  font-family: "Poppins", sans-serif;

  color: var(--light-gray);

  font-weight: 600;
  font-style: italic;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 0.8rem;
  }

  @media (min-width: 480px) and (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
  }

  @media (min-width: 1201px) {
    font-size: 1.5rem;
  }

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

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 0.8rem;
  }

  &:hover {
    cursor: pointer;
    color: var(--green);
  }

  & > span {
    @media (min-width: 320px) and (max-width: 480px) {
      margin-left: 0.2rem;
    }
    @media (min-width: 480px) and (max-width: 768px) {
      margin-left: 0.3rem;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
    }

    @media (min-width: 1024px) and (max-width: 1200px) {
    }

    @media (min-width: 1201px) {
      margin-left: 0.3rem;
    }
  }
  transition: 0.2s;
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
