import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main'
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
     {/* <Header/>
     <div className="container-fluid">
       <div className="row">
         <Nav/>
         <Main/>
       </div>
     </div> */}
     <Login/>
    </div>
  );
}

export default App;
