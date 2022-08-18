import React from 'react'
import styled from 'styled-components'

const Text = styled.p `
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px
    margi-top: 1em;
`

const Paragraph = ({paragraph}) => {
  return <Text>{paragraph}</Text>
}

export default Paragraph