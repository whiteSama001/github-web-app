import React from 'react'

const Buttons = ({variant, label, onClick}) => {



  let buttonClasses = ' font-bold py-2 px-4 rounded bg-custom-purple rounded-3xl'

  switch (variant){

    case 'regular' :
    buttonClasses += ' text-white hover:ring hover:border-blue-500';
    break;

    case 'outlined' :
    buttonClasses += ' hover:ring hover:border-blue-500 text-custom-purple bg-white border-custom-purple border-2';
    break;

    case 'small' :
    buttonClasses += '';
    break;

    case 'delete' :
    buttonClasses += ' bg-red-600 text-white text-sm hover:ring hover:border-blue-500';
    break;

    case 'misc' :
    buttonClasses += ' bg-gray-400 text-white text-sm hover:ring hover:border-gray-500 mb-2 ';
    break;

    default :
    buttonClasses += '';



  }
  return (
    <div>
        <button className={buttonClasses} onClick={onClick}>{label}</button>
    </div>
  )
}

export default Buttons