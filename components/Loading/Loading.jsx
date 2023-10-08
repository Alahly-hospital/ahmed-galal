import React from 'react'
import { Grid } from 'react-loader-spinner'

export const Loading = () => {
  return (
    <Grid
        height="30"
        width="30"
        color="#4fa94d"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{
            position:"absolute",
            left:"50%",
            top:"50%",
            transform: "translate(-50% , -50%)"
        }}
        wrapperClass="loading"
        visible={true}
        />
  )
}
