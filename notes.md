<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Jonathan Precious">
    <title>Recipe Website</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Welcome to Jonathan's Recipe Website</h1>
        <nav>
            <ul id="nav-list">
                <li><a href="#pizza">Pizza</a></li>
                <li><a href="#shawarma">Shawarma</a></li>
                <li><a href="#hamburger">Hamburger</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <div class="recipe" id="pizza">
            <div class="recipe-image">
                <img class="slide-in-left" src="./images/download (28).jpeg" alt="Delicious Pizza">
        </div>
        <section class="recipe-details">
            <div class="details slide-in-right">
            <h2 style="text-align: center;">Pizza</h2>
            <h3>Ingredients:</h3>
            <ul>
                <li>Dough</li>
                <li>Tomato Sauce</li>
                <li>Cheese</li>
                <li>Pepperoni</li>
                <li>Olives</li>
            </ul>
            <h3>Instructions:</h3>
            <ol>
                <li>Preheat the oven to 475°F (245°C).</li>
                <li>Roll out the dough on a floured surface.</li>
                <li>Spread tomato sauce over the dough.</li>
                <li>Add cheese and toppings of your choice.</li>
                <li>Bake for 10-15 minutes until the crust is golden and the cheese is bubbly.</li>
            </ol>
            </div>
            </section>
            </div>
                <div class="recipe" id="hamburger">
            <div class="recipe-image">
                <img class="slide-in-left" src=".\images\burger  graphic design.jpeg" alt="Delicious Hamburger">
        </div>
        <section class="recipe-details">
            <div class="details slide-in-right">
            <h2 style="text-align: center;">Hamburger</h2>
            <h3>Ingredients:</h3>
            <ul>
                <li>Dough</li>
                <li>Tomato Sauce</li>
                <li>Cheese</li>
                <li>Pepperoni</li>
                <li>Olives</li>
                
            </ul>
            <h3>Instructions:</h3>
            <ol>
               
            </ol>
            </div>
            </section>
            </div>
    </main>
    <script src="script.js"></script>
</body>
</html>




ul{
    display: flex;
    gap: 10px;
    list-style: none;
    text-decoration: none;
}

#nav-list>li>a{
    text-decoration: none;
    color: white;
}

.recipe{
    display: flex;
    height: 91.5vh;
}

.recipe-image, .recipe-details{
    flex: 1;
    background-color:#948561ff;
    /* border: 1px solid black; */
}

.recipe-image img{
    max-width: 100%;
    height: 80%;
    border-radius: 10px;
    /* object-fit: ; */;
    margin: 40px auto;
    display: block;
   
}

.details{
    padding: 1em;
      display: flex;
  flex-direction: column;
  gap: 1em;
  /* center vertically */
  padding: 2rem;
  /* text-align: center; */
  border: 1px solid black;
  width: 80%;
  margin: 120px auto;
  border-radius: 10px;
  color: white;
  background-color: black;
}

/* Animation keyframes */

/* Initial hidden positions */


.slide-in-left {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-in-right {
  opacity: 0;
  transform: translateX(100%);
}

/* when activated with .show */
.slide-in-left.show {
  animation: slideInLeft 1s ease forwards;
  animation-delay: 0.2s;
}

.slide-in-right.show {
  animation: slideInRight 1s ease forwards;
  animation-delay: 0.5s;
}

@keyframes slideInLeft {
  from { transform: translateX(-100%); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
}

@keyframes slideInRight {
  from { transform: translateX(100%); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // animate only once
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".slide-in-left, .slide-in-right").forEach((el) => {
  observer.observe(el);
});
