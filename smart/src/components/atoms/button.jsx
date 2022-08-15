import styled from 'styled-components'

const Button = styled.button `
  padding: .5em 2em;
  font-size: 1em;
  background: #152632;
  color: #F6F9FD;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const PrimaryButton = ({ onClick, label }) => {
    return <Button className='button' onClick={onClick}>{label}</Button>
}
 
export default PrimaryButton