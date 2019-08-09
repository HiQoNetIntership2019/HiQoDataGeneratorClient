import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { HOST_NAME, hostInfo } from "../../constants/ConstantsForAPI";


export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  responseFacebook = response => {
    //console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
      accessToken: response.accessToken,
      dataAccessExpirationTime:response.data_access_expiration_time,
      expiresIn: response.expiresIn
    });
    console.log(this.state);

    fetch(hostInfo.API_FOR_USER, {
      method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          UserID: this.state.userID,
          UserName: this.state.name,
          UserEmail: this.state.email,
          AccessToken: this.state.accessToken,
          DataAccessExpirationTime: this.state.dataAccessExpirationTime,
          ExpiresIn: this.state.expiresIn
      })
    })
  };

  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}>
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="503307607084395"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}