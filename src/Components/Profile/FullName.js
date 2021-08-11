import React from "react";

const FullName = () => {
    let firstName = prompt("what's your first name?", String);
    let lastName = prompt("what's your last name?", String);
    return (
        <p>
          {firstName} {lastName}
        </p>
 );
};
export default FullName;