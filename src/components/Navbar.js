import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <h1>Horizon</h1>
            <div>
                <Link to="#">About</Link>
                <Link to="#">Team</Link>
                <Link to="https://youtu.be/yEy-2Nw_Bh4" target="_blank">Promo</Link>
            </div>
        </nav>
    )
}
