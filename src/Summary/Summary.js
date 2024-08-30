import React from 'react'
import logo from '../../src/images/logo.svg';
import testSheet from '../../src/images/test-sheet.svg';
import clockIcon from '../../src/images/clock.svg';
import QuestionHelp from '../../src/images/question-help.svg';
import Cognizant from '../../src/images/cognizant.svg';
import PracticeTest from '../../src/images/practice-test.svg';
import CheckBox from '../../src/images/checkbox.svg';
import CodeBox from '../../src/images/code.svg';
import HelpIcon from '../../src/images/help-icon.svg';
import WhoWeAreImgpowerd from '../../src/images/powerd-logo.svg';

import { Button, Tooltip, Zoom  } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import { useNavigate } from 'react-router-dom';

function Summary() {
  
    const navigate=useNavigate();
    const handlePage=()=>{
        navigate('/enter-details')
    }

    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
      setOpen(false);
    };
  
    const handleTooltipOpen = () => {
      setOpen(true);
    };


  return (
    <>
      <div className="App">

        <div className="main-head">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <header className="logo-header">
                  <a href='#'><img src={logo} alt="logo" className='hire-logo' /></a>
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
                <a href='#'><img src={logo} alt="logo" className='desktop-logo' /></a>

                  <ul className="timeline">
                    <li className="active line-not-active"><span>Summary</span></li>
                    <li><span>Enter Details</span></li>
                    <li><span>Start Test</span></li>
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

                    <div className='col-lg-9'>

                      <div className='practice-test-left'>
                        <div className='practice-test-name'>
                          <img src={testSheet} alt="Test Sheet Icon" className='test-sheet-img' />
                          <h1>Frontend Developer - ReactJS Test</h1>
                        </div>
                        <span className='cognizant'><img src={Cognizant} alt="" /> Cognizant</span>

                        <ClickAwayListener onClickAway={handleTooltipClose}>
                          <div className='tooltip-with-para'>
                            <Tooltip
                              PopperProps={{
                                disablePortal: true,
                              }}
                              className="tooltip-practice"
                              onClose={handleTooltipClose}
                              open={open}
                              disableFocusListener
                              disableHoverListener
                              disableTouchListener
                              arrow
                              title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                              placement="top"
                              TransitionComponent={Zoom}
                            >
                              <Button onClick={handleTooltipOpen}><img src={PracticeTest} alt="" /></Button>
                              
                            </Tooltip>
                            <p>Try hire360’s Practice test</p>
                          </div>
                        </ClickAwayListener>

                      </div>

                    </div>

                    <div className='col-lg-3'>

                      <div className='practice-test-right'>
                        <span className='clock-icon-text'><img src={clockIcon} alt="" />00:30:00</span>
                        <Button data-bs-toggle="modal" data-bs-target="#helpModal"><img src={QuestionHelp} alt="" /> Help</Button>
                      </div>

                    </div>

                  </div>

                  <div className="row">
                    <div className="col-lg-12">
                      <div className='test-description'>
                        <h2>Test Description</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12">
                      <div className='test-description'>
                        <h2>Total Questions <span>(30)</span></h2>
                        <div className='programing-text-name'>
                          <span><img src={CheckBox} alt="" />15 MCQ</span>
                          <span><img src={CodeBox} alt="" />15 Programming</span>
                          <span><img src={CodeBox} alt="" />15 SQL</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12">
                      <div className='test-description'>
                        <h2>General Instruction</h2>
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
                  <div className='bottom-next-border'>
                      <Button onClick={handlePage}>Next</Button>
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

        {/* Help Model */}

        <div className="modal fade help-model" id="helpModal" tabIndex="-1" aria-labelledby="helpModal" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
          
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

              <div className="modal-body">
                <img src={HelpIcon} alt="" className='camera-icon' />
                <div>
                  <h3>Help & Support</h3>
                  <p>Please contact the test admin at following email.</p>
                </div>
              </div>

              <div className="modal-footer">
                <Button className='okaybtn' type="button"  data-bs-dismiss="modal" >Okay</Button>
              </div>

            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Summary