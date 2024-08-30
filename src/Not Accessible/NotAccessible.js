import React from 'react'
import notAccessible from '../../src/images/not-accessible.svg';
import { useNavigate } from 'react-router-dom';
import { Button  } from '@mui/material';
import WhoWeAreImgpowerd from '../../src/images/powerd-logo.svg';

function NotAccessible() {
  
    const navigate=useNavigate();
    const handleWhoWeAre=()=>{
        navigate('/whoweare')
    }

  return (
    <>

    <div className="main-not-accessible">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">

              <img src={notAccessible} alt="logo" className='notaccessible-img' />
              <h2>Not Accessible</h2>
              <p>Sorry the test is no longer accessible</p>
              <Button onClick={handleWhoWeAre}>Go Back</Button>

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

export default NotAccessible