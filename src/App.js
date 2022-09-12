import Hero from './components/Hero';
import Projects from './components/Projects';
import Tecnologies from './components/Tecnologies';
import './styles/App.css';
import ScrollToTop from 'react-scroll-to-top'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

function App() {
  return (
    <>
      <Hero/>
      <Tecnologies/>
      <Projects/>
      <ScrollToTop
        className='styles_scroll-to-top__2A70v'
        smooth
        component={<ArrowDropUpIcon/>}
      />
    </>
  );
}

export default App;
