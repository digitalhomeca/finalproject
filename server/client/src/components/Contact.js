import React, {Component} from 'react';

class Form extends Component {
      constructor(){
        super();
        this.state={
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            message: "",
        } 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  handleSubmit = e => {
    e.preventDefault();
    console.log('form: ',this.state);
    alert('Thank-you ' + this.state.firstName + 'for your interest. Please note this is only a demo and your contact information was not taken.');
    // IF SUBMITTING TO A PARENT Component then would --- this.props.onSubmit(this.state)--- where onSubmit is the parent function handed down OR could post to a database
    this.setState({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
        });
  };
    
  render() {
      document.title = "Contact Digital Home";
      return (  

      <div className="container">
      {/* <h4 className='ht-indent'>Contact </h4> */}
          <div className="row"> 
          <div className="col s12 m12 l12 ">
          {/* <div className="divider"></div>    */}

          <div className="row">
          <div className="col m3 l4 left left-align">                   
              <br /><img className='responsive-img' src='/images/contact.jpg' />
              <p className="center-align">For the fastest response, please contact Hugh Thompson at (905) 919-0356.</p>
              
          </div>
          <div className="col s12 m9 l8 ">
          <form className="col s12">
              
              <h5 className="center-align section">Tell us how to contact you</h5>
              <div className="divider"></div>
              <div className="row">
                <div className="input-field col s12 m12 l6">
                  <br /><i className="material-icons prefix">account_circle</i>
                  <input name='firstName' type="text" className="validate" placeholder='First Name' value={this.state.firstName} onChange={e => {this.handleChange(e) }} />
                </div>
                <div className="input-field col s12 m12 l6">           
                  <br /><i className="material-icons prefix">account_circle</i>
                  <input name='lastName' className="validate" placeholder='Last Name' value={this.state.lastName} onChange={e => {this.handleChange(e) }} />
                </div>
              </div>

             <div className="row"> 
                <div className="input-field col s12">
                  <i className="material-icons prefix">local_phone</i>
                  <input className="validate" name='phone' placeholder='Phone Number' value={this.state.phone} onChange={e => {this.handleChange(e) }} />
                </div>
                <div className="input-field col s12 ">
                  <i className="material-icons prefix">email</i>
                  <input className="validate" name='email' id='email' type='email'placeholder='Email Address' value={this.state.email} onChange={e => {this.handleChange(e) }} />
                  <label for="email" data-error="wrong" data-success="right"></label> 
                </div>
            </div>

            <div className="row"> 
              <div className="input-field col s12">
                <i className="material-icons prefix">mode_edit</i>
                <textarea className="materialize-textarea" name='message' placeholder='Type your message here' value={this.state.message} onChange={e => {this.handleChange(e) }} />
              </div>
            </div>    
              
            <button className="btn waves-light right" onClick={e => this.handleSubmit(e)} >Submit </button>
          </form>

         </div>
          


          </div>
          </div>   
          </div>
      </div>
        
        )
  }
}

export default Form;



        