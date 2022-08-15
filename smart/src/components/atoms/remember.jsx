import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
    font-size: 14px;
    color: #152632;
`

const Checkbox = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`

const RemeberMe = () => {
    return (
        <Container>
            <Checkbox>
                <div>
                    <input type='checkbox' />
                </div>
                <div>
                    <label>Remember me</label>
                </div>
            </Checkbox>
            <p><a href='#'>Forgot password</a></p>
        </Container>
    )
}

export default RemeberMe