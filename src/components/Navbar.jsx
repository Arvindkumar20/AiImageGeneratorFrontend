import React from "react";
import Button from './buttons/Button';
export default function Navbar() {
  return (
    <React.Fragment>
     <div className="">        
   <header className="" style={{
    background:'black',
    margin:'0',
    padding:'5px',
   }}>
    <nav className="">
    <div>

        <ul className=""  style={{
        display: 'flex',
        alignItems:'center',
        justifyContent: 'space-between',
        listStyle:'none'
     }}>
            <li className="" style={
                {
                    color:'red',
                    fontSize: '25px',
                    fontFamily:'sans serif',
                    fontWeight:'bold'

                }
            }>logo</li>
            <li><Button/> </li>
        </ul>
     </div>
    </nav>
   </header>
     </div>
    </React.Fragment>
  )
}
