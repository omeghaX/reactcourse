import { useState } from "react"
import { AddCategory, GiftGrid } from "./components";
import {LoginComponent} from './components/autentication/LoginComponent';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['DragonBall'])

    const [newCategory, setNewCategory] = useState(''); // Estado para manejar el input

    const [error, setError] = useState(''); // Estado para manejar errores

    const onAddCategory = (newCategory) => {

        const trimmedCategory = newCategory.trim(); // Eliminar espacios al inicio y final
        const normalizedCategory = trimmedCategory.toLowerCase(); // Normalizar a minúsculas


        // Validaciones
        if (trimmedCategory.length === 0) {
            setError('La categoría no puede estar vacía ni contener solo espacios.');
            return;
        }
        if (categories.some(category => category.toLowerCase() === normalizedCategory)) {
            setError('La categoría ya existe.');
            return;
        }

        // Si pasa las validaciones, agregar la categoría
        setCategories([...categories, trimmedCategory]);
        setNewCategory(''); // Limpiar el input
        setError(''); // Limpiar el error
    };

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}

            
            

            <AddCategory
                //setCategories= {setCategories} categories={categories}
                onNewCategory={event => onAddCategory(event)}
            />

            {error && <p style={{ color: 'red' }}>{error}</p>}
            
            <ol>
                {categories.map(category =>
                (
                    <GiftGrid key={category} category={category}/>
                ))
                }
            </ol>
            {/* Gif Item */}
        </>
    )
}