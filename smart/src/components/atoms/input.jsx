import styled from 'styled-components'

const Container = styled.div`
  padding: .5em 1em;
  border: 1px solid #152632;
  display: flex;
  align-items: center;
  border-radius: .5em;
`
const Field = styled.input`
  outline: none;
  background: #FFF;
  color: #1B1E23;
  padding-left: .6em;
  border: none;
  font-size: 1em;
  width: 100%;
`
const Label = styled.label`
  font-size: 1em;
  align-items: center;
  color: #1B8BF8;
`

const Input = ({ label, type, placeholder, name, value, onChange }) => {
    return (
        <Container>
            <Label>{label}</Label>
            <Field type={type} placeholder={placeholder} name={name} value={value} onChange={onChange}></Field>
        </Container>
    )
}

export default Input