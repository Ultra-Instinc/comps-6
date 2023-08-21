import classname from "classnames";
// import PropTypes from 'prop-types';


const Button = ({
    children,
    hover,
    primary,
    secondary,
    success,
    warning,
    shadow,
    danger,
    outline,
    rounded,
    ...rest  // has any props sent and dealt with >> then we pass {rest} to our child button
}) => {       // to access any className sent we access it with rest.classname >>then we pass to the className function below
const cn=rest.className  // mb-5
let restFields={...rest}
delete restFields[ 'className' ]
    ///>>>>>>>>>>>>>>>>>>using standard way to assign styles of props

    // let baseClassName='px-3 py-1.5 border'  // the base styles shared across all props
    // if(primary){             //when primary passed as a prop
    //     baseClassName +='bg-green-500 border-green-600 text-white' //adding custom styles to primary
    // }else if(secondary){ //And so on 
    //     baseClassName +='bg-gray-500 border-gray-600 text-white'
        //
        // Repeat for every single prop
        //
    //}

    //>>>>>>>>>>>>>>>>>>>Now we use classNames Library
const classes=classname( cn , ' m-3 flex items-center px-3 py-1.5 border', {
    'border-blue-700 bg-blue-400 text-gray-200':primary,
    'border-gray-900 bg-gray-800 text-gray-200':secondary,
    'border-green-700 bg-green-400 text-gray-200':success,
    'border-yellow-700 bg-yellow-400 text-gray-200':warning&&!outline,
    'border-red-700 bg-red-400 text-gray-200':danger,
    'rounded-full':rounded,
    'hover:scale-105 duration-500':hover,
    'bg-white':outline,
    'text-blue-700':primary&&outline,
    'shadow-lg shadow-blue-500':primary&&shadow,
    'shadow-lg shadow-gray-800':secondary&&shadow,
    'shadow-lg shadow-green-500':success&&shadow,
    'shadow-lg shadow-yellow-500':warning&&shadow,
    'shadow-lg shadow-red-500':danger&&shadow,
    'text-gray-700':secondary&&outline,
    'text-green-700':success&&outline,
    'text-yellow-500':warning&&outline,
    'text-red-700':danger&&outline
})
    // >>>>>>>>>>>>>>>>>>>>>>> a way to validate checking only one of the props (primary,secondary,.....) 
    // if (primary && secondary){
    //     throw new Error('only one of primary and secondary should be applied')
    // }else if(primary && success){
    //     throw new Error('only one of primary and succes should be applied')
    // }else if (){

    // }

    //>>>>>>>>>>>>>>>>>>>>>>>> now we use library to do the same job with less code to write (prop-types)

    //propTypes custom validator to make sure only 1 of the props is being passed
    



    return ( <button className={classes} {...restFields} >{children}</button> );
}

Button.propTypes ={
    checkVariationValue: ({primary,secondary,success,warning,danger})=>{
        const count= 
            Number(!!primary) +   // Number(!!true)= Number(true)=1    ,    Number(!!undefined)= Number(false)=0 
            Number(!!secondary) + 
            Number(!!success) +
            Number(!!warning) + 
            Number(!!danger);
        if (count>1){             // so we check if count >1  then more than one prop is passed
            return new Error( `Only one of (primary,secondary,success,warning,danger) can be true` )
        }
    }
}


 
export default Button;