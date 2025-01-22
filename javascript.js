function reset(){
    document.getElementById("name").value = ""
    document.getElementById("answer").innerText = ""
}

function check(){
    let name = document.getElementById("name").value
    if (name.toLowerCase()=="lion"){
        document.getElementById("answer").innerText = "Correct"
        document.getElementById("answer").style.backgroundColor = "green"
        document.getElementById("answer").style.padding = "10px"

    } else{
        document.getElementById("answer").innerText = "Incorrect"
        document.getElementById("answer").style.backgroundColor = "red"
        document.getElementById("answer").style.padding = "10px"
    }
}