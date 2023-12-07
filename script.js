let div = document.getElementById('div');
let request = new XMLHttpRequest();
let ul = document.createElement('ul'); 

request.addEventListener('load', function() {
    if (this.status === 200) {
        let infoJS = JSON.parse(this.responseText);
        infoJS.data.forEach(catcher => { 
            let li = document.createElement('li');
            li.textContent = `${catcher.first_name} ${catcher.last_name} ${catcher.email}`;
            ul.appendChild(li);
        });
        div.appendChild(ul); 
    } else {
        console.log("Request failed");
    }
});

request.open('GET', 'https://reqres.in/api/users?page=2');
request.send();
