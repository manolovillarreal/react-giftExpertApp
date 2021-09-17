import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    // const [images, setImages] = useState([]);
    const { data:img, loading} = useFetchGifs(category);

    return (
        <>
        <h3 className="animate__animated animate__fadeIn"> {category} </h3>
        {loading && <p className="card animate__animated animate__flash">Loading</p> }
        <div className="card-grid">           
                {
                    img.map((img) =>(
                        <GifGridItem
                            key={img.id} 
                            {...img}
                        />
                    ))
                }
        </div>
        </>
    );
}
