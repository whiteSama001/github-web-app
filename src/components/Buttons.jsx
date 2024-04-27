import React from 'react'

const Buttons = ({variant, label}) => {

  let buttonClasses = ' font-bold py-2 px-4 rounded bg-custom-purple rounded-3xl'

  switch (variant){

    case 'regular' :
    buttonClasses += ' text-white';
    break;

    case 'outlined' :
    buttonClasses += ' hover:ring hover:border-blue-500 text-custom-purple bg-white border-custom-purple border-2';
    break;

    case 'small' :
    buttonClasses += '';
    break;

    default :
    buttonClasses += '';


  }
  return (
    <div>
        <button className={buttonClasses}>{label}</button>
    </div>
  )
}

export default Buttons