import React from "react"

const CustomButton = ({btnText,classes}:{btnText:string,classes:string})=>{
    return (
      <button
        type="submit"
        className={classes}
      >
        {btnText}
      </button>
    );
}

export default CustomButton