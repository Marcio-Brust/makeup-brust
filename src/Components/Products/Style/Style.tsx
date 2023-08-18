import styled from "styled-components";

export const SectionStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  div {
    width: 200px;
    height: 200px;
    background: red;
  }
  img {
    display: block;
    object-fit: contain;
    width: 100%;
  }
`;
