import logo from './logo.svg';
import './style/App.css';
import Header from './components/header.js'
import Footer from './components/footer.js'


function App() {


  return (

    <div class="container">
      <Header></Header>
        <div class="welcome">
            <h1>Welcome to Women Creating Change!</h1>
            <h3>Civic engagement resources at your fingertips</h3>
            <div class="buttonwrapper">
              <a href="/resources"><button class= "button">Let's get started.</button></a>
            </div>
        </div>
        <Footer></Footer>
    </div>
  );
}
export default App
