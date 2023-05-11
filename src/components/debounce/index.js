import React from 'react'
import CustomHelper from './custom-helper'
import CustomHook from './custom-hook'
import Normal from './normal'


function Index() {
  return (
    <div>
      <Normal />
      <br />
      <CustomHelper />
      <br />
      <CustomHook />
    </div>
  )
}

export default Index