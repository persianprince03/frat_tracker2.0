import {useState} from "react";

const TestCase = () => {
    const [family,setFamily] = useState('');
    const [member, setMember] = useState('')
    const [pin, setPin] = useState('None')
    const FindMember = async e => {
        try{
            // e.preventDefault()
            // console.log(pin)
            const response = await fetch(`http://localhost:3002/get-members/1565`)

            const jsonData = await response.json()
            console.log(jsonData)
            setMember(jsonData)

        }catch (err) {
            console.error(err.message)
        }

    }
 FindMember(1565)

}

export default function test(){
    return(
        <div>
            <TestCase />
        </div>
    )
}
