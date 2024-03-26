import React from "react";

function MainBanner({startAnimation, isAnimating}){

    return(
        <footer className={`main-banner ${isAnimating ? 'animate': ''}`}>
            <section className='top-div rounded-top rounded-end p-5'>
                <h1 className="fw-bold banner-text-main ps-4 pt-2">Técnicas de Pronóstico Cuantitativas</h1>
                <h2 className="fw-lighter mt-3 ps-4">PS / PMS / PMD / PTMAC </h2>
                <button type="button" className="btn btn-outline-light fs-4 ms-4 mt-3" onClick={startAnimation}>Iniciar Sesión</button>
            </section>
            <section className="team-members rounded-start text-end pt-2">
                <h3 className="fw-semibold pe-5 mt-2">Integrantes del Equipo</h3>
                <h4 className="member pe-5 mt-3 fw-light">Daniel Alegría Lino</h4>
                <h4 className="member pe-5 mt-3 fw-light">Abisai Briones Hernández</h4>
                <h4 className="member pe-5 mt-3 fw-light">Elías Eduardo Medina Santiago</h4>
            </section>
        </footer>
    )
}

export default MainBanner 