import { useState } from "react"

export default function Authenticate({ token }){

    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    async function handleClick(){
        console.log(token)
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate/', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const result = await response.json()
            setSuccess(result.message)
        } catch (error) {
            setError(error.message)
        }
    }

    return <>
        <h2>Authenticate</h2>
        {
            error ? <p> { error } </p> : null
        }
        <button onClick={ handleClick }>Authenticate Token</button>
        {
            success ? <p> { success } </p> : null
        }
    </>
}