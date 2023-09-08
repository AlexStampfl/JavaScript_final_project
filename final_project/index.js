/* window.onload = function(){
    //retrieve stored name from localStorage
    let storedPerson = localStorage.getItem('fname');

    //update welcome message if stored name exists
    if (storedPerson){
        //cannot set properties of null
        document.getElementById('fname').innerHTML = "Hey " + storedPerson + ", welcome!";
    }
}; */

export function welcomePrompt(){
    let person = prompt("Enter thy name:");
    localStorage.setItem('fname', person);

    let storedPerson = localStorage.getItem('fname');
    document.getElementById('fname').innerHTML = "Hey " + storedPerson + ", welcome!";
}


