import React, { Component } from "react";
import Anim from '../../assests/images/yogesh.png'

class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return (
     <img src={Anim}/>
    );
  }
}

export default FeelingProud;
