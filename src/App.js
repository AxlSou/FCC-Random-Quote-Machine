import './App.css';
import Quotes from './components/quotes';
import { useSelector } from 'react-redux';


function App() {

  const { backgroundColor } = useSelector((store) => store.quotes)

  return (
    <div className="App" style={{backgroundColor: backgroundColor}}>
      <Quotes />
    </div>
  );
}

export default App;
