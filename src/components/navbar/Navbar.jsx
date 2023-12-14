import React, { useEffect, useState } from 'react'
import "./navbar.scss"
import { Link, useNavigate } from 'react-router-dom';


export default function Navbar() {
    const [selectedOption, setSelectedOption] = useState('name');
    const [text, setText] = useState();
    const navigate = useNavigate();

    const handleOnSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        console.log(event.target.value);
    };

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
        setText(value);
    }

    const handleSearch = () => {
        // console.log(text);
        navigate(`/search?field=${selectedOption}&value=${text}`);
    };

    return (
        <div id='navbar_component'>
            <div className="brand-logo">
                <img src="/vite.svg" alt="Brand Logo" />
                <h3>Course Cart</h3>
            </div>
            <div className="search-bar" value="">
                <select onChange={handleOnSelectChange} value={selectedOption} name="select" id="select">
                    <option value="name">Coures Name</option>
                    <option value="instructor">Instructor</option>
                </select>
                <input value={text} onChange={handleOnChange} type="text" placeholder="Search" />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/student_portal/1">Student Portal</Link>
            </div>
        </div>
    )
}
