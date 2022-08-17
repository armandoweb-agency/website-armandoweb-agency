import './App.css';
import LayoutContainer from './container/LayoutContainer';
import {ButtonColorContextProvider} from './context/ButtonColorContext';

function App() {

  return (
      <ButtonColorContextProvider>
        <LayoutContainer />   
      </ButtonColorContextProvider>
  );
}

export default App;
