import { useState } from 'react'

export default function SignUpForm({ setToken }){
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

   async function handleSubmit(event){
        event.preventDefault()
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
                method: 'POST',
                body: JSON.stringify({ userName, password })
            });
            const result = await response.json()
            setToken(result.token)
        } catch (error) {
            setError(error.message)
        }
        setUserName("")
        setPassword("")
    }

    return <>
        <h2>Sign Up</h2>
        {
            error ? <p>{ error }</p> : null
        }
        <form action="" method="post" onSubmit={handleSubmit}>
            <label htmlFor="user-name">
                <input type="text" name="" id="user-name" placeholder='user-name' value={userName} onChange={(event)=>{
                    setUserName(event.target.value)
                    }}/>
            </label>
            <label htmlFor="password">
                <input type="password" name="password" id="password" placeholder='password' value={password} onChange={(event)=>{
                    setPassword(event.target.value)
                }}/>
            </label>
            <button>Submit</button>
        </form>
    </>
}