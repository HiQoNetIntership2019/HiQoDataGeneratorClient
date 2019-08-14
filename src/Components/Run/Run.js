import React, { Component } from "react";
import request from 'superagent'
import Facebook from "../../Components/Facebook/Facebook"

export default class Run extends Component {
    constructor () {
      super()
      this.state = {
          isLoggedIn: false,
      }
    }
    isLoggedInRequest(){
        request
            .get()
     }
    render() {

        let runButton;

        if(this.state.isLoggedIn == true){
            runButton = (
                <div 
                    style={{
                    width: "400px",
                    margin: "auto",
                    background: "#f4f4f4",
                    padding: "20px"
                  }}>
                    <button>Run</button>
                </div>
            );
        }else{
            runButton = (
                <div style={{text_align: "center"}}><Facebook/></div>
            )
        };
        return (
          <div>{runButton}</div>
        )
      }

};
