import React, { useState, useRef} from "react"
import Search from './search';

export default function SearchList() {
    const inputRef = useRef();
    const [searches, setItem] = useState([]);
    
    function addItem(event) {
        if (event.keyCode === 13) {
            const newId = searches.legnth > 0 ? searches[searches.length - 1].id +1 : 1;
            localStorage.setItem(['searches', JSON.stringify(searches) {
                id: newId,
                title: inputRef.current.value,  
        }]);
        inputRef.current.value="";
    }
 }
    function deleteItem(id) {
        let items =JSON.parse(localStorage.getItem("item"));
        items = items.filter((item) => item.id !== id);
        localStorage.setItem("item", JSON.stringify(items));
        if (items.length === 0) {
          localStorage.removeItem("item");
        }
    }
    
    return(
        <div>
            <ul className="list-group">
                {searches &&(search => <Search key={search.id} item={search} deleteItem={deleteItem} />)}
            </ul>
        </div>
    )
}