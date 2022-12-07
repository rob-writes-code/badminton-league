import { useState, useEffect } from "react"
import axios from 'axios'
import styles from './RegisterPage.module.scss'
import { Link } from "react-router-dom";

const RegisterPage = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // useEffect(() => {
    //     console.log(username)
    // }, [username])
     

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('username', username)
        console.log('password', password)
        console.log('email', email)

        createUser()
    }

    const createUser = async () => {
        const user = {
            username,
            email,
            password
        }
        const response = await axios.post("http://localhost:5100/api/users", user)
        console.log(response)
    }

    return (
        <div>
            <form className={styles.form} onSubmit={onSubmit}>
                <label htmlFor="username">Username:</label>
                <input className={styles.form__input} onChange={onChangeUsername} value={username} id='username' name="username" type="text" placeholder='username' />
                <label htmlFor="email">Email:</label>
                <input className={styles.form__input} onChange={onChangeEmail} value={email} id='email' name="email" type="email" placeholder='email' />
                <label htmlFor="password">Password:</label>
                <input className={styles.form__input} onChange={onChangePassword} value={password} id='password' name='password' type="password" placeholder='password' />
                <button className={styles.form__input}>Submit</button>
            </form>
            <Link to={'/'}>Back to Homepage</Link>
        </div>
    )
}

export default RegisterPage