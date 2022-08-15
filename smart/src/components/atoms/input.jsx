import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
`

const Label = styled.label`
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 4px;
`
const Input = styled.input`
    width: 100%;
    padding: .5em 1em;
    border: 2px solid #000;
    border-radius: 5px;
    outline: none;  
    margin-bottom: 1em;
`

const FormInput = ({label, type, placeholder, name, value, onChange, required }) => {
  return (
    <Container>
        <Label>{label}</Label>
        <Input className='invalid' type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} ></Input>
    </Container>
  )
}

export default FormInput