import { Navbar, WelcomePage } from "../index";
import { TanStackTable } from '../index';
import Input from './Input'
const Home = () => {

  const auth = true;
  if (auth) {
    return (
      <>
        <Navbar />
        <div className="pt-4 min-h-screen bg-elite-black">
          <Input />
          <TanStackTable />
        </div>
      </>
    );
  } else {
    return (
      <>
        <WelcomePage />
      </>
    );
  }
};

export default Home;
