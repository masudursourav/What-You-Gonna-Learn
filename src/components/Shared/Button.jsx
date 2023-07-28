/* eslint-disable react/prop-types */
const Button = ({children, version = 'primary', type, isDisabled}) => {
    return (
        <>
         <button type={type} disabled = {isDisabled} className={`btn btn-${version}`}>{children}</button>   
        </>
    );
};

export default Button;