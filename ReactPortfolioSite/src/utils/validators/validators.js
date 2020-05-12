export const requiredField=value =>{
    if(value) return undefined;
    return "Требуется заполнить поле";
}
export const maxLengthCreator=(maxLength)=>(value) =>{
    if(value&&value.length>maxLength) return `Максимальная длина - ${maxLength} символов`;
    return undefined;
}