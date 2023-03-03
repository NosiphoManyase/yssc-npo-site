import React from "react";
import imageOne from '../../images/interactive.jpg'
import Footer from '../Footer.js'
import '../../main.scss'


function Hero(){

    return(
       <>
            <div style={{height: '400px'}} className="img_slides ">
                
                <img src={imageOne} className="img-fluid w-100 h-100" />
            </div>
            <div className="container my-3">
                <div className="row my-5 home-sections d-flex align-items-center">
                    <h1 className="display-4 text-center">Who are we?</h1>
                    <div >
                    {/* <div class="fb-page" data-href="https://www.facebook.com/profile.php?id=100067923213698" data-tabs="timeline" data-width="250" data-height="400" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                        <blockquote cite="https://www.facebook.com/profile.php?id=100067923213698" class="fb-xfbml-parse-ignore">
                            <a href="https://www.facebook.com/profile.php?id=100067923213698">Yizani Sibonisane seniors club</a>
                        </blockquote>
                    </div> */}
                        <div className="commmunity-img-1"></div>
                        <p className="w-50 lh-base">A community led initiative with the aim of improving the wellbeing of the elderly in 
                            Masiphumelele. Living in a township has its' fair share of hardships, but with our
                            social, personal and domestic support we hope to make the lives of our members a 
                            little better.
                        </p>
                    </div>
                </div>
                <div className="row my-5 gx-3 home-sections">
                    <h1 className="display-4 text-center">What do we do?</h1>
                    <div className="row text-center mt-4 mx-auto px-5">
                        <div className="col-md-4 p-3">
                            <p className="fw-bold">Meal Provision</p>
                            <p>Alleviate poverty through providing meals to the elderly</p>
                        </div>
                        <div className="col-md-4 p-3">
                            <p className=" fw-bold">Health & Exercise</p>
                            <p>Encourage our members to keep a healthy lifestyle through regular exercises sessions
                                that encourage mobility in elderly persons
                            </p>
                        </div>
                        <div className="col-md-4 p-3">
                            <p className="fw-bold">Reacreactional Activities</p>
                            <p>Facilitate recreational activities such as knitting, sewing, beadwork and gardening.</p>
                        </div>
                    </div>
                </div>
                <div className="text-center" style={{height: '100px'}}>
                    <button className="btn btn-info w-50 mt-5 h-50 fw-bold">
                        <a>How to get involved</a>
                    </button>
                </div>
            
            </div>
            <Footer/>
        </>
    )
}

export default Hero