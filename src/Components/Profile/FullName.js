import React from "react";

const FullName = () => {
    let firstName = "First name";
    let lastName = "Last name";
    return (
        <p style={{fontSize: '3em', color: '#251472', fontWeight: 'bold'}}>
          {firstName} {lastName}
        </p>
 );
};
export default FullName;