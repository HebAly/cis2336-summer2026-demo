document.addEventListener("DOMContentLoaded", function () {

    let hobbies = document.querySelectorAll("#hobbiesList li");

   for (let hobby of hobbies) {
        hobby.addEventListener("mouseenter", function () {
            this.style.color = "red";
            this.style.fontWeight = "bold";
        });

        hobby.addEventListener("mouseleave", function () {
            this.style.color = "";
            this.style.fontWeight = "";
        });

    }

});