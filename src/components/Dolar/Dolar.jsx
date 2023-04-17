import React, { useEffect } from 'react'
import { useState } from 'react'

export const Dolar = () => {
    const [dolar, setDolar] = useState([])

    useEffect(() => {
        // se puede controlar los periodos de consulta con setInterval
            fetch("https://criptoya.com/api/dolar")
                .then(response => response.json())
                .then(dolar => {
                    console.log(dolar)
                    setDolar(dolar) // definir que el set sea igual a dolar
                })

    }, [])

    return (
        <div>
            <p>Solidario: {dolar.solidario}</p>
            <p>Blue: {dolar.blue} </p>
        </div>
    )
}
