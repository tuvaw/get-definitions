import React, { useEffect, useState } from "react"
import Search from './search';

export default function SearchList(props) {
    const [searches, setSearches] = useState([]);

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
            const newId = searches.length > 0 ? searches[searches.length - 1].id + 1 : 1;
            searches.push({
                id: newId,
                title: props.searchString
        })
        localStorage.setItem('searches', JSON.stringify(searches));
        setSearches(searches);
        }
    }
    function deleteItem(id){
        let searches = JSON.parse(localStorage.getItem("searches"));
        let filtered = searches.filter(search => search.id !== id);
        localStorage.setItem("searches", JSON.stringify(filtered));
        setSearches(searches);
        window.location.reload()
    }

    useEffect(function() {
        let list = getList();
        setSearches(list);
        saveItem();
    }, [props.searchString]);
    
    return(
        <div>
            <ul className="list-group">
                {searches.map (search => <Search key={search.id} item={search} deleteItem={deleteItem}/>)}
            </ul>
        </div>
    )
}