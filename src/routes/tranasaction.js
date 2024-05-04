import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Web_Header from "../main-components/web_header";

export default function transactions(){
    return(
        <>
            <Web_Header/>
                <div style={{margin:"10%", justifyContent:'center'}}>
                <Box>
                    <Button
                        type="navigate"
                        fullwidth
                        variant = "contained">
                        Transaction History
                    </Button>
                    <br/>
                    <Button
                        type="navigate"
                        fullwidth
                        variant = "contained">
                        Add Transaction
                    </Button>
                    <br/>
                    <Button
                        type="navigate"
                        fullwidth
                        variant = "contained">
                        Outstanding Balance
                    </Button>
                </Box>
            </div>
        </>
    )
}