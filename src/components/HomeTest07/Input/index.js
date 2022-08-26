import { useState } from "react";

const Input = ({ list, item, onChange, name }) => {
    const [error, setError] = useState('')

    const onLocalChange = (ev) => {
        const value = ev.target.value
        onChange(ev)

        const item = list.find((item) => {
            return item[name] === value
        })
        setError(item ? 'Trung' : 'Khung')
        
    }

    return (
        <div class="mb-3">
            <label className="form-label">{name}</label>
            <input className="form-control" type="text" name={name} onChange={onLocalChange} value={item[name]} />
            <div>{error}</div>
        </div>
    );
};

export default Input;
