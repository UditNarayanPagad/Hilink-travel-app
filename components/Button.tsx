import React from 'react'
type ButtonProps = {
    type: String;
    title: String;
    icon: string;
    varient: String; 
}

const Button = ({type,title,icon,varient}:ButtonProps) => {
  return (
    <div className={`text-white px-5 rounded-full h-12 cursor-pointer ${varient} ${type} items-center justify-center gap-3`}>
       { icon && <img src={icon} width="23px" alt="" />}
        <button>{title}</button>
    </div>
  )
}

export default Button