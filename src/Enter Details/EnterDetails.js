import React, { useState, } from 'react'
import logo from '../../src/images/logo.svg';
import fillDetails from '../../src/images/fill-details.svg';
import WhoWeAreImgpowerd from '../../src/images/powerd-logo.svg';
import { useNavigate } from 'react-router-dom';
import { FormControl, Box, TextField, Button, Input, InputLabel } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function EnterDetails() {

  const [value, setValue] = useState();

  const [selectedFile, setSelectedFile] = useState(null);

  const navigate = useNavigate();
  const handlePage = () => {
    navigate('/start-test')
  }
  const handleEnterDetails = () => {
    navigate('/')
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    mobile: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    college: false,
    mobile: false
  });

  const handleFormChangeEmail = (event) => {
    const { name, value } = event.target;

    // Email validation regex
    const emailRegex = /\S+@\S+\.\S+/;

    // Additional validation for @gmail.com or custom message
    const customValidationRegex = /@gmail\.com|yourcustommessage/;

    const isValidEmail = emailRegex.test(value);
    const isValidCustomMessage = customValidationRegex.test(value);

    setFormErrors({
      ...formErrors,
      email: !(isValidEmail || isValidCustomMessage),
    });

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: value.trim() === '' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isFormValid = Object.values(formErrors).every((error) => !error);

    if (isFormValid) {
      handlePage(); // Redirect to the next page
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleClearFile = () => {
    setSelectedFile(null);
  };




  return (

    <>
      <div className="App">

        <div className="main-head">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <header className="logo-header">
                  <a href='/' ><img src={logo} alt="logo" className='hire-logo' /></a>
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
                    <li className="active line-not-active"><span>Enter Details</span></li>
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

                    <div className='col-lg-12'>

                      <div className='practice-test-left'>
                        <div className='practice-test-name'>
                          <img src={fillDetails} alt="Test Sheet Icon" className='fill-details-ring' />
                          <h1>Fill Details</h1>
                        </div>
                      </div>

                    </div>

                  </div>

                  <div className="row">
                    <div className="col-lg-12">
                      <div className='form-fill-details'>
                        <Box className='formbox' component="form" autoComplete="off" onSubmit={handleFormSubmit}>
                          <FormControl className='formfieldbox formname'>
                            <TextField
                              name="name"
                              label="Name"
                              variant="outlined"
                              color="success"
                              required
                              onChange={handleFormChange}
                              error={formErrors.name}
                            />
                          </FormControl>

                          <FormControl className="formfieldbox formmail">
                            <TextField
                              name="email"
                              label="Email"
                              variant="outlined"
                              color="success"
                              required
                              onChange={handleFormChangeEmail}
                              error={formErrors.email}
                              helperText={formErrors.email && 'Invalid email address'}
                            />
                          </FormControl>

                          <FormControl className="formfieldbox formcollege">
                            <TextField
                              name="college"
                              label="College"
                              variant="outlined"
                              color="success"
                              required
                              onChange={handleFormChange}
                              error={formErrors.college}
                            />
                          </FormControl>

                          <FormControl className="formfieldbox formcall">
                              <PhoneInput
                              className='phoneNumber'
                              placeholder="Mobile No"
                              name="mobile"
                              variant="outlined"
                              color="success"
                              value={value}
                              onChange={setValue}
                              />
                          </FormControl>

                          <div className="col-lg-12 mt-3 mb-3">
                            <div className="className='bottom-next-border'">
                              <div className='upload-resume-label'>Upload Resume *</div>
                              {!selectedFile ? (
                                <label htmlFor="file-upload">
                                  <Button
                                    component="span"
                                    variant="contained"
                                    className='upload-btn'
                                    startIcon={<CloudUploadIcon />}
                                  >
                                    Upload
                                  </Button>
                                  <input
                                    type="file"
                                    id="file-upload"
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                  />
                                </label>
                              ) : (
                                <div>
                                  <Button
                                    component="span"
                                    variant="contained"
                                    className='uploaded-text'
                                  >{selectedFile.name}
                                    <IconButton onClick={handleClearFile} className='close-icon-upload'>
                                      <ClearIcon />
                                    </IconButton>

                                  </Button>
                                  <span></span>

                                </div>
                              )}
                            </div>

                          </div>

                          <div className="col-lg-12">
                            <div className='bottom-next-border abs-form'>
                              <Button onClick={handleEnterDetails} className='back'>Back</Button>
                              <Button type="submit" disabled={Object.values(formErrors).some((error) => error)} >Next</Button>
                            </div>
                          </div>
                        </Box>

                      </div>
                    </div>
                  </div>

                </div>

              </div>

              <div className="col-lg-12">
                <div className='footer-logo abs-form-footer'>
                  <img src={WhoWeAreImgpowerd} alt="" className='who-wer-are-p-img' />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </>


  )
}

export default EnterDetails