import {useState, useEffect} from "react";


export default function Member() {
    const [members, setMembers] = useState('Joe Miner')
    const GetMember = async () => {
        try {

            const response = await fetch('http://localhost:3001/get-members');
            const jsonData = await response.json();

            setMembers(jsonData);
            console.log(members)
        } catch (err) {
            console.error(err.message);
        }
    };
    
    useEffect(() => {GetMember()},[]);

    return (
        <div>
            <h1>Hello world</h1>
            <table className="table mt-5 text-center">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Zeta Number</th>
                    <th>Email</th>
                    <th>Major</th>
                    <th>Status</th>
                    <th>Big Brother</th>
                    <th>Member ID</th>
                </tr>
                </thead>
                <tbody>
                {members.map(members => (
                    <tr key={members.memberID}>
                        <td>{members.fname}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}