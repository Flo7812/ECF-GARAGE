

const FormButton = ({type, fonction, text}) => {
    return (
        <button type={type} onSubmit={fonction}>{text}</button>
    )
};

export default FormButton;