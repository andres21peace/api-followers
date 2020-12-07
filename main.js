let request = new XMLHttpRequest(), method = "GET", link = "https://api.github.com/users/";
let btn = document.querySelector('#btn');
let userCard = document.querySelector('.followers-container');
let user = document.querySelector('#user');
let howMany = document.querySelector('.howMany');


btn.addEventListener('click', ()=>{

    let userInput = user.value;

    request.open(method, link + userInput + "/followers");
    console.log(request);
    request.onload = ()=>{
        let myData = JSON.parse(request.responseText);
        showFollowers(myData);

    }

    request.send();
})



function showFollowers(data){
    let card = "";
    let howManyInput = howMany.value;
    for(let i = 0; i < howManyInput; i++){
        card += " <div class='card m-3' style='width: 200px;'><img class='card-img-top' src="+ data[i]['avatar_url'] +">" + 
        "<div class='card-body'>" + 
        "<h5 class='card-title'>Username: " +  data[i]['login'] + "</h5>" +
        "<a href=" + data[i]['html_url'] +" class='btn btn-primary'>Visit github profile</a></div></div>";
    }

    userCard.insertAdjacentHTML('afterbegin', card);
}
