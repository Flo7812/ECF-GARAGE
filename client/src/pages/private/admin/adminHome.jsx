import { useEffect, useState } from "react"
import { userServices } from "../../../_services/userServices";

const AdminHome = () => {

    const [users, setUsers] = useState([])

    useEffect(()=>{
        userServices.getUsers()
        .then(users => {
            const allUsers = users.data.data
            setUsers(allUsers)
            console.log(allUsers);
        })
        .catch(e=> console.log(e))
    }, [])

    return (
        <main>
            {/* <h1>AdminHome</h1> */}
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Adresse</th>
                        <th>Date de naissance</th>
                        <th>Role</th>
                        <th>Cree le</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.last_name}</td>
                                <td>{user.first_name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>{user.date_of_birth}</td>
                                <td>{user.role}</td>
                                <td>{user.createdAt}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </main>
    );
};

export default AdminHome;