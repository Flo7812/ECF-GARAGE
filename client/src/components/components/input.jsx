

const FormInput = ({className='', type, inputName, placeholder='', value, fonction}) => {
    return (
        
            <input className={className} type={type} name={inputName} placeholder={placeholder} value={value} onChange={fonction}/>
        
    );
};

export default FormInput;