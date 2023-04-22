import React from "react"
import { useRef } from "react"


export const Checkout = () => {
    const dataForm = useRef()
    const consultarForm = (e) => { 
        e.preventDefault()
        const datosFormulario = new FormData(dataForm.current)
        console.log(datosFormulario.get('nombre'))
        const cliente = Object.fromEntries(datosFormulario)
        console.log(cliente)
        e.target.reset()
    }
    return (
        <div className="container divForm">
            <form onSubmit={consultarForm} ref={dataForm}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">NOMBRE/S Y APELLIDO/S </label>
                    <input type="text" className="form-control" name="nombre" required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-MAIL</label>
                    <input type="email" className="form-control" name="email" />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">REPETIR E-MAIL</label>
                    <input type="email" className="form-control" name="email2" />
                </div>

                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" />
                </div>

                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">NUMERO TELEFONICO</label>
                    <input type="number" className="form-control" name="celular" />
                </div>

                <div className="mb-3">
                    <label htmlFor="" className="form-label">DIRECCIÓN</label>
                    <input type="text" className="form-control" name="direccion" />
                </div>

                <button type="submit" className="btn btn-primary"> FINALIZAR COMPRA </button>
            </form>

        </div>
    )
}
