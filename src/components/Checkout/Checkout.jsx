import { useRef } from "react"
import { useCarritoContext } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import { createOrdenCompra, getOrdenCompra, getProduct, updateProduct } from "../../firebase/firebase"
import { toast } from "react-toastify"

export const Checkout = () => {
    const dataForm = useRef()
    let navigate = useNavigate()
    const { carrito, totalPrice, emptyCart } = useCarritoContext()


    const email = useRef()
    const email2 = useRef()

    const consultarForm = (e) => {
        e.preventDefault()

        const datosFormulario = new FormData(dataForm.current)
        const cliente = Object.fromEntries(datosFormulario)

        if (cliente.email !== cliente.email2) {
            toast.warning(`ATENCION! LOS MAILS DEBEN COINCIDIR PARA PODER SEGUIR CON LA COMPRA`, {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            const aux = [...carrito]

            aux.forEach(prodCarrito => {
                getProduct(prodCarrito.id).then(prodBDD => {
                    if (prodBDD.stock >= prodCarrito.quantity) {
                        prodBDD.stock -= prodCarrito.quantity
                        updateProduct(prodBDD.id, prodBDD)
                    } else {
                        toast("ATENCIÓN, EL STOCK DISPONIBLE DEL PRODUCTO ES MENOR A LA CANTIDAD QUE DESEA COMPRAR", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    }
                })
            })

            const auxDos = aux.map(prod => ({ id: prod.id, quantity: prod.quantity, precio: prod.precio }));

            createOrdenCompra(cliente, totalPrice(), auxDos, new Date().toLocaleString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
                .then(ordenCompra => {
    
                    toast(` :) HOLA, MUCHAS GRACIAS POR REALIZAR TU COMPRA CON WOOBA LOOBA DUB DUB STORE, su ID de compra es ${ordenCompra.id} por un total de ${totalPrice()}, en breve nos contactaremos para el envio`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
    
    
                    emptyCart()
                    e.target.reset()
                    navigate("/")
    
                })
                .catch(error => {
                    console.error(error)
                })
        }
  
    }


    return (

        <>
            {
                carrito.length === 0 ?
                    <>
                        <h2>¡ATENCIÓN! Para finalizar la compra debe tener productos en el carrito</h2>
                        <Link className="nav-link" to='/'><button className="btn btn-primary">CONTINUAR COMPRA</button></Link>
                    </>
                    :

                    <>
                        <div className="container divForm">
                            <form onSubmit={consultarForm} ref={dataForm}>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">NOMBRE/S Y APELLIDO/S </label>
                                    <input type="text" className="form-control" name="nombre" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">E-MAIL</label>
                                    <input type="email" className="form-control" name="email" required ref={email} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">REPETIR E-MAIL</label>
                                    <input type="email" className="form-control" name="email2" required ref={email2} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="dni" className="form-label">DNI</label>
                                    <input type="number" className="form-control" name="dni" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="celular" className="form-label">NUMERO TELEFONICO</label>
                                    <input type="number" className="form-control" name="celular" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">DIRECCIÓN</label>
                                    <input type="text" className="form-control" name="direccion" required />
                                </div>

                                <button type="submit" className="btn btn-primary"> FINALIZAR COMPRA </button>
                            </form>

                        </div>
                    </>
            }
        </>

    )
}
