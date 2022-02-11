import { Button, ButtonProps } from 'antd'
import React from 'react'
import styled from 'styled-components'

const CustomButton = styled(Button)`
  margin: 0 10px;
  max-height: 64px;
  color: white;
  font-size: 2rem;
  :hover {
    transition: all 1s;
    background: rgba(0, 0, 0, 0.09);
    cursor: pointer;
  }
`

const CircleButton: React.FC<ButtonProps> = ({
  shape = 'circle',
  type = 'link',
  ...props
}): React.ReactElement => {
  return (
    <CustomButton type={type} shape={shape} {...props}>
      {props.children}
    </CustomButton>
  )
}

export default CircleButton
