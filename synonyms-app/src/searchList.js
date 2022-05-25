import React, { useEffect, useState } from "react"
import List from './list';

export default function SearchList(props) {
    const [searches, setItem] = useState([]);

    function getList() {
        let searches = localStorage.getItem("searches");
        if (searches == null){
            localStorage.setItem('searches', JSON.stringify([]));
            return [];
        } else {
            return JSON.parse(searches)
        }
    }
    
    function saveItem() {
        let searches = getList()
        if (props.searchString >= "1"){
          searches.push({
            title: props.searchString
        })
        localStorage.setItem('searches', JSON.stringify(searches));
        }
    }
        

    useEffect(function() {
        saveItem();
    }, [props.searchString]);
    
    return(
        <div>
            <ul className="list-group">
                {searches.map (search => <List key={search.title} item={search}/>)}
            </ul>
        </div>
    )
}