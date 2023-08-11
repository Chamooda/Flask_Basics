document.querySelector('#D').addEventListener('click', function() {
    alert('Yes! you ded');
    console.log("The correcct answer was pressed");
});

document.querySelector('#B').addEventListener('click', function() {
    alert('Nope!');
    console.log("The wrong answer was pressed");
});

document.querySelector('#C').addEventListener('click', function() {
    alert('Nope!');
    console.log("The wrong answer was pressed");
});

document.querySelector('#A').addEventListener('click', function() {
    alert('Nope!');
    console.log("The wrong answer was pressed");
});

document.querySelector('#submit').addEventListener('click', function() { 
let inp = document.querySelector('#fname');
let val = inp.value;

if (val == "Ded") {
    alert("Ded is correct");
    console.log("The correct answer was typed in");
} else {
    alert("Wrong answer");
    console.log("The wrong answer was typed in");
    inp.value = "";
}

});
