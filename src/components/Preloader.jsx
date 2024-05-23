import { useState } from "react";


const Preloader = () => {
  const [fade, setFade] = useState(true)
  const  FadeOut =()=>{
setTimeout(() => setFade(false), 1000);
  }
  

  return (


        <div class={fade ? `loader-wrapper` : fade ? FadeOut() : null   } >
          <div class="loader"></div>
          <div class="loder-section left-section"></div>
          <div class="loder-section right-section"></div>
          <div class="loader-brand-icon">
            <img src="../img/logo/preloder.png" alt="" />
          </div>
        </div>
     
    
   
  );
};

export default Preloader;
