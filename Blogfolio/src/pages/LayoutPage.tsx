import { Outlet } from "react-router-dom";
import Aurora from '../components/Aurora';
import NavBar from '../components/NavBar';





function LayoutPage()  {




  return (
    <div className="relative  h-screen w-full ">
      {/* Back ground light pillar */}
      <div className="fixed inset-0  z-0 overflow-hidden pointer-events-none">  
        <Aurora
          colorStops={["#8367ff","#463159","#5227FF"]}
          blend={0.46}
          amplitude={1.0}
          speed={0.1}
        />
      </div>            


      <NavBar/>

 

      <main className="relative flex h-full w-full z-10 justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutPage;