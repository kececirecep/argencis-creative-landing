
import './App.css';
import About from './components/About/About';
import DownloadApp from './components/DownloadApp/DownloadApp';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import Pricing from './components/Pricing/Pricing';
import Services from './components/Services/Services';
import Video from './components/Video/Video';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';

function App() {
  return (
    <div>
     <Header />  {/**/}
      <Hero />
      <Services />
      <About />
      <WhatWeDo />
      <Video />
      <Pricing />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
