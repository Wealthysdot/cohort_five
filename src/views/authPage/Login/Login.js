import React, { useEffect } from "react"
import Button from '../../../components/reusable/Button'
import Input from '../../../components/reusable/Input'

const Login = () => {
    let data = {
        username: '',
        password: ''
    }

    const getData = (key, value) => {
        data[key] = value
    }

    const logData = () => {
        console.log(data)
    }

    useEffect(()=>{
        console.log("Login: i mounted")
        return () => console.log("Login: i unmounted") 
    },[])
   
    return ( 
      <div className="loginContainer">
        <h5>Welcome</h5>
        <Input label= "Username" getData={getData} dataKey="username" icon="email"/>
        <Input label= "Password" getData={getData} dataKey="password" icon="person"/>

        <div className="loginBtn">
            <Button color= 'black' text="login" width="100%" outline= {false} action={logData} key=""/>
        </div>
    </div>
    )
}
export default Login