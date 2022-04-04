import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const {user_id} = useParams();

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://localhost:80/crud-api/?user_id=${user_id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });
   // console.log(JSON.stringify(formData));

    const handleChange = (event) => {
        setFormData(prevInputs => {
            return {
                ...prevInputs,
                [event.target.name]: event.target.value
            }
        })
        //console.log(formData);
    }
    const handleSubmit = (event) => {
        event.preventDefault();


        axios.put(`http://localhost:80/crud-api/?user_id=${user_id}`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(response){
            console.log(formData);
            console.log(response);
            //navigate('/');
        });
        
    }
    return (
        <div>
            <h1>Edit user</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Name: </label>
                            </th>
                            <td>
                                <input value={formData.firstName} type="text" name="firstName" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Last Name: </label>
                            </th>
                            <td>
                                <input value={formData.lastName} type="text" name="lastName" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Email: </label>
                            </th>
                            <td> 
                                <input value={formData.email} type="text" name="email" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align ="right">
                                <button>Save</button>
                            </td>
                        </tr>
                    </tbody>
                    
                </table>
            </form>
            {formData.firstName}
        </div>
    )
}