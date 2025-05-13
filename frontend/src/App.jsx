import styled from 'styled-components';
import InputContainer from './Components/Input/Input'
import Login from './Pages/Login/Login';

const Container = styled.div `
  background-color: yellow;
`

export default function App() {
  return (
    <Container>
      <Login/> 
    </Container>
  );
}
