import './App.css';
import Movies from './components/fetchApi';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {

 
  return (
    <div className="App">
      <Header/>
      <Movies/> 
      <Footer/>
    </div>
  );
}

export default App;
