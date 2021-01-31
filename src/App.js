import logo from './logo.svg';
import './App.css';
import MainContent from "./components/mainContent";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
