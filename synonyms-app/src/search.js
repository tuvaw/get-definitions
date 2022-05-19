import React from "react";

export default function Search(props) {
    console.log(props);
    props.item

    return(
        <li className="list-group-item">
            <h3 onClick={() => {props.search(props.item.title )}}>{ props.item.title }</h3>
            <img src="/delete.png" onClick={() => {props.deleteItem(props.item.id)}}/>
        </li>
    )
} 