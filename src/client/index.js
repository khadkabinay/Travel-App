import {geoWeathPixCaller} from './js/app.js'
import "./styles/header.scss"
    
    
    
    
    
    
    
    // click event on save  button 
     const saveBtn = document.getElementById("save-trip");
     saveBtn.addEventListener("click", geoWeathPixCaller);

     export {
      geoWeathPixCaller
     }

