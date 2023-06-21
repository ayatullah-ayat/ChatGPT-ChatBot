
const Label = ({ className, name }) => {

    return (
        <label className={className} htmlFor="label"> { name } </label>
    )
}

export default Label;