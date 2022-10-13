import About from './components/About';
import GlassServices from './components/GlassServices';
import Header from './components/Header';
import HomeLanding from './components/HomeLanding';

function App() {
  return (
    <div className='App'>
      <Header />
      <HomeLanding />
      <About />
      <GlassServices />
    </div>
  );
}

export default App;
