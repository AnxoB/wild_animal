function reset(){
    document.getElementById("name").value = ""
    document.getElementById("answer").innerText = ""
}

function check(){
    let name = document.getElementById("name").value
    let answer = document.getElementById("answer")
    if (name.toLowerCase()=="lion"){
        answer.className = "bg-success-subtle p-3 text-black"
        answer.innerText = "Correct"
        

    } else{
        answer.className = "bg-danger p-3 text-black"
        answer.innerText = "Incorrect"
    }
}