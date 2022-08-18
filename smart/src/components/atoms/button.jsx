import styled from 'styled-components'

const Button = styled.button `
padding: .5em 2em;
font-size: 1em;
background: #2874f0;
color: #eee;
border: none;
border-radius: 5px;
cursor: pointer;
transition: all .5 ease;

&:hover {
  background: #2196f3
}
`

const PrimaryButton = ({ onClick, label }) => {
    return <Button className='button' onClick={onClick}>{label}</Button>
}
 
export default PrimaryButton