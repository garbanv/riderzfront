import React from 'react'
import loader from '../img/loader.gif';
export default function Loader() {
    return (
        <div className="text-center">
            <img src={loader} alt="riderz" className="img-fluid"/>
        </div>
    )
}
