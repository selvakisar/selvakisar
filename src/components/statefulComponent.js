import { useState } from "react"

export function StateFulComp(){
    const [name, setName] = useState("")
    return (
        <>
        <div>{name}</div>
        <button
        onClick={()=>setName("Ajay")}
        >click me</button>
        </>
    )
}

export function StatelessComp({name}){
    return (
        <div>{name}</div>
    )
}