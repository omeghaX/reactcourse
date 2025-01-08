
import { useState, useEffect } from 'react'

import { GifItem } from './GifItem';
import {getGifts} from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GiftGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category)
    console.log(images, isLoading)
    {/*
    
*/}
    
    return(
        <>
        
            <h3>{ category }</h3>
            {
                isLoading
                ? (<h2 >Cargando...</h2>)
                :
                (<div className='card-grid'>
                    {images.map(item =>  (
                        <GifItem image={item} key={item.id}/>
                    ))}
                    </div>)
            }
            
            
           
           

        </>
    )
}