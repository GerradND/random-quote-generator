import { useState } from 'react';

// function Header({ title }) {
//     return <h1>{title ? title : 'Default title'}</h1>;
// }

export default function DropdownComponent() {
    const choices = Array.from(Array(6).keys()).map(x => x + 1);
    const [num, setNum] = useState(0);

    const handleChange = (event) => {
        setNum(event.target.value)
    }

    return (
        <div>
            <select value={num} onChange={handleChange}>
                {choices.map((value) => (
                    <option key={value}>{value}</option>
                ))}
            </select>
        </div>
    );
}