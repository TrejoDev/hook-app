import { useEffect } from "react";
import { useForm } from "../hook/useForm";



export const FormWhitCustomHook = () => {

    const { formState, onInputChange, username, email, password, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    }) 

    //const { username, email, password } = formState;  //Si esparcimos (...formState) enviado en el objeto de useForm(), podemos desestructurara directamente y ahorrarnos esta linea.
    
    

  return (
    <>
        <h1>Formulario con Custom Hook</h1>
        <hr></hr>

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />
        <input 
            type="email"
            className="form-control mt-2"
            placeholder="fernando@google.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />
        <input 
            type="password"
            className="form-control mt-2"
            placeholder="Contrasena"
            name="password"
            value={ password }
            onChange={ onInputChange }
        />
        <button className="btn btn-primary mt-2" onClick={ onResetForm } > Borrar </button>

    </>
  )
}
