import {useEffect } from "react";

const Main = () => {
    
    useEffect(() => {
        const li1 = document.getElementById('li1')
        const list_frame = document.getElementById('list_frame')
        const li1_menu = (
            <article id="li1_menu">
                <p>{li1.textContent}</p>
            </article>
        )
        
        const showMenu = () => {list_frame.append(li1_menu)}
        li1.addEventListener('click', showMenu)
    })

    return (
        <div>
            <ul id="list_frame">
                <li id="li1">1st
                    <button id="edit" onClick={console.log("Clicked Edit")}>Edit</button>
                    <button id="remove" onClick={console.log("Clicked Remove")}>Remove</button>
                </li>
                <li id="li2">2nd
                    <button id="edit" onClick={console.log("Clicked Edit")}>Edit</button>
                    <button id="remove" onClick={console.log("Clicked Remove")}>Remove</button>
                </li>
                <li id="li3">3rd
                    <button id="edit" onClick={console.log("Clicked Edit")}>Edit</button>
                    <button id="remove" onClick={console.log("Clicked Remove")}>Remove</button>
                </li>
                <li id="li4">4th
                    <button id="edit" onClick={console.log("Clicked Edit")}>Edit</button>
                    <button id="remove" onClick={console.log("Clicked Remove")}>Remove</button>
                </li>
                <li id="li5">5th
                    <button id="edit" onClick={console.log("Clicked Edit")}>Edit</button>
                    <button id="remove" onClick={console.log("Clicked Remove")}>Remove</button>
                </li>
            </ul>
        </div>
    )
    
}
export {Main}