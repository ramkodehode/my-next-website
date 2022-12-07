import type { NextPage } from 'next';
import Image from 'next/image';
import Maldives from '../img/maldives.jpg';

const Home: NextPage = () => {
  return (
    <div className="relative">
      <Image
        className="mt-5"
        src={Maldives}
        width={1280}
        priority
        alt="maldives"
      />
      <h1 className="absolute text-white -translate-y-1/2 font-Berkshire text-8xl -translate-x-6/2 top-1/2 left-1/3">
        Welcome to Maldives
      </h1>
    </div>
  );
};

export default Home;
