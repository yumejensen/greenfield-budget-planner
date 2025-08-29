import React from "react";
import { useState } from "react";

const Template = (props) => {

  // props
  const { children = 'default' } = props

  // state can go here if needed

  // any helpers needed

  // return with html
  return (
    <div>
      This is a {children} component
    </div>
  )
}

export default Template;