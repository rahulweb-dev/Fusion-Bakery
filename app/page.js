import ExploreRange from './components/ExploreRange';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SweetStory from './components/SweetStory';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ExploreRange/>
      <SweetStory/>
      <Footer/>
    </>
  );
}
