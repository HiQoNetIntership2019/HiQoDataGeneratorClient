import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { HOST_NAME, hostInfo } from "../../constants/ConstantsForAPI";
import axios from 'axios';


export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    isAccessTokenExpiredIn: true,
    userId: "DefaultId",
    userName: "DefaultName",
    userEmail: "DefaultEmail",
    userPicture: "DefaultPicture",
    accessToken: "DefaultToken",
    dataAccessExpirationTime: 0,
    expiresIn: 0
  };

  responseFacebook = response => {
    this.setState({
      userId: response.userID,
      userName: response.name,
      userEmail: response.email,
      userPicture: response.picture.data.url,
      accessToken: response.accessToken,
      dataAccessExpirationTime:response.data_access_expiration_time,
      expiresIn: response.expiresIn
    });

    sessionStorage.setItem("accessToken", this.state.accessToken);

    fetch(hostInfo.API_FOR_USER, {
      method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          UserID: this.state.userId,
          UserName: this.state.userName,
          UserEmail: this.state.userEmail,
          AccessToken: this.state.accessToken,
          DataAccessExpirationTime: this.state.dataAccessExpirationTime,
          ExpiresIn: this.state.expiresIn
       })
    })
  };

  isAccessTokenExpiredIn = () => {
      axios.get(hostInfo.API_FOR_USER_ACCESS_TOKEN_CHECK + sessionStorage.getItem("accessToken"))
      .then( (response) => {
      console.log("axios response.data", response.data);
      this.state.IsAccessTokenExpiredIn = response.data;
      console.log("IsAccessTokenExpiredIn: ", this.state.isLoggedIn)
    })
    .catch( (error) => {
      console.log(error);
    });  
  }

  callLoginIfAccessTokenExpiredIn = () => {
  }



  render() {

    let fbContent;

    if (this.state.isLoggedIn){
      fbContent = (
        <div
          style={{
            width: "400px",
            margin_left: "auto",
            margin_right: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}>
          <img src={this.state.picture} alt={this.state.userName} />
          <h2>Welcome, {this.state.userName}</h2>
        </div>
      );
    } else {
      fbContent = (
      <div>
        <FacebookLogin
          appId="503307607084395"
          fields="name,email,picture"
          //onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
        </div>
      );
    }

    return <div>{fbContent}</div>;
  }
}