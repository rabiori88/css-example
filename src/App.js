import "./App.css";
import TailwindComponent from "./TailwindComponent";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  background: transparent;
  color: #b9eaff;
  margin: 0 1rem;
  ${props =>
    props.primary &&
    css`
      background: #009cd5;
      color: white;
    `}
`;

export default function App() {
  return (
    <div>
      <Button1></Button1>
      <Button2></Button2>
      <Container>
        <Button> Noramr button </Button>
        <Button primary> primary button </Button>
      </Container>
      <TailwindComponent></TailwindComponent>
    </div>
  );
}
