//import $ from "jquery"

/*export default function Synonyms() {
    const inputRef = useRef();
        
        function addSynonym(event) {
            event.preventDefault();
            if (event.keyCode === 13){
                $.ajax({
                    url: "synonymord.se/api/?q=" + inputRef,
                    method: 'GET',
                    dataType: "JSON"           
                }).done(function(data, props) {
                    for (let i = 0; i < data.Search.length; i++) {
                        return (
                            <div>
                                <h2>{ props.item.title }</h2>
                                <li className="list-group-item">
                                    <ul>${data.Search[i].synonyms}</ul>
                                </li>
                            </div>
                        )
                    }
                });
            }
    }

};*/
