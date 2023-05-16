// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHN6RYIze5Zb--_A7xFtb6eRBJfqPS5yQ",
    authDomain: "ecommerce-perez-aldana.firebaseapp.com",
    projectId: "ecommerce-perez-aldana",
    storageBucket: "ecommerce-perez-aldana.appspot.com",
    messagingSenderId: "726496539829",
    appId: "1:726496539829:web:a21790afb07f1a9da8bafc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// funciones para trabajar con firebase
const bdd = getFirestore()

//CRUD PRODUCTOS

export const createProducts = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(bdd, "productos"), {
            categoria: prod.categoria,
            nombre: prod.nombre,
            modelo: prod.modelo,
            precio: prod.precio,
            stock: prod.stock,
            img: prod.img
        })
    })

}

export const getProducts = async () => {
    const prods = await getDocs(collection(bdd, "productos"))
    const items = prods.docs.map(prod => {
        return { ...prod.data(), id: prod.id }
    })
    return items
}

export const getProduct = async (id) => {
    const prod = await getDoc(doc(bdd, "productos", id))
    const item = { ...prod.data(), id: prod.id }
    return item
}

export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd, "productos", id), info)
}

export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "productos", id))
}

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}

export const deleteOrdenCompra = async (id) => {
    await deleteDoc(doc(bdd, "ordenCompra", id))
}