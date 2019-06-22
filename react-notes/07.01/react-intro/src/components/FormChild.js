import React from 'react';

function FormChild() {
    return (
        <form>
             First name:<br></br>
            <input type="text" name="firstname"></input><br></br>
             Last name:<br></br>
            <input type="text" name="lastname"></input>
            <br></br>
            <button>submit</button>
        </form>
    )
}

export default FormChild;