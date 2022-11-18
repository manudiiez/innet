import { createContext, useContext, useEffect, useReducer } from "react";
import io from 'socket.io-client'
import Swal from 'sweetalert2'


const socket = io('http://localhost:8800')


export const ToastContext = createContext();

export const useToast = () => {
    const context = useContext(ToastContext)
    return context
}

export const ToastContextProvider = ({ children }) => {

    const createAlert = (text) => {
        socket.emit('alert', text)
    }

    const showToast = (text) => {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: text,
            showConfirmButton: true,
        })
    }

    useEffect(() => {
        socket.on('alert', (text) => showToast(text))
    }, [])

    return (
        <ToastContext.Provider
            value={{
                createAlert
            }}
        >
            {children}
        </ToastContext.Provider >
    );
};






