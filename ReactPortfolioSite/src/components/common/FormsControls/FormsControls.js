import React from 'react';

const FormControl=({input,meta,child,element,...props})=>{
    const hasError=meta.touched&& meta.error;
    return(
        <div>
        <div>
        {props.children}
        </div>
        { hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea=(props)=>{
    const {input,meta,child,element,...restProps}=props;
    return(
    <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    )
}
export const Input=(props)=>{
    const {input,meta,child,element,...restProps}=props;
    return(
        <FormControl {...props} element={"input"}><input {...input} {...restProps}/></FormControl>
    )
}