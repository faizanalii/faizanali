import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'
import { BrowserRouter } from 'react-router-dom';
import { MDBNav,MDBNavbar, MDBNavItem, MDBNavLink, MDBContainer,MDBCarouselCaption, MDBRow,MDBCol,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView} from "mdbreact"; 
import {Nav,Navbar} from 'react-bootstrap';
import stars from "./Images/stars.jpg";
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import {SocialIcon} from 'react-social-icons'; 
import galaxy from './Images/galaxy.jpg';
import StarsField from './stars';
import faizan from './Images/faizan.png';
import youtubedownloader from './Images/youtubedownloader.png';
import scraping from './Images/scraping.png';
import poster from './Images/poster.png';
import nistapi from './Images/nistapi.jpg';
import ReactPlayer from 'react-player';
import web_info from './Images/web_info.jpg';
import channelvideos from './Images/channelvideos.jpg';
import face_rec from './Images/face_rec.jpg';
import hacker from './Images/hacker.svg';
import ContactForm from './contact_form';
class App extends Component{
  constructor(props){
    super(props);
  }

  render()
  {
    return(
      <>
      <Parallax scrolling horizontal={false} ref={ref => (this.parallax = ref)} pages={6}>
        <StarsField/>
      <BrowserRouter>
    <MDBNav className="justify-content-center nav-fill" fixed="top">
      <MDBNavItem >
        <MDBNavLink onClick={()=>this.parallax.scrollTo(1)} style={{letterSpacing:5}} className="white-text"  to="#" >ABOUT</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem >
        <MDBNavLink onClick={()=>this.parallax.scrollTo(2)} style={{letterSpacing:5}} className="white-text" to="#">WORK</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink onClick={()=>this.parallax.scrollTo(5)} style={{letterSpacing:5}} className="white-text" to="#" >CONTACT</MDBNavLink>
      </MDBNavItem>
    </MDBNav>
    </BrowserRouter>
      <ParallaxLayer offset={0} factor={1} onClick={()=>this.parallax.scrollTo(1)} speed={1} >
        <ParallaxLayer className='mainpage' offset={0.5} factor={0} speed={3}>
        <h1>There are yet more worlds beyond the Stars!</h1>
        </ParallaxLayer>
    </ParallaxLayer>
        <ParallaxLayer offset={1} factor={1} speed={1} onClick={()=>this.parallax.scrollTo(2)} >
        <MDBContainer style={{marginTop:"10%"}}>
        <MDBRow>
        <MDBCol md="6">
           <p style={{color:"gray"}}>
            Hi, This is Faizan Ali.<br/>
              I always have the curiosity to learn something new and my this curiosity lead me to learn different things. 
              I've learnt Python one of my favorite programming language on my own. 
              I've worked in React JS, Django, PyQt5, Web Scraping (BeautifulSoup, Requests, Selenium), 
              Kali Linux ( Web Penetration Testing, Making Payloads, Android Hacking, Network Test etc ), 
              Video Editing in Premier Pro, designing websites in Figma, Logo making, Poster Designing and many other things which I love to do. 
              Languages I've worked in are JavaScript, Python, Java, C#, C++, C, HTML5, CSS3. 
              </p>
        </MDBCol>
        <MDBCol md="2">
        </MDBCol>
        <MDBCol md="4">
          <img src={faizan}  style={{ width: '100%',opacity:'1', height:'100%' }}/>
        </MDBCol>
        </MDBRow>
        </MDBContainer>          
        </ParallaxLayer>
        <ParallaxLayer offset={2} factor={4} speed={1}>
           <MDBRow>
            <MDBCol md="6">
              <h3 style={{color:"white"}}>Youtube Video Downloader using PyQt5 & Python. <SocialIcon url="https://github.com/faizanalii/YouTube-Video-Downloader"/></h3>
              <br/>
              <img src={youtubedownloader} style={{width:"100%" ,border:"3px solid white" ,borderRadius:"25px"}} alt="Youtube Video Downloader SS"/>
            
            </MDBCol>
            <MDBCol md="5">
               <h3 style={{color:"white"}}>Extracting data from api using Python<p>(Sample Code)</p></h3>
              <br/>
              <img src={nistapi} style={{width:"100%",border:"3px solid white" ,borderRadius:"25px"}} alt="Youtube Video Downloader SS"/>
            </MDBCol>
            </MDBRow>
            <br/>
            <MDBRow>
            <MDBCol md="7">
              <MDBRow>
                <MDBCol md="6">
                  <h3 style={{color:"white"}}>Facial Recognition using Python <SocialIcon url="https://github.com/faizanalii/Face-Recognition-"/> </h3>
                  <br/>
                  <img src={face_rec} style={{width:"100%",border:"3px solid white" ,borderRadius:"25px"}} alt="Youtube Video Downloader SS"/>
                </MDBCol>
                <MDBCol md="6">
                  <h3 style={{color:"white"}}>Download All Channel Videos(YT) <SocialIcon url="https://github.com/faizanalii/AllChannelVideos"/> </h3>
                  <br/>
                  <img src={channelvideos} style={{width:"100%",border:"3px solid white" ,borderRadius:"25px"}} alt="Youtube Video Downloader SS"/>
                </MDBCol>
                </MDBRow>
                <br/>
                <MDBRow>
                <MDBCol md="2"/>
                <MDBCol md="8">
                  <h3 style={{color:"white"}}>Video Editing</h3><br/>
                  <ReactPlayer width="100%" height="auto" controls={true} volume={0.3} style={{border:"3px solid white" ,borderRadius:"25px",overflow:"hidden"}} 
                  url="https://www.facebook.com/granpizza59/videos/437328956765892"/>
                </MDBCol>
              </MDBRow>
            </MDBCol>
             <MDBCol md="4">
               <h3 style={{color:"white"}}>Poster Design</h3>
              <br/>
              <img src={poster} style={{width:"100%", height:"80%" ,border:"3px solid white" ,borderRadius:"25px"}} alt="Youtube Video Downloader SS"/>
            </MDBCol>
           </MDBRow>
           <br/>
           <MDBRow>
                <MDBCol md="2"/>
                <MDBCol md="8">
                  <h3 style={{color:"white"}}>Online platform for penetration testing and cyber security assessments of websites. <SocialIcon url="https://github.com/faizanalii/FYP-Securing-web-apps"/> 
                  </h3>
                  <p style={{color:"white"}}>This is an ongoing project backend is finished,
                   working on front-end. Platform covers OWASP top 10 vulnerabilities(XSS,File Inclusion, Command Injection etc).
                   Repository will be public soon.</p>
                  <MDBCarousel activeItem={1} length={2} showControls={true} showIndicators={true} className="z-depth-1" slide>
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                          <MDBView>
                             <img  src={hacker} style={{width:"100%", height:"60vh"}} alt="Youtube Video Downloader SS"/>
                          </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                          <MDBView>
                            <img style={{width:"100%",height:"60vh"}} src={web_info} alt="Youtube Video Downloader SS"/>
                          </MDBView>
                          <MDBCarouselCaption>
                            <h3 className="h3-responsive">Screen Shot of Results</h3>
                          </MDBCarouselCaption>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                  </MDBCarousel>
                </MDBCol>

           </MDBRow>
        </ParallaxLayer>
           <ParallaxLayer offset={5} factor={1} speed={1}>
          <ContactForm/>
          <button className='arrowup' type="button" onClick={()=>this.parallax.scrollTo(0)}><i className="arrow up"></i></button>         
          </ParallaxLayer>
    </Parallax>
    </>
      );
  }
}
export default App;
