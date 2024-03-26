import React from "react";

function LoginSection({isAnimating}){

    return(
        <section className= {`login-section p-4 px-4 rounded-4 ${isAnimating ? 'animate': ''}`}>
            <h3 className="text-center mt-4 mb-4 fs-2">Inicio de Sesión</h3>
            <form>
                <div className="py-3 input-group">
                    <div className="form-floating">
                        <input type="text" className="form-control" name="username" id="username" placeholder="Nombre de Usuario" required></input>
                        <label htmlFor="username" className="form-label">Nombre de Usuario</label>
                    </div>
                    <span className="input-group-text"><i className="fa-solid fa-user"></i></span>
                </div>
                <div className="py-3 input-group">
                    <div className="form-floating">
                        <input type="password" className="form-control" name="password" id="password" placeholder="Contraseña" required></input>
                        <label htmlFor="password" className="form-label">Contraseña</label>
                    </div>
                    <span className="input-group-text"><i className="fa-solid fa-lock"></i></span>
                </div>
                <div className="text-center py-3">
                    <button className="btn submit-login btn-warning px-5 py-2 fw-semibold">Iniciar Sesión</button>
                </div>
            </form>
        </section>
    )
}

export default LoginSection