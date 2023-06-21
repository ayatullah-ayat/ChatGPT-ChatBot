const Button = ({ btnName, submitLogin }) => {

    return (
        <button onClick={submitLogin} type="button" className="btn btn-primary btn-block mb-4">{ btnName }</button>
    )
}

export default Button;