import styled from "styled-components";

export const HomeStyled = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 0 20px;
  background: ${({ theme }) => theme.background.secondary};

  div {
    display: grid;
    margin: 0 auto;
    margin-top: 10px;
    grid-template-rows: 1fr 30px 30px;
    width: 200px;
    text-align: center;
    align-items: center;
    cursor: pointer;

    img {
      display: block;
      object-fit: contain;
      width: 100%;
    }
    main {
      display: flex;
      align-items: center;

      h1 {
        margin: 0 auto;
      }
    }

    h1 {
      font-weight: 700;
      font-size: 0.7rem;
    }

    p,
    span {
      font-size: 0.7rem;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    button {
      padding: 10px 30px;
      font-weight: 700;
      font-size: 0.6rem;
      border: solid 2px #222;
      background: ${({ theme }) => theme.background.secondary};
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.background.secondary};
        background: #222;
      }
    }
  }
`;
