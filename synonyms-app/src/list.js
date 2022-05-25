import React, { useState, useEffect } from 'react';

export default function List(props) {
    const [searches, setItem] = useState([]);

    useEffect(function(){
        let searches = localStorage.getItem(JSON.parse(searches));
        for (var i = 0; i > searches.length; i++){
            let search = searches[i];
        }
    })
 
    return (
    <li className ="list-group-item">
        { props.search.title }
    </li>   
)}