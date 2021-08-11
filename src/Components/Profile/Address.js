import React from "react";

const Address = () => {
    let address =prompt("what's your address?", String)
 return (
     <p>
         {address}
     </p>
 );
};
export default Address;