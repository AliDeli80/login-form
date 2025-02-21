import React, { useState } from "react";

export default function useFormFileds(init) {
    const [fileds, setFileds] = useState(init)

    function handleChange(e) {
        const { target } = e;
        setFileds({
            ...fileds,
            [target.name]: target.value
        })
    }

    return { fileds, handleChange }
}