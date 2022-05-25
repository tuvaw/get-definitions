import $ from "jquery"
import React, { useEffect, useState } from 'react';

export default function Synonyms(props) {
    const [synonyms, setSynonyms] = useState([]);
        
        function getSynonyms() {
            $.ajax({
                url: "https://languagetools.p.rapidapi.com/synonyms/" + props.searchString,
                method: 'GET',
                dataType: "JSON",
                headers: {
                    'X-RapidAPI-Host': 'languagetools.p.rapidapi.com',
                    'X-RapidAPI-Key': 'ecd0c39411mshf8a5e424943fe73p10992fjsn3ad2d3b2759b'
                }
            }).done(function(data) {
                setSynonyms(data.data);
            });
        }

        useEffect(function() {
            getSynonyms();
        }, [props.searchString]);

        return (
            <div>
                {synonyms.map(synonym => <ul className="list-group">{synonym.synonyms.original.url}</ul>)}
            </div>
        )
};