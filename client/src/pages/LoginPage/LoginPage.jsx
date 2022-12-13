import { useState, useEffect, useContext } from "react"
import axios from 'axios'
import { Link } from "react-router-dom";
import styles from '../RegisterPage/RegisterPage.module.scss' // from RegisterPage
import UserContext from "../../UserContext";

const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { user, setUser } = useContext(UserContext)

    // useEffect(() => {
    //     console.log(email, password)
    // }, [email, password])

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('password', password)
        console.log('email', email)

        loginUser()
    }

    const loginUser = async () => {
        const user = {
            email,
            password
        }
        try {
            const response = await axios.post("http://localhost:5100/api/users/login", user)
            // setUser(response.data)
            setUser(response.data)
            console.log(response.data)

            if (response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data))
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form className={styles.form} onSubmit={onSubmit}>
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
export default LoginPage