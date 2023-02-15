import { useEffect, useState } from "react";
import { Message } from "./Message";


export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'fernando@google.com'

    })

    const { username, email } = formState;

    const onInputChange = ( { target } ) => {

        const { name, value } = target;
       
        setFormState({
            ...formState,
            [name]: value //Establesco a la propiedad name, los nuevos value.
        })

    }

    useEffect( ()=> {
        //console.log('useEffect called');
    }, [] ); // Cuando ponemos como dependencia un arreglo vacio [] establecemos q solo se llama useEffect cuando se renderiza el componente por primera vez.
    
    useEffect( ()=> {
        //console.log('formStated changed');
    }, [ formState ] ); 
    
    useEffect( ()=> {
        //console.log('email changed');
    }, [ email ] ); 

  return (
    <>
        <h1>Simple Form</h1>
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

        { 
            ( username === 'strider2' && <Message /> ) 
        }
    </>
  )
}
