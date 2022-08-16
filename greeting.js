const button = document.getElementById("button");
const input = document.getElementById("input");

button.onclick = () => {
    const div = document.createElement("div")
    const deleteButton = document.createElement("button")
    const p = document.createElement('p')
    deleteButton.innerText="delete"
    const changeButton = document.createElement("button")
    changeButton.innerText = "change"
    div.setAttribute("class", "block")
    p.innerText = input.value

    div.append(p)
    div.append(deleteButton, changeButton)
    document.body.append(div)
    deleteButton.onclick = () => {
        p.remove()
    }
    changeButton.onclick = () => {
        const text = prompt()
        p.innerText = text
    }
}








 