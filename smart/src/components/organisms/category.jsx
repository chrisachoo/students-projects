import styled from 'styled-components'

const CardContainer = styled.div`
    background: #eee;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`

const Title = styled.h2`
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 5px;
`

const Link = styled.p`
    margin-top: 1em;
    cursor: pointer;
    transition: all .5 ease;
    color: #82AFB0;

    &:hover {
        color: lightblue;
        text-decoration: underline;
      }
`

const IMG = styled.img`
      object-fit: cover;
`

const Category = ({ title, link, onClick }) => {
    return (
        <CardContainer style={{ width: '25%' }}>
            <Title>{title}</Title>
            <IMG src={link} style={{ width: '100%' }} />
            <Link onClick={onClick}>Shop now</Link>
        </CardContainer>
    )
}

export default Category