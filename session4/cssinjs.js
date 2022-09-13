import styled from "styled-components";

const Button = styled.button`
  color: limegreen;
  border: 2px solid limegreen;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  &:hover {
    opacity: 0.9;
  }
`;

export default function App() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}
