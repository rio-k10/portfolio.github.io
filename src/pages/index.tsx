import { Route, Routes } from 'react-router-dom';
import Skills from './Skills';
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
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </Layout>
  );
}

export default Pages;
