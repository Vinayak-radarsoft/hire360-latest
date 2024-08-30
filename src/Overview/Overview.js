// import React from 'react'
import React, { useState, useEffect } from "react";
import CognizantColor from "../../src/images/cognizant-color.svg";
import testScore from "../../src/images/test-score-color.svg";
import clockIcon from "../../src/images/clock.svg";
import testSheet from "../../src/images/test-sheet.svg";
import userTestImage from "../../src/images/upload-profile.png";
import WhoWeAreImgpowerd from "../../src/images/powerd-logo.svg";
import questionOverview from "../../src/images/question-overview.svg";
import questionMark from "../../src/images/question-mark.svg";
import questionMarkStar from "../../src/images/max-score-star.svg";
import resetAns from "../../src/images/reset-ans.svg";
import maxScore from "../../src/images/max-score.svg";
import mobileViewQs from "../../src/images/mobile-view-question.svg";
import questionImgList from "../../src/images/dammy-img.png";
import closeIconQuestion from "../../src/images/close-icon.svg";
import MarkReview from "../../src/images/MarkReview.png";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java"; // Import the specific modes you need
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/mode-javascript"; // For example, JavaScript mode
import "ace-builds/src-noconflict/theme-monokai"; // Also import the theme you intend to use

import LinearProgress from "@mui/joy/LinearProgress";
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Tab,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  ButtonGroup,
} from "@mui/material";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import icon from "../images/code.png";
import fail from "../images/circleOff.png";
import eye from "../images/eye.png";
import eyeOff from "../images/eyeOff.png";
import output from "../images/output.png";
import correctOutput from "../images/correct.png";
import correctAns from "../images/correct-ans.png";
import wrongAns from "../images/wrong-ans.png";
import closeArrow from "../images/closed-arrow.png";
import time from "../images/time-frame.png";
import memory from "../images/memory-frame.png";
import code from "../images/code-frame.png";
import judge from "../images/judge-env.png";
import maxScoreRed from "../images/max-score-2.png";
import reload from "../images/reload.png";
import setting from "../images/setting.png";
import rotatedV from "../images/rotated-vertical.png";
import rotatedH from "../images/rotated-horizontal.png";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function Overview() {
  const [showQuestions, setShowQuestions] = useState(true);
  const navigate = useNavigate();
  const handleReview = () => {
    navigate("/review");
  };

  //latest token 
  let token1 = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Njc5MDhjY2Q4YjQ4NmQwYjg0YzE0ZmQiLCJzZXNzaW9uSWQiOiI2NmE4OWUyODVjNThmNDMyYjZmNWZlM2MiLCJpYXQiOjE3MjIzMjY1NjgsImV4cCI6MTgwODcyNjU2OCwiaXNzIjoiaGlyZTM2MCJ9.03w1xzXQ7f1Eiek4jdEUZbMv6XpRFZ3sB1w6i2ANLkqy7_IdePMo7ytA6r72z7MqH-uWSVYtcH51SFUzPCqM3WL_LyL01VBQAPsjC_rJBCJDlP6-efH2X-fphpn1c5yAlWTwJ3ZVJcAIfGpqv1rjZ-e3luTgWZ7vcEv0dgTHy1n1c7fl7I55_Q6SMtheiUlbaXDHkwDXrrG7nOGnFUfYDrCrTF3MYZ1GXk5BkYlwTrp_e716JXQs0Ti8Ouu-QDF8BLuLO8J6_ITa-okPYeA5S2Cgi--308Ihcs7GU7-1bICHDzwSxRjervX5DKCLBah5tHDWWCPn9qpiqwP1G5aZvEwWirCnIpIaaTcyxdtHvGpc9l7wp-KVsXhrYkoIza-8_KnxQ9Wds3q0qQ6oHwbrqq-5b4GeF05hzjgYYYMj0VBlyDP9y68ZE_ZSXVA6LsL2X3Lp8FQGoSMZebUAwO704Xy7w2E22Bognq-cyTMhjcxfz3T93qr_4QjjMG-ltPo3B-zqmZ301iqMAKz2T0dEEi9bBFGpA_DhxYCKvQ4Ksl_DxgSPxY8wq6IVEQ_y2YeLu_eHZdPfTtEvdjpcldsnjyGgZ3BZamhaMtjogwttE9LX9Be8i2PahX7ou3olCOnpgyMCrGr1T3UDjxcw7FXoNQdpPdTAkt4JsB2--LPZeZY"
  const config1 = {
    headers: {
      Authorization: `Bearer ${token1}`,
      "ngrok-skip-browser-warning": true,
    },
  };

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      setShowQuestions(false);
    }
  }, []);

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const checkboxStyle = {
    width: "40px",
    height: "40px",
  };

  //placeholder audio file
  const dummyAudioFile =
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

  //placeholder Video file
  const dummyVideoFile =
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4";

  const handleMobile = () => {
    console.log(showQuestions);
    setShowQuestions((prevState) => !prevState);
  };

  const [expand, setExpand] = useState(false);
  const [innerValue, setInnerValue] = useState("1");
  const [newSubmissionCode, setNewSubmissionCode] = useState(
    'System.out.println("Hello, World!");'
  );
  const [allSubmissionsCode, setAllSubmissionsCode] = useState(
    'public class Main {\n  public static void main(String[] args) {\n    System.out.println("All Submissions Tab");\n  }\n}'
  );
  const handleClose = () => {
    setExpand(!expand);
  };

  const handleInnerChange = (event, value) => {
    setInnerValue(value);
  };

  const handleNewSubmissionChange = (newValue) => {
    setNewSubmissionCode(newValue);
  };

  console.log("expand value", expand);
  const [questionList, setQuestionList] = useState([]);

  // useEffect(() => {
  //   const fetchQuestions = async () => {
  //     const apiUrl = `http://localhost:3026/question`;
  //     const response = await axios.get(apiUrl, config1);
  //     console.log("fetchQuestions data here..", response.data.documents);
  //     setQuestionList(response.data.documents);
  //   };
  //   fetchQuestions();
  // }, []);


  return (
    <>
      <div className="App">
        <div className="test-start-header">
          <div className="test-container">
            <div className="row middle-info-item progress-flex">
              <div className="col-xl-8">
                <div className="practice-test-left">
                  <div className="practice-test-name">
                    <img
                      src={testSheet}
                      alt="Test Sheet Icon"
                      className="test-sheet-img"
                    />
                    <h1>Frontend Developer - ReactJS Test</h1>
                  </div>
                  <span className="cognizant-test">
                    <img src={testScore} alt="" /> Test score: <div>30</div>
                  </span>
                  <span className="cognizant-test no-border-test">
                    <img src={CognizantColor} alt="" /> Cognizant
                  </span>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="practice-test-right">
                  <span className="clock-icon-text">
                    <img src={clockIcon} alt="" />
                    00:11:25
                  </span>
                  <Button className="btn-overview">Overview</Button>
                  <Button className="btn-end-test" onClick={handleReview}>
                    End Test
                  </Button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="progress-test">
                  <LinearProgress
                    style={{ backgroundColor: "#E8E9EE" }}
                    className="test-line-progress"
                    value={15}
                    thickness={8}
                    determinate
                    size="lg"
                    variant="solid"
                  />
                  <span>00%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="user-img-test">
            <img src={userTestImage} alt="Test Sheet Icon" />
          </div>
        </div>

        <div className="test-tabs">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  variant="scrollable"
                >
                  <Tab className="tab-text" label="Overview (20)" value="1" />
                  <Tab className="tab-text" label="Javascript (4)" value="2" />
                  <Tab className="tab-text" label="HTML (4)" value="3" />
                  <Tab className="tab-text" label="CSS (4)" value="4" />
                  <Tab className="tab-text" label="Algorithms (4)" value="5" />
                  <Tab className="tab-text" label="ReactJS (4)" value="6" />
                </TabList>
              </Box>

              {/* Overview */}
              <TabPanel className="tab-pannel-box" value="1">
                <h2 className="test-overview-heading">Test Overview</h2>

                <div className="test-module">
                  <div className="test-name-pannel">
                    <h3>
                      Javascript <span>(4)</span>
                    </h3>
                    <div className="total-marks">
                      <img className="test-scoe-icon" src={testScore} alt="" />{" "}
                      Total Marks: <span>6</span>
                    </div>
                  </div>

                  <Accordion defaultExpanded className="accordion-pannel">
                    <AccordionSummary
                      className="pannel-revers"
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography className="expand-more">
                        <span className="question-name">MCQ (2)</span>
                        <div className="skills-score">
                          {" "}
                          Skill assessment score: <span>3</span>
                        </div>
                      </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                      <Typography>
                        <div className="question-list">
                          <div className="question">
                            Q1. ReactJs is written in which of the following
                            language?
                          </div>
                          <div className="question-check-style">
                            <span className="question-check-style-number">
                              2
                            </span>
                            <FormControl className="uncheck-overview">
                              <Checkbox style={checkboxStyle} defaultChecked />
                              <label className="uncheck-box-icon"></label>
                            </FormControl>
                          </div>
                        </div>
                        <div className="question-list">
                          <div className="question">
                            Q2. What keyword is used to check whether a given
                            property is valid or not?
                          </div>
                          <div className="question-check-style">
                            <span className="question-check-style-number">
                              1
                            </span>
                            <FormControl className="uncheck-overview">
                              <Checkbox style={checkboxStyle} />
                              <label className="uncheck-box-icon"></label>
                            </FormControl>
                          </div>
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion className="accordion-pannel">
                    <AccordionSummary
                      className="pannel-revers"
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <Typography className="expand-more">
                        <span className="question-name">Programming (2)</span>
                        <div className="skills-score">
                          {" "}
                          Skill assessment score: <span>3</span>
                        </div>
                      </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                      <Typography>
                        <div className="question-list">
                          <div className="question">
                            Q1. Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry
                          </div>
                          <div className="question-check-style">
                            <span className="question-check-style-number">
                              2
                            </span>
                            <FormControl className="uncheck-overview">
                              <Checkbox style={checkboxStyle} />
                              <label className="uncheck-box-icon"></label>
                            </FormControl>
                          </div>
                        </div>

                        <div className="question-list">
                          <div className="question">
                            Q2. Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry
                          </div>
                          <div className="question-check-style">
                            <span className="question-check-style-number">
                              2
                            </span>
                            <FormControl className="uncheck-overview">
                              <Checkbox style={checkboxStyle} />
                              <label className="uncheck-box-icon"></label>
                            </FormControl>
                          </div>
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>

                <div className="test-module">
                  <div className="test-name-pannel">
                    <h3>
                      HTML <span>(4)</span>
                    </h3>
                    <div className="total-marks">
                      <img className="test-scoe-icon" src={testScore} alt="" />{" "}
                      Total Marks: <span>6</span>
                    </div>
                  </div>
                  <Accordion className="accordion-pannel">
                    <AccordionSummary
                      className="pannel-revers"
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography className="expand-more">
                        <span className="question-name">MCQ (2)</span>
                        <div className="skills-score">
                          {" "}
                          Skill assessment score: <span>3</span>
                        </div>
                      </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                      <Typography>
                        <div className="question-list">
                          <div className="question">
                            Q1. ReactJs is written in which of the following
                            language?
                          </div>
                          <div className="question-check-style">
                            <span className="question-check-style-number">
                              2
                            </span>
                            <FormControl className="uncheck-overview">
                              <Checkbox style={checkboxStyle} />
                              <label className="uncheck-box-icon"></label>
                            </FormControl>
                          </div>
                        </div>
                        <div className="question-list">
                          <div className="question">
                            Q2. What keyword is used to check whether a given
                            property is valid or not?
                          </div>
                          <div className="question-check-style">
                            <span className="question-check-style-number">
                              1
                            </span>
                            <FormControl className="uncheck-overview">
                              <Checkbox style={checkboxStyle} />
                              <label className="uncheck-box-icon"></label>
                            </FormControl>
                          </div>
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion className="accordion-pannel">
                    <AccordionSummary
                      className="pannel-revers"
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <Typography className="expand-more">
                        <span className="question-name">Programming (2)</span>
                        <div className="skills-score">
                          {" "}
                          Skill assessment score: <span>3</span>
                        </div>
                      </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                      <Typography>
                        <div className="question-list">
                          <div className="question">
                            Q1. Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry
                          </div>
                          <div className="question-check-style">
                            <span className="question-check-style-number">
                              2
                            </span>
                            <FormControl className="uncheck-overview">
                              <Checkbox style={checkboxStyle} />
                              <label className="uncheck-box-icon"></label>
                            </FormControl>
                          </div>
                        </div>
                        <div className="question-list">
                          <div className="question">
                            Q2. Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry
                          </div>
                          <div className="question-check-style">
                            <span className="question-check-style-number">
                              2
                            </span>
                            <FormControl className="uncheck-overview">
                              <Checkbox style={checkboxStyle} />
                              <label className="uncheck-box-icon"></label>
                            </FormControl>
                          </div>
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>

                <div className="footer-btn-next">
                  <div className="footer-btn-inner">
                    <Button>Next</Button>
                  </div>
                </div>

                <div className="footer-logo footer-bg-white">
                  <img
                    src={WhoWeAreImgpowerd}
                    alt=""
                    className="who-wer-are-p-img"
                  />
                </div>
              </TabPanel>

              {/* Javascript */}
              <TabPanel
                className="tab-pannel-box start-question-answer"
                value="2"
              >
                <div className="question-main-test">
                  {showQuestions && (
                    <>
                      <div
                        className={`question-left ${expand ? "expanded question-left-expanded" : "collapsed question-left-collapsed"}`}
                      >
                        <Button
                          className={`${expand ? "d-none d-md-none d-lg-none" : "d-none d-md-block d-lg-block"}`}
                          onClick={handleClose}
                        >
                          <img src={closeArrow} alt="" />
                        </Button>
                        <div
                          className={`question-heading ${expand ? "question-heading-rotate-before" : "question-heading-rotate-after"}`}
                        >
                          <h2
                            className={`${expand ? "" : "d-flex flex-reverse-column"
                              }`}
                          >
                            Questions{" "}
                            <Button
                              data-bs-toggle="modal"
                              data-bs-target="#QuestinHelp"
                              className="questinhelp"
                            >
                              <img src={questionOverview} alt="" />
                            </Button>
                          </h2>
                          <Button
                            className={`${expand ? "d-none d-md-block d-lg-block" : "d-none d-md-none d-lg-none"}`}
                            onClick={handleClose}
                          >
                            <img src={mobileViewQs} alt="" />
                          </Button>
                          <div
                            className="close-btn-mobile"
                            onClick={handleMobile}
                          >
                            <img src={closeIconQuestion} alt="" />
                          </div>
                        </div>

                        <div
                          className={`current-review-answer mt-4 ${expand ? "d-flex d-md-flex d-lg-flex" : "d-flex d-md-none d-lg-none"
                            }`}
                        >
                          <span>
                            <div className="current-box"></div>Current
                          </span>
                          <span>
                            <div className="review-box"></div>For Review
                          </span>
                          <span>
                            <div className="answered-box"></div>Answered
                          </span>
                        </div>

                        <div
                          className={`question-heading ${expand ? "d-block d-md-block d-lg-block" : "d-block d-md-none d-lg-none"
                            }`}
                        >
                          <h3>MCQs (05)</h3>
                          <ButtonGroup
                            className="grp-btn"
                            variant="contained"
                            aria-label="Basic button group"
                          >
                            <Button className="answered-question">1</Button>
                            <Button className="review-question">2</Button>
                            <Button className="current-question">3</Button>
                            <Button className="default-btn">4</Button>
                            <Button className="default-btn">5</Button>
                          </ButtonGroup>
                        </div>

                        <div
                          className={`question-heading ${expand ? "d-block d-md-block d-lg-block" : "d-block d-md-none d-lg-none"
                            }`}
                        >
                          <h3>Programming (07)</h3>
                          <ButtonGroup
                            className="grp-btn"
                            variant="contained"
                            aria-label="Basic button group"
                          >
                            <Button className="default-btn">6</Button>
                            <Button className="default-btn">7</Button>
                            <Button className="default-btn">8</Button>
                            <Button className="default-btn">9</Button>
                            <Button className="default-btn">10</Button>
                            <Button className="default-btn">11</Button>
                            <Button className="default-btn">12</Button>
                          </ButtonGroup>
                        </div>

                        <div
                          className={`${expand ? "left-nav-logo" : "left-nav-logo-collapsed"
                            }`}
                        >
                          <img
                            src={WhoWeAreImgpowerd}
                            alt=""
                            className="left-nav-logo-img"
                          />
                        </div>
                      </div>
                    </>
                  )}
                  <div
                    className={`question-right border ${expand ? "expanded question-right-expanded" : "collapsed question-right-collapsed"
                      }`}
                  >
                    {/* Question Number One */}

                    <div className="question-start">
                      <Box className="question-no-start">
                        <div className="max-score-reset-btn">
                          <Button
                            className="mobile-questin-view"
                            onClick={handleMobile}
                          >
                            <img src={mobileViewQs} alt="" />
                          </Button>
                          <div className="d-flex">
                            <Button className="reset-btn" style={{ color: "#FF6812", alignItems: "center" }}>
                              <img src={MarkReview} alt="" />
                              Mark for Review
                            </Button>
                            <div className="maxscore-btn">
                              <img src={maxScore} alt="" />
                              Max score: 2
                            </div>
                          </div>
                        </div>
                        <FormControl className="w-100">
                          <FormLabel
                            className="question-label"
                            id="radio-buttons-group-label"
                          >
                            <img src={questionMark} alt="" />
                            Q.6 Maximum displacement
                          </FormLabel>
                          <div
                            className="question-problem-submission-main-section"
                          >
                            <div className="question-left-section-div">
                              <p>
                                <strong> Problem Statement</strong> <br />
                                Given a 1D lane, you can move one step ahead
                                (denoted by S) or move one step back (denoted by
                                R). You are given a string of commands and an
                                integer N. Calculate the maximum displacement
                                that you can achieve from the starting point
                                after changing exactly N commands in the string
                                and executing them.
                              </p>
                              <p>
                                <strong> Function Description</strong> <br />
                                Complete the Game() function. This function
                                takes the following 2 parameters and returns the
                                required answer: <br />
                                <ul className="problem-custom-list" style={{ listStyleType: 'disc' }}>
                                  <li className="problem-custom-list-item">
                                    Str: Represents the string containing the
                                    commands
                                  </li>
                                  <li className="problem-custom-list-item">
                                    N: Represents the number of commands that
                                    must be changed
                                  </li>
                                </ul>
                              </p>
                              <p>
                                <strong>
                                  Input format for custom testing{" "}
                                </strong>{" "}
                                <br />
                                Note: Use this input format if you are testing
                                against custom input or writing code in a
                                language where we don’t provide boilerplate
                                code.
                                <ul>
                                  <li>
                                    The first line contains the string Str which
                                    represents the string that contains the
                                    commands.
                                  </li>
                                  <li>
                                    The second line contains an integer N which
                                    represents the number of commands that must
                                    be changed.
                                  </li>
                                </ul>
                              </p>
                              <p>
                                <strong> Output format</strong> <br />
                                Print the maximum displacement that you can
                                achieve from the starting point after changing
                                exactly N commands in the string and executing
                                all the commands of that string. One command can
                                be changed several times.
                              </p>
                            </div>
                            <div className="question-right-section-div">
                              <Box id="openFullWindow">
                                <TabContext value={innerValue}>
                                  <Box
                                    sx={{
                                      borderBottom: 1,
                                      borderColor: "#E9EAEB",
                                      display: "flex",
                                      justifyContent: "space-between"
                                    }}
                                  >
                                    <TabList
                                      onChange={handleInnerChange}
                                      aria-label="New Submission"
                                    >
                                      <Tab
                                        className="tab-text"
                                        label="New Submission"
                                        value="1"
                                      />
                                      <Tab
                                        className="tab-text"
                                        label="All Submissions"
                                        value="2"
                                      />
                                    </TabList>
                                    <div className="d-none d-lg-flex gap-2 p-2">
                                      <Button className="" style={{ color: "#FF6812" }}>
                                        Test.... <ExpandMoreIcon style={{ color: "#FF6812" }} />
                                      </Button>
                                      <Button style={{ color: "#FF6812", border: "2px solid #FF6812", borderRadius: "4px" }}>
                                        .PY <ExpandMoreIcon style={{ color: "#FF6812" }} />
                                      </Button>
                                      <div className="d-flex justify-content-between gap-2">
                                        <Button className="d-flex gap-2" style={{ background: "#FF6812" }}>
                                          <img src={rotatedH} style={{ width: "25px", padding: "2px", height: "22px" }} alt="" />
                                          <img src={rotatedV} style={{ width: "25px", padding: "2px", height: "22px" }} alt="" />
                                        </Button>
                                        <Button className="d-flex gap-3">
                                          <img src={reload} style={{ width: "20px", height: "20px" }} alt="" />
                                          <img src={setting} style={{ width: "22px", height: "22px" }} alt="" />
                                        </Button>
                                      </div>
                                    </div>
                                  </Box>
                                  <TabPanel value="1">
                                    <div className="d-flex align-items-start">
                                      <div
                                        className="tab-content tab-editor"
                                        id="v-pills-tabContent"
                                      >
                                        <div
                                          className="tab-pane fade show active"
                                          id="v-pills-python"
                                          role="tabpanel"
                                          aria-labelledby="v-pills-python-tab"
                                        >
                                          <AceEditor
                                            mode="java"
                                            theme="monokai"
                                            className="editor"
                                            fontSize={14}
                                            showPrintMargin={false}
                                            showGutter={true}
                                            highlightActiveLine={true}
                                            onChange={handleNewSubmissionChange}
                                            style={{
                                              width: "100%",
                                              height: "60vh",
                                            }}
                                            value={newSubmissionCode}
                                            name=""
                                            editorProps={{
                                              $blockScrolling: true,
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </TabPanel>

                                  <TabPanel value="2" style={{ padding: "10px" }}>
                                    <div className="d-flex align-items-start" style={{ border: "1px solid #E8E9EE", height: "530px", overflow: "scroll", borderRadius: "4px" }}>
                                      <Accordion
                                        defaultExpanded
                                        className="submission-accordion-pannel w-100"
                                        style={{ background: "rgb(250, 250, 250)" }}
                                      >
                                        <AccordionSummary
                                          className="pannel-revers"
                                          aria-controls="panel1-content"
                                          id="panel1-header"
                                          style={{ background: "#F2F4F8" }}
                                        >
                                          <Typography className="expand-more d-flex flex-wrap">
                                            <FormLabel
                                              className="submission-label"
                                              id="radio-buttons-group-label"
                                            >
                                              <img src={icon} alt="" />
                                              <div className={`d-flex ${expand ? "gap-0 flex-column" : "gap-2 flex-row "}`}>
                                                <span className="submission-name">
                                                  Submission ID : 6346357678
                                                </span>
                                                <span
                                                  style={{
                                                    fontSize: "12px",
                                                    fontWeight: "400",
                                                  }}
                                                >
                                                  Apr 22, 2024 12:44 PM IST
                                                </span>
                                              </div>
                                            </FormLabel>

                                            <div
                                              className="d-flex gap-2 justify-content-between"
                                              style={{ alignItems: "center", marginLeft: "auto" }}
                                            >
                                              <Button
                                                className="d-flex gap-1"
                                                style={{
                                                  width: "100px",
                                                  fontSize: "12px",
                                                  borderRadius: "4px",
                                                  alignItems: "center",
                                                  padding: "5px",
                                                  border: "none",
                                                  color: "#733430",
                                                  fontWeight: "400",
                                                  padding: "3px 4px",
                                                  background: "#FADCDA",
                                                  color: "#C73733"
                                                }}
                                              >
                                                <img src={maxScoreRed} style={{ width: "16px", height: "16px" }} alt="" />{" "}
                                                Score :<span>0</span>
                                              </Button>
                                              <Button
                                                className="d-flex gap-1"
                                                style={{
                                                  width: "110px",
                                                  fontSize: "12px",
                                                  borderRadius: "4px",
                                                  alignItems: "center",
                                                  padding: "5px",
                                                  border: "none",
                                                  color: "#733430",
                                                  fontWeight: "400",
                                                  padding: "3px 4px",
                                                  background: "#FADCDA",
                                                  color: "#C73733"
                                                }}
                                              >
                                                <img src={fail} style={{ width: "16px", height: "16px" }} alt="" /> Result
                                                :<span>Fail</span>
                                              </Button>
                                              <ExpandMoreIcon style={{ color: "#00C49A" }} />

                                              {/* Skill assessment score: <span>3</span> */}
                                            </div>
                                          </Typography>
                                        </AccordionSummary>
                                        <div className="d-flex mx-3 justify-content-between my-3"
                                        // style={{background:"#f2f4f8 "}}
                                        >
                                          <div className={`d-flex flex-wrap ${expand ? "gap-2" : "gap-4"}`}>
                                            <div style={{ display: "flex", gap: "5px", alignItems: "center", color: "#535A5F", fontSize: "14px", fontWeight: "400" }}><img src={time} alt="" /> <strong>Time</strong>  : 0.489 sec</div>
                                            <div style={{ display: "flex", gap: "5px", alignItems: "center", color: "#535A5F", fontSize: "14px", fontWeight: "400" }}><img src={memory} alt="" /> <strong>Memory</strong>  : 2 KiB</div>
                                            <div style={{ display: "flex", gap: "5px", alignItems: "center", color: "#535A5F", fontSize: "14px", fontWeight: "400" }}><img src={code} alt="" /> <strong>Language</strong> : Python</div>
                                          </div>
                                          <div style={{ display: "flex", width: "200px", gap: "5px", alignItems: "center", color: "#FF6812", fontSize: "14px", fontWeight: "400" }}><img src={judge} alt="" /> Refer Judge Environment</div>
                                        </div>

                                        <AccordionDetails
                                          className="w-100"
                                          style={{
                                            maxHeight: "400px",
                                            overflowY: "auto",
                                          }}
                                        >
                                          <Typography>
                                            <div className="submission-question-list">
                                              <div className="submission-table" style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
                                                <table>
                                                  <thead>
                                                    <tr
                                                      className="submission-table-header"
                                                      style={{
                                                        borderBottom:
                                                          "1px solid #E8E9EE",
                                                        background: "#F2F4F8"
                                                      }}
                                                    >
                                                      <th style={{ fontSize: "12px", fontWeight: "600", color: "#363E45" }}>Testcase</th>
                                                      <th style={{ fontSize: "12px", fontWeight: "600", color: "#363E45" }}>Input</th>
                                                      <th style={{ fontSize: "12px", fontWeight: "600", color: "#363E45" }}>Result</th>
                                                      <th style={{ fontSize: "12px", fontWeight: "600", color: "#363E45" }}>Time (Sec)</th>
                                                      <th style={{ fontSize: "12px", fontWeight: "600", color: "#363E45" }}>Memory (KiB)</th>
                                                      <th style={{ fontSize: "12px", fontWeight: "600", color: "#363E45" }}>Your Output</th>
                                                      <th style={{ fontSize: "12px", fontWeight: "600", color: "#363E45" }}>Correct Output</th>
                                                      <th style={{ fontSize: "12px", fontWeight: "600", color: "#363E45" }}>Score</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody style={{ background: "#ffffff" }}>
                                                    <tr
                                                      style={{
                                                        borderBottom:
                                                          "1px solid #E8E9EE",
                                                      }}
                                                    >
                                                      <td className="d-flex justify-content-center align-items-center" style={{ padding: "20px 0px !important", margin: "auto" }}>
                                                        <img src={eye} alt="" />
                                                      </td>
                                                      <td style={{ padding: "10px 0px", fontSize: "14px", fontWeight: "400" }}>Input #1</td>
                                                      <td style={{ padding: "10px 0px" }}>
                                                        <div className="d-flex gap-2 align-center">
                                                          <img
                                                            src={wrongAns}
                                                            alt=""
                                                            className=""
                                                            style={{
                                                              width: "20px",
                                                              height: "20px",

                                                            }}
                                                          />
                                                          <button
                                                            style={{
                                                              fontSize: "12px",
                                                              fontWeight: "400",
                                                              border: "none",
                                                              background:
                                                                "#FADCDA",
                                                              borderRadius:
                                                                "4px",
                                                            }}
                                                          >
                                                            Wrong
                                                          </button>
                                                        </div>
                                                      </td>
                                                      <td style={{ fontSize: "14px", fontWeight: "400", padding: "10px 0px" }}>0.1234</td>
                                                      <td style={{ fontSize: "14px", fontWeight: "400", padding: "10px 0px" }}>2</td>
                                                      <td>
                                                        <img
                                                          src={output}
                                                          alt=""
                                                        />
                                                      </td>
                                                      <td>
                                                        <img
                                                          src={correctOutput}
                                                          alt=""
                                                        />
                                                      </td>
                                                      <td style={{ fontSize: "14px", fontWeight: "400" }}>0</td>
                                                    </tr>
                                                    <tr
                                                      style={{
                                                        borderBottom:
                                                          "1px solid #E8E9EE",
                                                      }}
                                                    >
                                                      <td className="d-flex justify-content-center align-items-center" style={{ margin: "auto" }}>
                                                        <img src={eye} alt="" />
                                                      </td>
                                                      <td style={{ fontSize: "14px", fontWeight: "400" }}>Input #2</td>
                                                      <td>
                                                        {" "}
                                                        <div className="d-flex gap-2 align-center">
                                                          <img
                                                            src={wrongAns}
                                                            alt=""
                                                            className=""
                                                            style={{
                                                              width: "20px",
                                                              height: "20px",
                                                            }}
                                                          />
                                                          <button
                                                            style={{
                                                              fontSize: "12px",
                                                              fontWeight: "400",
                                                              border: "none",
                                                              background:
                                                                "#FADCDA",
                                                              borderRadius:
                                                                "4px",
                                                            }}
                                                          >
                                                            Wrong
                                                          </button>
                                                        </div>
                                                      </td>
                                                      <td style={{ fontSize: "14px", fontWeight: "400" }}>0.1234</td>
                                                      <td style={{ fontSize: "14px", fontWeight: "400" }}>2</td>
                                                      <td>
                                                        <img
                                                          src={output}
                                                          alt=""
                                                        />
                                                      </td>
                                                      <td>
                                                        <img
                                                          src={correctOutput}
                                                          alt=""
                                                        />
                                                      </td>
                                                      <td style={{ fontSize: "14px", fontWeight: "400" }}>0</td>
                                                    </tr>
                                                    <tr
                                                      style={{
                                                        borderBottom:
                                                          "1px solid #E8E9EE",
                                                      }}
                                                    >
                                                      <td className="d-flex justify-content-center align-items-center" style={{ margin: "auto" }}>
                                                        <img
                                                          src={eyeOff}
                                                          alt=""
                                                        />
                                                      </td>
                                                      <td style={{ fontSize: "14px", fontWeight: "400" }}>Input #3</td>
                                                      <td>
                                                        {" "}
                                                        <div className="d-flex gap-2 align-center">
                                                          <img
                                                            src={correctAns}
                                                            alt=""
                                                            className=""
                                                            style={{
                                                              width: "20px",
                                                              height: "20px",
                                                            }}
                                                          />
                                                          <button
                                                            style={{
                                                              fontSize: "12px",
                                                              fontWeight: "400",
                                                              border: "none",
                                                              background:
                                                                "#FADCDA",
                                                              borderRadius:
                                                                "4px",
                                                            }}
                                                          >
                                                            Wrong
                                                          </button>
                                                        </div>
                                                      </td>
                                                      <td style={{ fontSize: "14px", fontWeight: "400" }}>0.1234</td>
                                                      <td style={{ fontSize: "14px", fontWeight: "400" }}>2</td>
                                                      <td>
                                                        <img
                                                          src={output}
                                                          alt=""
                                                        />
                                                      </td>
                                                      <td>
                                                        <img
                                                          src={correctOutput}
                                                          alt=""
                                                        />
                                                      </td>
                                                      <td style={{ fontSize: "14px", fontWeight: "400" }}>0</td>
                                                    </tr>
                                                    <tr
                                                      style={{
                                                        borderBottom:
                                                          "1px solid #E8E9EE",
                                                      }}
                                                    >
                                                      <td className="d-flex justify-content-center align-items-center" style={{ margin: "auto" }}>
                                                        <img
                                                          src={eyeOff}
                                                          alt=""
                                                        />
                                                      </td>
                                                      <td style={{ fontSize: "14px", fontWeight: "400" }}>Input #4</td>
                                                      <td>
                                                        {" "}
                                                        <div className="d-flex gap-2 align-center">
                                                          <img
                                                            src={correctAns}
                                                            alt=""
                                                            className=""
                                                            style={{
                                                              width: "20px",
                                                              height: "20px",
                                                            }}
                                                          />
                                                          <button
                                                            style={{
                                                              fontSize: "12px",
                                                              fontWeight: "400",
                                                              border: "none",
                                                              background:
                                                                "#FADCDA",
                                                              borderRadius:
                                                                "4px",
                                                            }}
                                                          >
                                                            Wrong
                                                          </button>
                                                        </div>
                                                      </td>
                                                      <td style={{ fontSize: "14px", fontWeight: "400" }}>0.1234</td>
                                                      <td style={{ fontSize: "14px", fontWeight: "400" }}>2</td>
                                                      <td>
                                                        <img
                                                          src={output}
                                                          alt=""
                                                        />
                                                      </td>
                                                      <td>
                                                        <img
                                                          src={correctOutput}
                                                          alt=""
                                                        />
                                                      </td>
                                                      <td style={{ fontSize: "14px", fontWeight: "400" }}>0</td>
                                                    </tr>
                                                    <tr
                                                      style={{
                                                        borderBottom:
                                                          "1px solid #E8E9EE",
                                                      }}
                                                    >
                                                      <td className="d-flex justify-content-center align-items-center" style={{ margin: "auto" }}>
                                                        <img
                                                          src={eyeOff}
                                                          alt=""
                                                        />
                                                      </td>
                                                      <td style={{ fontSize: "14px", fontWeight: "400" }}>Input #5</td>
                                                      <td>
                                                        {" "}
                                                        <div className="d-flex gap-2 align-center">
                                                          <img
                                                            src={wrongAns}
                                                            alt=""
                                                            className=""
                                                            style={{
                                                              width: "20px",
                                                              height: "20px",
                                                            }}
                                                          />
                                                          <button
                                                            style={{
                                                              fontSize: "12px",
                                                              fontWeight: "400",
                                                              border: "none",
                                                              background:
                                                                "#FADCDA",
                                                              borderRadius:
                                                                "4px",
                                                            }}
                                                          >
                                                            Wrong
                                                          </button>
                                                        </div>
                                                      </td>
                                                      <td style={{ fontSize: "14px", fontWeight: "400" }}>0.1234</td>
                                                      <td style={{ fontSize: "14px", fontWeight: "400" }}>2</td>
                                                      <td >
                                                        <img
                                                          src={output}
                                                          alt=""
                                                        />
                                                      </td>
                                                      <td>
                                                        <img
                                                          src={correctOutput}
                                                          alt=""
                                                        />
                                                      </td>
                                                      <td style={{ fontSize: "14px", fontWeight: "400" }}>0</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </div>
                                            </div>
                                            <div className="Source-code" style={{ marginTop: "40px" }}>
                                              <div className="question">
                                                <strong style={{ color: "#535A5F", fontSize: "14px", fontWeight: "600" }}>Source Code{" "} </strong>
                                                <span style={{ color: "#FF6812", fontSize: "14px", fontWeight: "400", marginLeft: "5px" }}>Plaintext link</span>
                                              </div>
                                              <div className="p-3">
                                                {`process.stdin.resume(); 
                                                process.stdin.setEncoding('utf-8');
                                                var input="";
                                                process.stdin.on('data', function (data) {input += data.toString().trim(); input += '\n';});                                            //DO NOT TOUCH CODE ABOVE. Write your code only here
                                                function uniqueChar (str) {/*
                                                Write your logic here
                                                Do not use console.log inside the function.
                                                */
                                               for(var i=0;i<str.length;i++) {
                                               var subStr1 = str.slice(0,1); var subStr2 = str.slice(i+1);
                                                if (subStr1.indexOf(str[1])==-1 && subStr2.indexOf(str[1])==-1) ( found true; return "z"}
                                                }`}
                                              </div>
                                            </div>
                                          </Typography>
                                        </AccordionDetails>
                                      </Accordion>
                                    </div>
                                  </TabPanel>
                                </TabContext>
                              </Box>
                            </div>
                          </div>
                        </FormControl>
                        <div className="footer-question-list">
                          <Button className="mark-review-btn">Previous</Button>
                          <div className="d-flex d-md-block justify-content-between">
                            <Button className="compile-btn">
                              Compile & Test Code
                            </Button>
                            <Button className="save-btn">Submit Code</Button>
                          </div>
                        </div>
                      </Box>
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel className="tab-pannel-box" value="3">
                Item Three
              </TabPanel>
              <TabPanel className="tab-pannel-box" value="4">
                Item Four
              </TabPanel>
              <TabPanel className="tab-pannel-box" value="5">
                Item FIve
              </TabPanel>
              <TabPanel className="tab-pannel-box" value="6">
                Item Six
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>

      {/* Model Question Overview */}
      <div
        div
        className="modal fade overview-question-list"
        id="QuestinHelp"
        tabIndex="-1"
        aria-labelledby="QuestinHelp"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>

            <div className="modal-body">
              <div>
                <p>Q.1 What is react.js?</p>
                <p>Q.2 What is react.js?</p>
                <p>
                  Q.3 React.js is written in which of the following language?
                </p>
                <p>
                  Q.4 What keyword is used to check whether a given property?
                </p>
                <p>Q.5 New</p>
                <p>Q.6 What is react.js?</p>
                <p>Q.7 What is react.js?</p>
                <p>
                  Q.8 React.js is written in which of the following language?
                </p>
                <p>
                  Q.9 What keyword is used to check whether a given property?
                </p>
                <p>Q.10 New</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
