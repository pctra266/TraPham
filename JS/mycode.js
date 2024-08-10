


    var ques1 = document.getElementById("ques-1")
    var ques2 = document.getElementById("ques-2")
    var ques3 = document.getElementById("ques-3")
    
    ques1.style.display = "none";
    ques2.style.display = "none";
    ques3.style.display = "none";   



function start(){
    const header = document.getElementById("header")
    header.style.display = "none"
    ques1.style.display = "block"
}

function ques2f(){
    alert("đừng hối hận đấy : ))")
    ques1.style.display = "none"
    ques2.style.display = "block"

}
function ques3f(){
    ques2.style.display = "none"
    ques3.style.display = "block"
}

function end(){
    ques3.style.display = "none"
    const end = document.getElementById("end")
    end.innerHTML = '<img src="image/end.jpg" id ="wibu">'
    end.style.display = "flex"
    end.style.justifyContent = "center"

    var image = document.getElementById("wibu")
    image.style.width = "500px"

    alert("hơn 30% câu trả lời là Loli, bạn là lolicon")
    

}
