// import React, {useState} from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
//
//
//
// const AddMember = () => {
//     // const [email, setEmail ] = React.useState('')
//     // const [fname, setFname] = useState('')
//     // const [lname, setLname] =useState('')
//     // const [bday, setBday] = useState('')
//
//     return (
//         <>
//             <form>
//             {/*<TextField type = "text" value={fname}/>*/}
//             <Button>add</Button>
//             </form>
//         </>
//     )
//
// }
//
// export default AddMember;

import React, { useState } from 'react';
import Button from "@mui/material/Button";

const Example = () => {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(10000000);

    return (
        <div>
            <p>You clicked  times</p>
            <button >
                Click me
            </button>
        </div>
    );
}

export default Example