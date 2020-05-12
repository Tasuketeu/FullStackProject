import React from 'react';
import s from './Footer.module.css';

const Footer =()=>{
  return(
   <footer className={s.footerInfo}>
   <div className={s.footer}>
     <div class="container">
       <div class="row">
       <div class="col-sm-8">
       <p className={s.footerText}>Портфолио</p>
       </div>
       </div>
     </div>
   </div>
   </footer>
  );
}

export default Footer;

