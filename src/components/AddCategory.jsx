import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState()
    

    const onInputchance = ({target}) =>{
        setInputValue(target.value)
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        

        onNewCategory(inputValue.trim())
       

    }

    return (
        <form onSubmit={onSubmit}>
            {/* Mostrar error si lo hay */}
            
            <input 
                type="text" 
                placeholder="Buscar gif"
                value={inputValue}
                onChange={ onInputchance}
                />

        </form>
    )
}