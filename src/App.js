import './App.css';
import Main from "./components/Main"
import styled from "styled-components";



function App() {
  return (
    <inAppWrapper>
    <Main />
    
    </inAppWrapper>
  );
}


export const inAppWrapper = styled.div`
width: 60%;
margin: 0 auto;
`;
export default App;

