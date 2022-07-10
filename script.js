console.log("working!");

// event listener for "find out more" button
// declare variable for the button with doc select
const findOutMoreButton = document.querySelector("#findOutMoreButton")

// declare variable for hidden div
const hiddenInfoWrapper = document.querySelector("#hiddenInfoWrapper")


// add event listener to the button
findOutMoreButton.addEventListener("click", () => {
    // make it toggle between having "hidden" class or not

    // if it has the class...
    if (hiddenInfoWrapper.classList.contains("hidden")) {
        // ...remove it!
        hiddenInfoWrapper.classList.remove("hidden")
    }


    // if it doesn't have the class...
    else {
        // ...add it!
        hiddenInfoWrapper.classList.add("hidden");
    }
})
