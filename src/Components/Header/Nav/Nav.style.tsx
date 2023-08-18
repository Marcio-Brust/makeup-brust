import styled from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    margin: 40px;
    width: 100px;
    background: ${({ theme }) => theme.background.tertiary};
    border: none;
    cursor: pointer;

    svg {
      font-size: 1.5rem;
    }
  }

  img {
    width: 400px;
    object-fit: cover;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      display: block;
      padding: 0 20px;
      cursor: pointer;

      svg {
        fill: #222;
        font-size: 1.5rem;
      }
    }
  }
`;
