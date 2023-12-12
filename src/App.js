import './App.css';
import './Components/css/styles.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Referencedata from './Components/Referencedata';
import OrderbookFileUpload from './Components/OrderbookFileUpload';
import UpdateRefData from './Components/UpdateRefData';
import AddReferenceData from './Components/AddReferenceData';
import UserLogin from './Components/Userlogin';
import Search from './Components/Search';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" Component={UserLogin} />
      <Route exact path="/referencedata" Component={Referencedata} />
      <Route exact path="/orderbookfileupload" Component={OrderbookFileUpload} />
      <Route path='/updaterecords' Component={UpdateRefData} />
      <Route path='/addnewreferencedata' Component={AddReferenceData} />
      <Route path='/search' Component={Search} />
    </Routes>
    </BrowserRouter>

  );

};



export default App;





































































