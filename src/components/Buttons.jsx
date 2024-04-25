import React from 'react'

const Buttons = ({variant, label}) => {

  let buttonClasses = ' font-bold py-2 px-4 rounded bg-purple-500 rounded-3xl'

  switch (variant){

    case 'regular' :
    buttonClasses += ' text-white';
    break;

    case 'outlined' :
    buttonClasses += ' text-purple-500 bg-white border-purple-500 border-2';
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