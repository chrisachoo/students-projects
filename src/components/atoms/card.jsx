const Card = ({ path, description, price, onClick }) => {
    return (
        <div className='card' onClick={onClick}>
            <div className='card-image'>
                <img src={path} />
            </div>
            <div className='card-text'>
                <p>{description}</p>
                <span>R {price}</span>
            </div>
        </div>
    )
}

export default Card