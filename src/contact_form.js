import React,{Component} from 'react';
import emailjs from 'emailjs-com';
import {MDBCol,MDBRow,MDBInput,MDBIcon,MDBBtn} from 'mdbreact';
import {SocialIcon} from 'react-social-icons';
class ContactForm extends Component{
	constructor(props){
		super(props);
		this.state={
			name:'',
			email:'',
			subject:'',
			message:''
		}
	}
	sendMail=(e)=>{
		e.preventDefault();
		emailjs.send('gmail', 'faizanalii_98', this.state, 'user_YvrJzsphBuzUAGtTB1haF')
		 .then(() => {
		 	alert("Message Sent Successfully");
		 	setTimeout(()=>{
          	this.setState({name:"",message:"",subject:"",email:""});
		 	},3000);
      }).catch((error) => {
         alert(error);
      });
	}
	sociallinks()
  {
    return(
      <div>
            <SocialIcon  url='https://www.twitter.com/oye_chitta/'/><span> </span>
            <SocialIcon  url='https://github.com/faizanalii/'/><span> </span>
            <SocialIcon  url='https://www.linkedin.com/in/faizan-ali-76aa7a154/'/><span> </span>            
            <SocialIcon  url='https://www.facebook.com/profile.php?id=100005086636369'/><span>  </span>
            <SocialIcon  url='https://www.instagram.com/oye_chitta/'/><span> </span>
          </div>
        );
  }
	render()
	{
		return(
			<>
				<MDBRow>
				<MDBCol md="2"/>
			    <MDBCol md="8">
			      <form onSubmit={this.sendMail}>
			        <p className="h3 text-center mb-4" style={{color:"white"}}>Contact me</p>
			        <div className="grey-text">
			          <MDBInput value={this.state.name} label="Your name" onChange={(e)=>this.setState({name:e.target.value})} name="name" icon="user" group type="text" validate error="wrong"
			            success="right" />
			          <MDBInput required value={this.state.email} label="Your email" onChange={(e)=>this.setState({email:e.target.value})} icon="envelope" name="email" group type="email" validate error="wrong"
			            success="right" />
			          <MDBInput required value={this.state.subject} label="Subject" onChange={(e)=>this.setState({subject:e.target.value})} icon="tag" group type="text" name="subject" validate error="wrong" success="right" />
			          <MDBInput required value={this.state.message} type="textarea" onChange={(e)=>this.setState({message:e.target.value})} rows="2" label="Your message" name="message" icon="pencil-alt" />
			        </div>
			        <div className="text-center">
			          <MDBBtn type="subject" outline color="secondary">
			            Send
			            <MDBIcon far icon="paper-plane" className="ml-1" />
			          </MDBBtn>
			        </div>
			      </form>
			    </MDBCol>
			    <MDBCol md="2" />
			  </MDBRow>
			  <br/><br/><br/>
			  <MDBRow>
			  	<MDBCol md="12" className="d-flex justify-content-center">
			  		{this.sociallinks()}
			  	</MDBCol>
			  </MDBRow>
			  </>
			);
	}
}
export default ContactForm;