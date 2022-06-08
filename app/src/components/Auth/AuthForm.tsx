import React from 'react'
import { useState, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import AuthContext from '../../store/AuthContext'
// import Errors from '../Errors/Errors'


const AuthForm = () => {
    const navigate = useNavigate()
    const usernameRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)

    const authContext = useContext(AuthContext)

    const [loggingIn, setLoggingIn] = useState(true)
    const [errors, setErrors] = useState({})

    const switchModeHandler = () => {
        setLoggingIn((prevState) => !prevState)
        setErrors({})
    }

    const endpoint = loggingIn ? '/api/signin' : '/api/signup'

    const submitHandler = async (event: { preventDefault: () => void }) {
        event.preventDefault()
        setErrors({})

        const user
    }
}

export default AuthForm;