import React from 'react'
import styled from 'styled-components'

const P = styled.p`
    text-align: center;
    font-size: 16px;
    margin-top: 1.5em;
    font-weight: 300;
`
const SPAN = styled.span`
    font-weight: 700;
    cursor: pointer;
`

const SubText = ({text, linkText, onClick}) => {
  return <P className='redirect-text'>{text} <SPAN onClick={onClick}>{linkText}</SPAN></P>
}

export default SubText