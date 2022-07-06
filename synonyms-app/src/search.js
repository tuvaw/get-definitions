import React from 'react';

export default function Search(props) {

    return (
    <li className="list-group-item">
        <p id="title">{ props.item.title }</p>
        <img src="/delete.png" id="delete" alt="delete" onClick={() => {props.deleteItem(props.item.id)}}/>
    </li>   
)}