import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import FlightIcon from '@mui/icons-material/Flight';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <MDBFooter style={{ backgroundColor: '#41B3A3' }} className='text-center text-lg-start text-medium--dark'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span><b>Feel free to connect with us on social networks:</b></span>
        </div>

        <div>
          <a href='https://www.facebook.com' className='me-4 text-reset' target='_blank'>
            <FacebookIcon></FacebookIcon>
          </a>
          <MDBIcon fab icon="facebook-f" />
          <a href='https://www.twitter.com' className='me-4 text-reset'  target='_blank'>
            <TwitterIcon></TwitterIcon>
          </a>
          <a href='https://www.google.com' className='me-4 text-reset'  target='_blank'>
            <GoogleIcon></GoogleIcon>
          </a>
          <a href='https://www.instagram.com' className='me-4 text-reset'  target='_blank'>
            <InstagramIcon></InstagramIcon>
          </a>
          <a href='https://www.linkedin.com' className='me-4 text-reset'  target='_blank'>
            <LinkedInIcon></LinkedInIcon>
          </a>
        </div>
      </section>

      <section className='' style={{ backgroundColor: '#41B3A3' }}>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Udaan Air
              </h6>
              <p>
                <b>Udaan Air is committed towards maintaining integrity and customer satisfaction over everything else. Feel free to share your views.</b>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
              <p>
                <Link to={'/home'} className='text-reset'>
                  <AirplaneTicketIcon></AirplaneTicketIcon>{"  "}
                  Tickets
                </Link>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  <Inventory2Icon></Inventory2Icon>{"  "}
                  Packages (coming soon)
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  <CorporateFareIcon></CorporateFareIcon>{"  "}
                  Corporate Bookings (coming soon)
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  <FlightIcon></FlightIcon>{"  "}
                  Private Jets (coming soon)
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <Link to={'/home'} className='text-reset'>
                  <HomeIcon></HomeIcon>{"  "}
                  Home
                </Link>
              </p>
              <p>
                <Link to={'/aboutus'} className='text-reset'>
                <InfoIcon></InfoIcon>{"  "}
                  About us
                </Link>
              </p>
              <p>
                <Link to={'/signin'} className='text-reset'>
                <LoginIcon></LoginIcon>{"  "}
                  Login
                </Link>
              </p>
              <p>
                <Link to={'/complaints'} className='text-reset'>
                <ForwardToInboxIcon></ForwardToInboxIcon>{"  "}
                  Complaints
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <AssuredWorkloadIcon></AssuredWorkloadIcon>{"  "}
                Pune, MH 411057, IND
              </p>
              <p>
                <EmailIcon></EmailIcon>{"  "}
                crm@udaanair.com
              </p>
              <p>
                <CallIcon></CallIcon>{"  "} +91 9482887651
              </p>
              <p>
                <CallIcon></CallIcon>{"  "} +91 7338521862
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'></section>
      <div className='text-center p-4 fw-bold' >
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          udaanair.com
        </a>
      </div>
    </MDBFooter>
  );
}