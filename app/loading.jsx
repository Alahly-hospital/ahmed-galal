'use client'
import React from 'react';
import { Grid } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="d-flex  flex-column gap-2 justify-content-center align-items-center vh-100">
      <Grid
        type="TailSpin"  
        color="#4fa94d"  
        height={50} 
        width={50}  
      />
 
    </div>
  );
};

export default Loading;
