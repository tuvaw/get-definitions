import $ from "jquery"
import React, { useEffect, useState } from 'react';

export default function Definitions(props) {
    const [definitions, setDefinition] = useState([]);
        
        function getDefinition() {
            $.ajax({
                url: "https://api.dictionaryapi.dev/api/v2/entries/en/" + props.searchString,
                method: 'GET',
                dataType: "JSON",
            }).done(function(data) {
                setDefinition(data[0].meanings[0].definitions[0].definition);
            });
        }

        useEffect(function() {
            getDefinition();
        }, [props.searchString]);

        return (
            <div>
                <p id="def">{definitions}</p>
            </div>
        )
};