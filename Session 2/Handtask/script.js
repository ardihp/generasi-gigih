const students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 21 },
  { name: "Jane", age: 20 }
];

//render table
const render = () => {
  students.forEach(({ name, age }) => {
    const table = document
      .getElementById("data")
      .getElementsByTagName("tbody")[0];

    table.insertRow().innerHTML = `<td>${name}</td><td>${age}</td>`;
  });
};
render();

//hitung avarage umur
function avg(students) {
  const rata = students.reduce((acc, student) => acc + student.age, 0);
  return rata / students.length;
}

function secondCall() {
  return new Promise(() => {
    console.log("calculation start");
    console.log("second call started");
    setTimeout(() => {
      console.log("second call finished");
      thirdCall();
    }, 2000);
  });
}

function thirdCall() {
  return new Promise(() => {
    console.log("third call started");
    setTimeout(() => {
      console.log("third call finished");
    }, 3000);
  });
}

function forthCall() {
  return new Promise(() => {
    setTimeout(() => {
      console.log(`age is ${avg(students)}`);
      document.getElementById("umur").innerHTML = avg(students);
    }, 5000);
  });
}

async function asyncCall() {
  secondCall();
  await forthCall();
}
