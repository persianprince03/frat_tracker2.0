import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import WebHeader from "../../main-components/web_header";

const AddMember = () => {
    const [email, setEmail ] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [bday, setBday] = useState('')

    const SubmitForm = async e => {
        // console.log(res)
        // e.preventDefault();
        // console.log(body)
        const body = {email, fname, lname, bday}
        try {
            const response = await fetch("http://localhost:3002/add-member", {// eslint-disable-next-line
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
        } catch (err) {
            console.error(err.message)
        }
    };
        //
        //     window.location = "/add_member";
        // } catch (err) {
        //     console.error(err.message);
        // }

    return(
        <div>
            <WebHeader/>
            <div>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="first Name"
                            label="First Name"
                            name="First Name"
                            autoComplete="First Name"
                            autoFocus
                            value={fname}
                            onChange={e=> setFname(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="lastName"
                            label="Last Name"
                            type="Last Name"
                            id="lastName"
                            autoComplete="Last Name"
                            value={lname}
                            onChange={e=> setLname(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={e=> setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="bday"
                            label="Birthday"
                            name="bday"
                            type="date"
                            autoComplete="Birthday"
                            focused
                            value={bday}
                            onChange={e=> setBday(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            onClick={() => SubmitForm()}
                        >Submit</Button>
                    </Box>
            </div>
        </div>
    )
}

export default AddMember;