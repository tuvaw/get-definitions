import $ from "jquery"
import { useRef } from 'react';

export default function Synonyms(event) {
    const inputRef = useRef();
    inputRef.on("keyup", function() {

        event.preventDefault();
        if (event.keyCode === 13){ 
            $.ajax({
                url: "synonymord.se/api/?q=" + inputRef,
                method: 'GET',
                dataType: "JSON"           
            }).done(function(data) {
                for (let i = 0; i < data.Search.length; i++) {
                    // Lägg till i sökresultat
                }
            });
        }
    }) 
};