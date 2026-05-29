import { Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import Work from './Work';
import About from './About';
import Home from './Home';
import Layout from '../components/Layout';

type Props = {};

function Pages({}: Props) {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default Pages;
