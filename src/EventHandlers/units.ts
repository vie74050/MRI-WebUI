// Get #units select and assign change event
const unitsSelect = document.getElementById("units") as HTMLSelectElement;
const unitsFt = document.getElementById("unitsFt") as HTMLDivElement;
const unitsIn = document.getElementById("unitsIn") as HTMLDivElement;
const unitsLb = document.getElementById("unitsLb") as HTMLDivElement;

// add event listener to units select element
unitsSelect.addEventListener("change", () => {
    // get selected option
    const selectedOption = unitsSelect.options[unitsSelect.selectedIndex] as HTMLOptionElement;
    // check if selected option is in bodyPartsWithLaterality list
    if (selectedOption.value === "metric") {
        unitsFt.innerText = "m";
        unitsIn.innerText = "cm";
        unitsLb.innerText = "kg";
    } else {
        unitsFt.innerText = "ft";
        unitsIn.innerText = "in";
        unitsLb.innerText = "lb";
    }
});
