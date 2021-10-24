const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

//Question 1:
const cat = {
  complain: function () {
    console.log("Meow!");
  },
};
cat.complain();

//Question 2:
const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//Question 3:
heading.style.fontSize = "2em";

//Question 4:
heading.className += "subheading";

//Question 5:
const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((paragraph) => {
  paragraph.style.color = "red";
});

//Question 6:
const resultsContainer = document.querySelector(".results");

resultsContainer.style.backgroundColor = "yellow";
resultsContainer.innerHTML = "<p>New paragraph</p>";

//Question 7:

function logName(list) {
  list.forEach((item) => {
    console.log(item.name);
  });
}
logName(cats);

//Question 8:
function createCats(cats) {
  let newHtml = "";

  cats.forEach((cat) => {
    let catName = "Name unknown";
    let catAge = "Age unknown";
    if (cat.name) {
      catName = cat.name;
    }
    if (cat.age) {
      catAge = cat.age;
    }
    newHtml = newHtml + `<div><h5>${catName}<\h5><p>${catAge}</p></div>`;
  });
  return newHtml;
}
const newCatsHtml = createCats(cats);
const body = document.querySelector("body");

body.innerHTML += newCatsHtml;
