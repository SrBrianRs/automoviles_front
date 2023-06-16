//import logo from './../logo.svg';
import './../styles/App.css';
import LinkList from './LinkList';
import CreateLink from './CreateLink';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Perfil from './Perfil';
import Login from './Login';

import MenuIAS from './openai/MenuIA';
import Filter from './Filtrar';


function App ()  {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>

          <Route  path="/Perfil" element={<Perfil/>} />

          <Route path="/" element={<LinkList/>} />
          <Route
            path="/create"
            element={<CreateLink/>}
          />
          <Route path="/login" element={<Login/>} />

          
          <Route path="/menuia" element={<MenuIAS/>} />
          <Route path="/search"element={<Filter/>}/>




        </Routes>
      </div>
    </div>
  );
  }


export default App;



