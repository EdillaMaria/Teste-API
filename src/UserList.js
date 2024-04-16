import React, {useState, useEffect} from "react";
import axios from "axios";

function UserList(){

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            setUsers(response.data);
            setLoading(false);
        })
        .catch(error =>{
            console.error(error);
            setLoading(false)
        });
    }, []);

    if(loading){
        return <div>Carregando ...</div>
    }

    return(
        <div>
            <h1>Lista de Alunos</h1>
            <ul>
                {users.map(users => (
                   <div>
                   <li key={users.id}> {users.name}</li> 
                   <li key={users.id}> {users.email}</li> 
                   </div>
                ))}

            </ul>
        </div>
    )


}

export default UserList;