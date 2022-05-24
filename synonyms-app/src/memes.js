import $ from "jquery"
import React, { useRef, useState } from 'react';
import App from "./App";

export default function Memes() {
    const inputRef = useRef()
    return (
        <div>
            <img src="https://i0.wp.com/solsblogg.wordpress.com/files/2009/08/ko.jpg"/>
        </div>
    )
        
    function addMemes(event) {
        event.preventDefault();
        if (event.keyCode === 13){ 
            console.log(inputRef);
            $.ajax({
                url: "https://api.giphy.com/v1/gifs/search?api_key=iKWDKWDKsyoOtFEfkb8EzQFO7QuP2LPr&q=" + inputRef,
                method: 'GET',
                dataType: "JSON"           
            }).done(function(props) {
                return (
                    <div>
                        <h2>{ props.item.title }</h2>
                        <li className="list-group-item">
                            <ul>{Memes}</ul>
                        </li>
                    </div>
                )
            });
        }
    }
};
