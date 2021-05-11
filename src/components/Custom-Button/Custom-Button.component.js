import React from 'react'

// import './Custom-Buttons.styles.scss'

import { CustomButtonContainer } from './Custom-Button.styles'

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
)

export default CustomButton
