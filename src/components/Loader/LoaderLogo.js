import React from "react";
import "./LoaderLogo.css";
import sign from "../../assests/images/b3.gif";
class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
    
      <img src={sign}/>
      </>
    );
  }
}

export default LogoLoader;
