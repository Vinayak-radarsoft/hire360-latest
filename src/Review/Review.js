// import React from 'react'
import React, { useState } from 'react';
import CognizantColor from '../../src/images/cognizant-color.svg';
import testScore from '../../src/images/test-score-color.svg';
import clockIcon from '../../src/images/clock.svg';
import testSheet from '../../src/images/test-sheet.svg';
import userTestImage from '../../src/images/upload-profile.png';
import IconSkills from '../../src/images/skill.svg';
import IconTotal from '../../src/images/total.svg';
import IconAttempted from '../../src/images/attempted.svg';
import IconPending from '../../src/images/pending.svg';
import WhoWeAreImgpowerd from '../../src/images/powerd-logo.svg';
import SubmitIcon from '../../src/images/submit-test.png';
import AlertTriangle from '../../src/images/alertTriangle.svg';
import Successfully from '../../src/images/successful.gif';

import LinearProgress from '@mui/joy/LinearProgress';
import { Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';

function Review() {

  const navigate=useNavigate();
  const handleOverview=()=>{
      navigate('/overview')
  }

  return (
    <>
      <div className="App">

        <div className="test-start-header">

          <div className="test-container">
            <div className='row middle-info-item progress-flex'>
              <div className='col-xl-8'>
                <div className='practice-test-left'>
                  <div className='practice-test-name'>
                    <img src={testSheet} alt="Test Sheet Icon" className='test-sheet-img' />
                    <h1>Frontend Developer - ReactJS Test</h1>
                  </div>
                  <span className='cognizant-test'><img src={testScore} alt="" /> Test score: <div>30</div></span>
                  <span className='cognizant-test no-border-test'><img src={CognizantColor} alt="" /> Cognizant</span>
                </div>
              </div>
              <div className='col-xl-4'>
                <div className='practice-test-right'>
                  <span className='clock-icon-text'><img src={clockIcon} alt="" />00:11:25</span>
                  <Button className='btn-overview'>Overview</Button>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='progress-test'>
                  <LinearProgress
                    style={{ backgroundColor: '#E8E9EE' }}
                    className='test-line-progress'
                    value={100}
                    thickness={8}
                    determinate
                    size="lg"
                    variant="solid"
                  />
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>

          <div className='user-img-test'>
            <img src={userTestImage} alt="Test Sheet Icon" />
          </div>

        </div>

        <div className='test-tabs'>
          <div className='review-main'>
            <div className='table-heading'>
              <h2>Review your test details before submitting</h2>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr className="head-table">
                      <th scope="col"><div className='th-head'><img src={IconSkills} alt="" /> <span>Skill</span></div></th>
                      <th scope="col"><div className='th-head'><img src={IconTotal} alt="" /> <span>Total</span></div></th>
                      <th scope="col"><div className='th-head'><img src={IconAttempted} alt="" /> <span>Attempted</span></div></th>
                      <th scope="col"><div className='th-head'><img src={IconPending} alt="" /> <span>Pending</span></div></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Javascript</th>
                      <td>2</td>
                      <td>2</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <th>HTML</th>
                      <td>2</td>
                      <td>2</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <th>CSS</th>
                      <td>2</td>
                      <td>2</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <th>Algorithms</th>
                      <td>2</td>
                      <td>2</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <th>ReactJS</th>
                      <td>2</td>
                      <td>2</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='review-btn'>
                <Button className='prev-btn' onClick={handleOverview}>Previous</Button>
                <Button className='save-btn' data-bs-toggle="modal" data-bs-target="#alert-model">Submit Test </Button>
              </div>
              <div className='review-footer-logo'>
                <img src={WhoWeAreImgpowerd} alt="" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Model Review Question */}
      <div className="modal fade alert-model" id="alert-model" tabIndex="-1" aria-labelledby="alert-model" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
              <div className='alertHeader'>
                <img src={SubmitIcon} alt="" className='camera-icon' />
                <h3>Submit Test</h3>
              </div>
              <div className='alert-trangle-text'><img src={AlertTriangle} alt="" /> Once the test is submitted you cannot make changes.</div>
            </div>
            <div className="modal-footer review-footer">
              <Button type="button" className='cancelModel' data-bs-dismiss="modal" >Cancel</Button>
              <Button type="button" className='submit-review' data-bs-toggle="modal" data-bs-target="#submitted-model">Submit</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Model Test Submitted */}
      <div className="modal fade alert-model" id="submitted-model" tabIndex="-1" aria-labelledby="submitted-model" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
              <div className='submittedcontent'>
                <img src={Successfully} alt="" className='successfully' />
                <h3>Test Submitted!</h3>
                <p>Your test is successfully submitted. Further details and procedures will be sent to you via email by congnizent. Till then be prepared and all the best for future. </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>


  )
}

export default Review