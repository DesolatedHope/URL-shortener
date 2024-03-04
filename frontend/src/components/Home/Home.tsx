import swirl from "../../assets/Swirl.svg";
import { WelcomePage } from "../index";
import { TanStackTable } from '../index';
const Home = () => {
  const auth = true;
  if (auth) {
    return (
      <>
        <img
          src={swirl}
          className="-z-50 absolute top-0 left-0 h-full w-full"
        />
        {/* <img src={cubes} className="-z-20 absolute top-0 left-0" /> */}
        <div className="pt-4 min-h-screen bg-gray-900">
          <TanStackTable />
        </div>
      </>
    );
  } else {
    return (
      <>
        <img
          src={swirl}
          className="-z-50 absolute top-0 left-0 h-full w-full"
        />
        {/* <img src={cubes} className="-z-20 absolute top-0 left-0" /> */}
        <WelcomePage />
      </>
    );
  }
};

export default Home;
