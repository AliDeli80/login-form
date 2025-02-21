import React, { useState } from "react";
import "./style.css"
import useFormFileds from "./useFormFileds";

export default function Form() {

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    const {fileds, handleChange} = useFormFileds({
        email: '',
        password: ''
    })

    return (
        <form>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email"
                    name="email"
                    className="form-control"
                    value={fileds.email}
                    onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password"
                    name="password"
                    className="form-control"
                    value={fileds.password}
                    onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-info">Submit</button>
        </form>
    )
}