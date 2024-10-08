import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Headroom from 'react-headroom';

function App() {
  return (
    <div className='vh-100'>
      <Headroom>
        <Header></Header>
      </Headroom>
      <Home></Home>
      <Services></Services>
    </div>
  );
}

export default App;
