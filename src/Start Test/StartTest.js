import React from 'react'
import logo from '../../src/images/logo.svg';
import testSheet from '../../src/images/test-sheet.svg';
import Calender from '../../src/images/calender.svg';
import grayClock from '../../src/images/gray-clock.svg';
import grayIcon from '../../src/images/gray-check.svg';
import userImage from '../../src/images/user-img.png';
import dammyuserImage from '../../src/images/dammy-user-img.svg';
import greenCheck from '../../src/images/green-checkd.svg';
import WhoWeAreImgpowerd from '../../src/images/powerd-logo.svg';
import CameraIcon from '../../src/images/camera-icon.png';
import uploadProfile from '../../src/images/upload-profile.png';
import uploadIcon from '../../src/images/upload.svg';
import statTestIcon from '../../src/images/starttesticon.svg';

import { useNavigate } from 'react-router-dom';
import { FormControl, Checkbox, Button, Box } from '@mui/material';

function StartTest() {

  const navigate = useNavigate();
  const handleEnterDetails = () => {
    navigate('/enter-details')
  }
  const handleOverview = () => {
    navigate('/overview')
  }

  // Right Inline Css Here
  // Define inline styles as an object "style={inlineStyles}""
  const grayClockText = {
    color: '#535A5F',
  };

  const checkboxStyle = {
    color: '#FF6812', // Change to your desired color
    width: '50px',
    height: '50px',
  };

  const checkboxStartTest = {
    color: '#FF6812', // Change to your desired color
    width: '32px',
    height: '32px',
  };

  // Right Inline Css Here

  return (
    <>
      <div className="App">

        <div className="main-head">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <header className="logo-header">
                  <a href='/'><img src={logo} alt="logo" className='hire-logo' /></a>
                </header>
              </div>
            </div>
          </div>
        </div>

        <div className="progress-steps">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">

                <div className="progress-steps-inner">
                  <a href='/'><img src={logo} alt="logo" className='desktop-logo' /></a>
                  <ul className="timeline">
                    <li className="active completed-check"><span>Summary</span></li>
                    <li className="active completed-check"><span>Enter Details</span></li>
                    <li className="active "><span>Start Test</span></li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="middle-steps-content">

          <div className="max-container-middle-text">

            <div className="row">

              <div className="col-lg-12">

                <div className='middle-steps-inner-content'>
                  <div className='row middle-info-item'>

                    <div className='col-lg-12'>

                      <div className='practice-test-left'>
                        <div className='practice-test-name'>
                          <img src={testSheet} alt="Test Sheet Icon" className='test-sheet-img' />
                          <h1>Frontend Developer - ReactJS Test</h1>
                        </div>
                        <span className='claender'><img src={Calender} alt="" /> 11 Jan</span>
                        <p style={grayClockText}><img src={grayClock} alt="" /> 00:12:00 hrs</p>
                      </div>

                    </div>

                  </div>

                  <div className="row">
                    <div className="col-lg-12">
                      <div className='test-description'>

                        <div className='user-test-required'>

                          <div className='user-test-info'>
                            <img src={userImage} alt="Test Sheet Icon" className='userimage' />
                            <div>
                              <h2>Why Camera?</h2>
                              <img src={greenCheck} alt="Test Sheet Icon" className='greencheck' />
                              <p>This test requires webcam access for proctoring snapshots will be taken in every 30secs.</p>
                              <Button className='startcamera'>Start Camera</Button>
                            </div>
                          </div>

                          <div className='user-test-info'>
                            <img src={dammyuserImage} alt="Test Sheet Icon" className='userimage' />
                            <div>
                              <h2>Profile Picture</h2>
                              <img src={grayIcon} alt="Test Sheet Icon" className='greencheck' />
                              <p>Make sure your picture is neat and clean because the picture is going to be used throughout the recruitment process.</p>
                              <Button className='startcamera' data-bs-toggle="modal" data-bs-target="#cameraModal">Take picture</Button>
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12">
                      <div className='test-description'>
                        <h2>Present Screen</h2>
                        <img src={grayIcon} alt="" className="gray-check" />
                        <p>This test requires your entire screen to be shared for proctoring. If you share single tab or window you will be marked as absent and get eliminated from recruitment process.</p>
                        <Button>Share your screen</Button>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12">
                      <div className='test-description'>
                        <h2>Test Instruction</h2>
                        <ul>
                          <li>Welcome the candidate and provide a brief overview of the coding test.</li>
                          <li>Mention the expected duration of the test.</li>
                          <li>Clearly state the objective of the coding test.</li>
                          <li>Specify the problem or task that the candidate is expected to solve.</li>
                          <li>Indicate the programming language(s) and any specific tools or frameworks that should be used for the test.</li>
                          <li>If applicable, provide instructions for setting up the development environment.</li>
                          <li>Specify any dependencies or libraries that need to be installed.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-lg-12">
                <div className='start-test-page'>
                  <FormControl className='privacy-policy-check'>
                    <Checkbox style={checkboxStyle} />
                    <p className='check-text'>I agree to the privacy policy and terms of Use of EliteQA</p>
                  </FormControl>
                  <div className='start-test-flex'>
                    <Button onClick={handleEnterDetails} className='back'>Back</Button>
                    <Button data-bs-toggle="modal" data-bs-target="#startTestModel" className='start-test-btn'>Start Test</Button>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className='footer-logo'>
                  <img src={WhoWeAreImgpowerd} alt="" className='who-wer-are-p-img' />
                </div>
              </div>

            </div>

          </div>

        </div>


        {/* cameraModal One */}

        <div className="modal fade help-model" id="cameraModal" tabIndex="-1" aria-labelledby="cameraModal" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">

              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

              <div className="modal-body camera-model-body">
                <div className='cmera-header-flex'>
                  <img src={CameraIcon} alt="" className='camera-icon' />
                  <div>
                    <h3>Upload profile picture</h3>
                    <p>Please provide a clear image of your face against a plain background for the selection process.</p>
                  </div>
                </div>
                <div>
                  <img src={uploadProfile} alt="" className='uploadProfile' />
                </div>

              </div>

              <div className="modal-footer">
                <Button type="button" className='cancelModel' data-bs-dismiss="modal" >Cancel</Button>
                <Button type="button" data-bs-toggle="modal" data-bs-target="#cameraModalTwo"> <img src={uploadIcon} alt="" className='uploadIcon' /> Upload</Button>
              </div>

            </div>
          </div>
        </div>

        {/* cameraModal Two */}

        <div className="modal fade help-model" id="cameraModalTwo" tabIndex="-1" aria-labelledby="cameraModalTwo" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">

              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

              <div className="modal-body camera-model-body">
                <div className='cmera-header-flex'>
                  <img src={CameraIcon} alt="" className='camera-icon' />
                  <div>
                    <h3>Upload profile picture</h3>
                    <p>Please provide a clear image of your face against a plain background for the selection process.</p>
                  </div>
                </div>
                <div className='uploade-fifty50'>
                  <div>
                    <img src={uploadProfile} alt="" className='uploadProfile' />
                  </div>
                  <div>
                    <img src={uploadProfile} alt="" className='uploadProfile' />
                  </div>
                </div>

              </div>

              <div className="modal-footer">
                <Button type="button" className='cancelModel'>Retake picture</Button>
                <Button type="button" data-bs-dismiss="modal">Save</Button>
              </div>

            </div>
          </div>
        </div>

        {/* Start Test Model */}

        <div className="modal fade help-model" id="startTestModel" tabIndex="-1" aria-labelledby="startTestModel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">

              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

              <div className="modal-body camera-model-body">
                <div className='cmera-header-flex'>
                  <img src={statTestIcon} alt="" className='camera-icon' />
                  <div>
                    <h3>Start Test</h3>
                    <p>Please check the below prerequisites. </p>
                  </div>
                </div>
                <Box className="starttest-main">
                  <FormControl className='privacy-policy-check'>
                    <Checkbox style={checkboxStartTest} defaultChecked />
                    <p className='check-text'>Why Camera & Profile Picture</p>
                  </FormControl>
                  <FormControl className='privacy-policy-check'>
                    <Checkbox style={checkboxStartTest} defaultChecked />
                    <p className='check-text'>Start Screen Share</p>
                  </FormControl>
                  <FormControl className='privacy-policy-check'>
                    <Checkbox style={checkboxStartTest} defaultChecked />
                    <p className='check-text'>Multi Screen Check</p>
                  </FormControl>
                  <FormControl className='privacy-policy-check'>
                    <Checkbox style={checkboxStartTest} />
                    <p className='check-text'>I Agree Terms & Conditions</p>
                  </FormControl>
                </Box>

              </div>

              <div className="modal-footer">
                <Button type="button" className='cancelModel' data-bs-dismiss="modal" >Cancel</Button>
                <Button type="button" onClick={handleOverview}  data-bs-dismiss="modal">Start</Button>
              </div>

            </div>
          </div>
        </div>

      </div>

    </>


  )
}

export default StartTest