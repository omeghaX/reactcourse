import {useState, useEffect} from 'react'
import { getGifts } from '../helpers/getGifs';

export const useFetchGifs = ( category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect( ()=> {

         getGifts(category).then( newImages => setImages(newImages))
         setIsLoading(false)
        
    }, [ ] )//con los corchetes vacios, se ejecuta el efecto solo la primera ves que se crea el hook
  return {
    images: images,
    isLoading: isLoading
  }
}
