import './main_page.css'
import Button from '@mui/material/Button'
import {useNavigate} from "react-router-dom";
export  default function Main_Page(){
    const navigate = useNavigate();
    return(
        <>
            <div className='background'></div>
            <div>
                <Button
                    onClick={() => navigate('/main/add_member')}
                    variant = "contained"
                    sx={{ mt: 3, mb: 2 }}>
                    Add Member

                </Button>
                <Button
                    onClick={() => navigate('/main/transactions')}
                    variant = "contained"
                    sx ={{mt:3, mb:2}}>
                    Transactions
                </Button>
                <Button
                    onClick={() => navigate('/main/roster')}
                    variant = "contained"
                    sx ={{mt:3, mb:2}}>
                    Roster
                </Button>
                <Button
                    onClick={() => navigate('/main/tree')}
                    variant = "contained"
                    sx ={{mt:3, mb:2}}>
                    Family Tree
                </Button>

            </div>
        </>
        )
}