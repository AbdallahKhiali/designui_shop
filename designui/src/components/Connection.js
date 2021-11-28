import React , {useState} from 'react'
import "../style/connection.css"
import Login from "../components/Login"
import Signup from "../components/Signup"
function Connection() {
    const [login, setlogin] = useState(false)

    return (
        <div className="connection">
            <div className="connection_bg"/>
            {(login)?<Signup/>:<Login/>}s
        </div>
    )
}

export default Connection
