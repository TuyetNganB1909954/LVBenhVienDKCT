import { DataProvider } from './GlobalState';
import { BrowserRouter as Router } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from './component/header/Header';
import Main from './component/main/page'
import Footer from './component/footer/Footer';
// import Menu from '../../admin/src/component/menu/Menu';
function App() {
  return (
    <DataProvider>
    <Router>
      <Header/>
      <Main/>
      <Footer/>
    </Router>
   </DataProvider>
  );
}

export default App;
