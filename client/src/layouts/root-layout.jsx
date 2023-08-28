import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const RootLayout = () => {
  return (
    <>
      <Navbar />
      {/* <p className="text-primary-50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        nihil sit earum odio eum libero fugiat labore sint deleniti incidunt!
      </p>
      <p className="text-primary-100">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        nihil sit earum odio eum libero fugiat labore sint deleniti incidunt!
      </p>
      <p className="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        nihil sit earum odio eum libero fugiat labore sint deleniti incidunt!
      </p> */}
      {/* <Outlet /> */}
      {/* <Footer /> */}
    </>
  );
};

export default RootLayout;
