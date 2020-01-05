import React from 'react';
import Iframe from "react-iframe";

const HomePage = props => {


  return (
    <div>
      <Iframe
        url="https://livetourlab.com/tours/3004/"
        width="700px"
        height="395px"
        className="video"
        display="initial"
        position="relative"
      />
    </div>
  );
}

export default HomePage