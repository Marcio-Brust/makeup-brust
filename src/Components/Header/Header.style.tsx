import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: grid;
  grid-template-rows: 1fr 50px;
  width: 100%;
  background: ${({ theme }) => theme.background.tertiary};

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    a {
      text-decoration: none;
      display: block;
      padding: 6px 0px;
      color: #222;
      font-weight: 700;
      font-size: 0.7rem;
      border-bottom: solid 1.5px transparent;
      transition: 0.5s;

      &:hover {
        border-bottom: solid 1.5px #222;
      }
    }
  }
`;
