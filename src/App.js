import logo from './Images/logo.svg';
import mockup from './Images/illustration-mockups.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="huddle logo"/>
      </header>

      <main>
        <img src={mockup} alt="Mockup"/>
        <div className="content">
          <h2>Build The Community Your Fans Will Love</h2>
          <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine conversation.</p>
          <button>Register</button>

        </div>

      </main>
      <footer> facebook logo</footer>
    </div>
  );
}

export default App;
