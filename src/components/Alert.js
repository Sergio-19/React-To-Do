import React, {useContext} from 'react'
// import {CSSTransition} from 'react-transition-group'
import { AlertContext } from '../context/alert/AlertContext';

export const Alert = () =>{
    const {alert, hide} = useContext(AlertContext)

    
   if(!alert.visible){return null}

    return(
        
       
            
        
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
        <strong>Внимание!!!&nbsp;</strong>
        {alert.text}
  <button type="button"
   className="close"
    aria-label="Close"
    onClick = {hide}
    >
    <span aria-hidden="true">&times;</span>
  </button>
</div>

    )
}