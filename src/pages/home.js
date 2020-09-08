import React from 'react'
import HomeImg from '../img/home.png'
import {Image } from 'react-bootstrap';

export default function home() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Image src="home.png" fluid/>
            <img src={HomeImg} alt='riderz' className="img-fluid"/>
        </div>
    )
}
