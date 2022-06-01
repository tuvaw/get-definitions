import $ from "jquery"
import React, { useEffect, useState } from 'react';

export default function Gifs(props) {
    const [gifs, setGifs] = useState([]);
        
    function getGifs() {
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?api_key=iKWDKWDKsyoOtFEfkb8EzQFO7QuP2LPr&limit=1&q=" + props.searchString,
            method: 'GET',
            dataType: "JSON"     
        }).done(function(data) {
            setGifs(data.data);
        });
    }

    useEffect(function() {
        getGifs();
    }, [props.searchString]);

    return (
        <div>
            {gifs.map(gif => <img src={gif.images.original.url} class="gif" alt='GIF' width={250} height={300} /> )}
        </div>
    )
};