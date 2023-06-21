
const Input = ({ type, inputChangeHandler }) => {
    
    return(
        <input type={ type } className="form-control" onChange={ inputChangeHandler } />
    )
}

export default Input;