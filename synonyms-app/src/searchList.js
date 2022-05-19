import React, { useState, useRef} from "react"
import Search from './search';

export default function SearchList() {
    const inputRef = useRef();
    const [searches, setSearch] = useState([])
    
    function addItem(event) {
        const newId = searches.legnth > 0 ? searches[searches.legnth - 1].id +1 : 1;
        setSearch([...searches, {
            id: newId,
            title: inputRef.current.value,
        }])
        inputRef.current.value="";
    }
    function deleteItem(id) {
        setSearch(searches.filter((item) => item.id !== id));
    }
    return(
        <div>
            <ul className="list-group">
                {searches.map(search => <Search key={search.id} item={search} deleteItem={deleteItem} />)}
            </ul>
        </div>
    )
}