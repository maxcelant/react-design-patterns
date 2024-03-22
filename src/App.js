import MyForm from "./CompoundComponent/MyForm";
import { StyledButton, StyledText } from "./HigherOrderComponent/withStyles";

function App() {
  return (
    <div className="App">
      <StyledButton />
      <StyledText />
      <MyForm />
    </div>
  );
}

export default App;
