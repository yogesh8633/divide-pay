import '../src/assets/scss/index.scss';
import Header from './components/Header';
import Home from './components/Home';
import InstantReward from './components/InstantReward';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import EasiestInterface from './components/EasiestInterface';
import CreditLimit from './components/CreditLimit';
import ManageExpenses from './components/ManageExpenses';
import SuperCard from './components/SuperCard';
import DividepayCard from './components/DividePayCard';
import ShopOnline from './components/ShopOnline';
import AboutUs from './components/AboutUs';
function App() {
  return (
    <div className='container'>
      <Header/>
      <Home/>
      <InstantReward/>
      <EasiestInterface/>
      <CreditLimit/>
      <ManageExpenses/>
      <SuperCard/>
      <DividepayCard/>
      <ShopOnline/>
      <AboutUs/>
      </div>
  );
}

export default App;
   