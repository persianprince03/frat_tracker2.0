// import React,{ useState } from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";
// import Link from "@mui/material/Link";
// // import * as React from "react";
// import Web_Header from "../main-components/web_header";
// import Input from '@mui/material/Input'
//
// const GetAddMember = () => {
//     const [email, setEmail ] = React.useState('')
//     const [fname, setFname] = useState(0)
//     const [lname, setLname] =useState(0)
//     const [bday, setBday] = useState(0)
//     const onSubmitForm = async e => {
//         e.preventDefault();
//         const response = await fetch("http://localhost:3001/add-member", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({email})
//         }).then( (res) => {
//             console.log(res);
//             }
//         ).catch( (error) => {
//             console.log(error);
//             }
//         );
//         //
//         //     window.location = "/add_member";
//         // } catch (err) {
//         //     console.error(err.message);
//         // }
//     };
//     return(
//         <>
//             <Web_Header/>
//             <div>
//
//             {/*    link to the backend*/}
//         <form>
//             <Box component="form" noValidate sx={{ mt: 1 }}>
//                 <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     id="first Name"
//                     label="First Name"
//                     name="First Name"
//                     autoComplete="First Name"
//                     autoFocus
//                     value={fname}
//                     onChange={e=> setFname(e.target.value)}
//
//
//                 />
//                 <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     name="lastName"
//                     label="Last Name"
//                     type="Last Name"
//                     id="lastName"
//                     autoComplete="Last Name"
//                     value={lname}
//                     onChange={e=> setLname(e.target.value)}
//                 {/*/>*/}
//                 <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     id="email"
//                     label="Email Address"
//                     name="email"
//                     autoComplete="email"
//                     value={email}
//                     onChange={e=> setEmail(e.target.value)}
//                 />
//                 <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     id="bday"
//                     label="Birthday"
//                     name="bday"
//                     type="date"
//                     autoComplete="Birthday"
//                     focused
//                     value={bday}
//                     onChange={e=> setBday(e.target.value)}
//                 />
//                 <TextField
//                 <Button>
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                     sx={{ mt: 3, mb: 2 }}
//                 >
//                     Add Member
//                 </Button>
//
//             </Box>
//         </form>
//
//             </div>
//         </>
//     )
// }
//
// export default AddMember;