import React from 'react'
import styled from 'styled-components'

const Button = styled.button `
  padding: .5em 2em;
  font-size: 1em;
  background: #152632;
  color: #F6F9FD;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
`

const FullWidthButton = ({ onClick, label, disabled }) => {
  return (
    <Button className='button' onClick={onClick} disabled={disabled}>{label}</Button>
  )
}

export default FullWidthButton