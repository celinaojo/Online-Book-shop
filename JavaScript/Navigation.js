document.addEventListener('DOMContentLoaded', () => {

    const toggleButton = document.querySelector(".Navigation_toggle");

    const navigation = document.querySelector(".Navigation_links");

    toggleButton.addEventListener("click", () => {

        navigation.classList.toggle("active");

    });

});