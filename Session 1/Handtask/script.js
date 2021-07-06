const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 21 },
    { name: "Jane", age: 20}
];

const render = () => {
    students.forEach(({name, age}) => {
        const table = document
        .getElementById("data")
        .getElementsByTagName("tbody")[0];

        table.insertRow().innerHTML = `<td>${name}</td><td>${age}</td>`
    });
}
render();

function avg(students){
    const rata = students.reduce((acc, student) => acc + student.age, 0);
    return rata / students.length;
}

function umur(){
    document.getElementById("umur").innerHTML = avg(students);
}
