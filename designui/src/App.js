import { useEffect , useState } from 'react';
import './App.css';
import Acceuil from './components/Acceuil';
import Connection from './components/Connection';
import Loader from './components/Loader';


function App() {
  const [loader, setloader] = useState(true) ;
  useEffect(() => {
    setTimeout(()=>{setloader(false)},4500)
  }, [])

  return (
      <div className="app">
          {(loader)?<Loader />:<Acceuil/>}
          {/* <Connection/> */}
      </div>
  );
}

export default App;
