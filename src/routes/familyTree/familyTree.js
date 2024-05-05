import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import WebHeader from "../../main-components/web_header";
import { useEffect, useState } from "react";

function Flow() {
    const [family, setFamily] = useState('');
    const [member, setMember] = useState([]);
    const [pin, setPin] = useState('None');

    const findMember = async (e) => {
        // e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3002/get-members/${pin}`);
            if (!response.ok) {
                throw new Error('Failed to fetch member data');
            }
            const jsonData = await response.json();
            setMember(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        // Only fetch data when `pin` changes
        if (pin !== 'None') {
            findMember();
        }
    }, [pin]);

    // const nodes = member.map(node => {
    //     return {
    //         id: node.memberid.toString(),
    //         type: 'default',
    //         position: { x: node.x, y: node.y },
    //         data: { label: node.fname }
    //     };
    // });

    return (
        <div style={{ height: '100%' }}>
            <WebHeader />
            <h1>Family Tree</h1>
            <form onSubmit={findMember}>
                <input
                    type='number'
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                />
                <button>Show Tree</button>
            </form>
            <div style={{ height: 500 }}>
                <ReactFlow elements={nodes}>
                    <Background />
                    <Controls />
                </ReactFlow>
            </div>
        </div>
    );
}

export default Flow;
