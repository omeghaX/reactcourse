import { useState } from "react"
import {login} from '../../helpers/login'

export const LoginComponent = () => {
    const [inputMail, setInputMail] = useState('')
    const [inputPass, setInputPass] = useState('')

    const onInputEmailchance = ({target}) =>{
        setInputMail(target.value)
        console.log(inputMail)
    }

    const onInputPasschance = ({target}) =>{
        setInputPass(target.value)
    }

    const onSubmitLogin = async(event) =>{
        event.preventDefault();
        

        const response = await login(inputMail, inputPass)

        console.log(response)

    }

  return (
    <div>
        <form onSubmit={onSubmitLogin}>
            <h2>Login</h2>
            
            <input 
                type="email" 
                placeholder="Mail"
                value={inputMail}
                onChange={ onInputEmailchance} />
            <input 
                type="password" 
                placeholder="Password"
                value={inputPass}
                onChange={ onInputPasschance} />

            <button>Login</button>
        </form>

        </div>
  )
}
