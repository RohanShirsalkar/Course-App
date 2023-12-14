import React from 'react'
import "./footer.scss"
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div id="footer_component">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="/vite.svg" alt="Footer Logo" />
                    <h3>Course Cart</h3>
                </div>
                <div className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to="/student_portal/1">Student Portal</Link>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 Course. All rights reserved.</p>
            </div>
        </div>
    )
}
