import SampleContextProvider from './contexts/SampleContext';
import Routing from './Routing';

function App() {
  return (
    <div className="App">
      <SampleContextProvider>
        <Routing/>
      </SampleContextProvider>
    </div>
  );
}

export default App;
