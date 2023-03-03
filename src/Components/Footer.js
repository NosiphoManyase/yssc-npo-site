import React from "react";
import { SlSocialFacebook } from "react-icons/sl"

function Footer(){
    
    // let copy = React.string({js|©|js});

    return (
        <footer className="d-flex flex-column align-items-center">
            <div style={{color: 'white'}} >
                <div className="p-2 d-flex">
                    <p>Check us out on facebook ~</p>
                    <a href="#" className="d-block mx-0">
                        <SlSocialFacebook style={{width: '20px', height: "20px"}} className=" mx-0"/>
                    </a>    
                </div>
               
            </div>
            <div className="copyright"> 
                <p>Copyright @2023</p>
            </div>
        </footer>
    )
}

export default Footer