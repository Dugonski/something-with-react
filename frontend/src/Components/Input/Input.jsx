import InputContainer from "./Input.style.js";

export default function Input({name, type}){
    return(
        <InputContainer>
            <label>{name}</label>
            <input type={type} placeholder={name} />
        </InputContainer>
    )
}