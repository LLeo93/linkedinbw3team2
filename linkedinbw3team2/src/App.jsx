import Aside from "./Aside";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import ChatWindow from "./Components/ChatWindow";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
      <Nav />
      <Aside />
      <Footer />
      <ChatWindow />
    </>
  );
}
export default App;
