import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headroom from 'react-headroom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import ExtendedServices from './components/Services/ExtendedServices';
import CustomerFeedback from './components/CustomerFeedback/CustomerFeedback';
import ContactUs from './components/ContactUs/ContactUs';
import ContactForm from './components/ContactUs/ContactForm';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='vh-100'>
      <Headroom>
        <Header></Header>
      </Headroom>
      <Home></Home>
      <Services></Services>
      <ExtendedServices></ExtendedServices>
      <CustomerFeedback></CustomerFeedback>
      <ContactUs></ContactUs>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}

export default App;
