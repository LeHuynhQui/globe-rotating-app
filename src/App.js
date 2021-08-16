import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Loading from './components/Loading';

function App() {
  return (
    <div className="App">
      <Loading />
      <Header />
      <Content />
    </div>
  );
}

export default App;
