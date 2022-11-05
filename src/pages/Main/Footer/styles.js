import styled from "styled-components";

// 320px — 480px: Mobile devices
// 481px — 768px: iPads, Tablets
// 769px — 1024px: Small screens, laptops
// 1025px — 1200px: Desktops, large screens
// 1201px and more —  Extra large screens, TV

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const FooterButtonContainer = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--light-gray);

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
    font-size: 0.9rem;
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
