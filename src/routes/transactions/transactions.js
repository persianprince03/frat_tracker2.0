import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import WebHeader from "../../main-components/web_header";

export default function Transactions() {
    return(
        <div>
            <WebHeader/>
                <div style={{margin:"10%", justifyContent:'center'}}>
                <Box>
                    <Button
                        type="navigate"
                        fullwidth="true"
                        variant = "contained">
                        Transaction History
                    </Button>
                    <br/>
                    <Button
                        type="navigate"
                        fullwidth="true"
                        variant = "contained">
                        Add Transaction
                    </Button>
                    <br/>
                    <Button
                        type="navigate"
                        fullwidth="true"
                        variant = "contained">
                        Outstanding Balance
                    </Button>
                </Box>
            </div>
        </div>
    )
}