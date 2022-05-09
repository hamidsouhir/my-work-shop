import './App.css';
import Head from './components/Head';
import NavBar from './components/NavBar';
import First from './components/First';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Minvid from './components/Minvid';
import Img from './components/Img';
function App() {
  return (
    <div className="App">
     <Head/>
     <NavBar/>
     <First/>
     <Img/>
     <Minvid/>
    </div>
  );
}

export default App;
