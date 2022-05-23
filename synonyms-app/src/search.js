import React from "react";

export default function Search(props) {
    localStorage.getItem(props);
    JSON.parse(localStorage.getItem('props'));

    return(
        <li className="list-group-item">
            { props.item.title }
            <img src="/delete.png" onClick={() => {props.deleteItem(props.item.id)}}/>
        </li>
    )
} 