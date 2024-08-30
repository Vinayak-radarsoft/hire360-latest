import React from 'react'
import WhoWeAreImg from '../../src/images/who-are-we.svg';
import WhoWeAreImgpowerd from '../../src/images/powerd-logo.svg';
import { Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';

function WhoWeAre() {

  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/')
  }


  return (
    <>

      <div className="main-not-accessible">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 ">

              <img src={WhoWeAreImg} alt="" className='notaccessible-img' />
              <h2>Who are we</h2>
              <p>Welcome to hire360, Our advanced technology based recruiting platform offers a streamlined and personalized experience for corporate teams, With an intuitive dashboard tailored to different job roles, effortlessly manage all your hiring operations. Form shortlisting to assessments and Interviews. Hire360 recruiter optimizes your hiring process from start to finish.</p>
              <div className='btn-visitsite wwr'>
                <Button>Contact Now</Button>
                <Button className='visitsite' onClick={handleHome}>Visit Site</Button>
              </div>
            </div>

            <div className="col-lg-12">
              <div className='footer-logo'>
                <img src={WhoWeAreImgpowerd} alt="" className='who-wer-are-p-img not-notaccessible-mt' />
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default WhoWeAre