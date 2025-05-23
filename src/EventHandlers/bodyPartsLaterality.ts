// get #bodyPart select element's options
const bodyPartSelect = document.getElementById("bodyPart") as HTMLSelectElement;
const bodyPartOptions = bodyPartSelect.querySelectorAll("option") as NodeListOf<HTMLOptionElement>;
// get #laterality select element 
const lateralitySelect = document.getElementById("laterality") as HTMLSelectElement;

// list of body parts that enable laterality select element
const bodyPartsWithLaterality = [
    "ankle",
    "arm",
    "axilla",
    "breast",
    "calcaneus",
    "calf",
    "clavicle",
    "ear",
    "elbow",
    "extremity",
    "eye",
    "femur",
    "finger",
    "foot",
    "hand",
    "hip",
    "humerus",
    "knee",
    "leg",
    "orbit",
    "patella",
    "scapula",
    "shoulder",
    "thigh",
    "thumb",
    "tmj",
    "toe",
    "wrist",
    "zygoma"
];

// add event listener to bodyPart select element
bodyPartSelect.addEventListener("change", () => {
    // get selected option
    const selectedOption = bodyPartSelect.options[bodyPartSelect.selectedIndex] as HTMLOptionElement;
    // check if selected option is in bodyPartsWithLaterality list
    if (bodyPartsWithLaterality.includes(selectedOption.value)) {
        // enable laterality select element
        lateralitySelect.removeAttribute("disabled");
        lateralitySelect.setAttribute("required", "true");
        lateralitySelect.classList.add("field-info-safety");
    } else {
        // disable laterality select element
        lateralitySelect.disabled = true;     
        lateralitySelect.removeAttribute("required");   
        lateralitySelect.classList.remove("field-info-safety");
        // reset laterality select element to 0 (unaired)
        lateralitySelect.selectedIndex = 0;
    }
}
);