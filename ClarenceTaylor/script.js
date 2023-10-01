
const btn = document.querySelector(".btn")
const li = document.querySelectorAll("li");
console.log(li);
const main = document.querySelector("main")

btn.addEventListener("click", ()=>{
 li.forEach((item) => {
   item.classList.toggle("show");
 });
btn.classList.toggle("active")
main.classList.toggle("main-active")

})

let value="";
const items = document.querySelectorAll("a.items")

const scrollToSection = (event) => {
  event.preventDefault();
  removeActive();
  const targetId = event.currentTarget.getAttribute("href").substring(1);
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    event.currentTarget.classList.add("active");
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
};

const removeActive = () => {
  items.forEach((item) => {
    item.classList.remove("active");
  });
};

items.forEach((item) => {
  item.addEventListener("click", scrollToSection);
});