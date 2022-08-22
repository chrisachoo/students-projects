const Button = ({ onClick, label, width }) => {
    return <button className='btn btn-primary' style={{ width: `${width}`}} onClick={onClick}>{label}</button>
}
 
export default Button