import Navbar from "react-bootstrap/Navbar";
import '../style/header.css';
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../firebaseConfig.js";
import {logout} from "../firebaseConfig";

function Header() {
  return (
    <Navbar background-color="white" bg="light">
        <Navbar.Brand class="google-link">
          <button class="google-button">
          <img  width="20px" onClick={signInWithGoogle()} height="20px" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"></img>
          Sign in with Google</button>
        </Navbar.Brand>
        <Navbar.Brand class="link" href="https://wccny.org/">Resources</Navbar.Brand>
        <Navbar.Brand class="link" href="/discussion">Discussion Room</Navbar.Brand>
        <Navbar.Brand class="link" href="https://www.ny.gov/services/register-vote">Register to Vote!</Navbar.Brand>
        <Navbar.Brand class="link" href="/">Home</Navbar.Brand>
</Navbar>

  );
}
export default Header;
