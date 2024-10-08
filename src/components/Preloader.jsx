import { useState } from "react";


const Preloader = () => {
  const [fade, setFade] = useState(true)
  const  FadeOut =()=>{
setTimeout(() => setFade(false), 1000);
  }
  

  return (


        <div className={fade ? `loader-wrapper` : fade ? FadeOut() : null   } >
          <div className="loader"></div>
          <div className="loder-section left-section"></div>
          <div className="loder-section right-section"></div>
          <div className="loader-brand-icon">
            <img src="../img/logo/MMR-logo.png" alt="" />
          </div>
        </div>
     
    
   
  );
};

export default Preloader;
