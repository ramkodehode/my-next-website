import type { NextPage } from 'next';
import Image from 'next/image';
import Maldives from '../img/maldives.jpg';

const Home: NextPage = () => {
  return (
    <>
      <Image src={Maldives} width={1280} priority alt="maldives" />

      <>Home Page</>
    </>
  );
};

export default Home;
