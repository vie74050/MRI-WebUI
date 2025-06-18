// get #bodyPart select element's options
const bodyPartSelect = document.getElementById("bodyPart") as HTMLSelectElement;
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
    // get bodyPart and laterality from selected option
    const bodyPart = selectedOption.value;
    const laterality = selectedOption.getAttribute("data-laterality") || "0"; // default to "0" if not set
    // set laterality selection based on bodyPart
    SetLateralitySelection(bodyPart, laterality);
});

function SetLateralitySelection(bodyPart: string, laterality: string) {
    // check if bodyPart is in bodyPartsWithLaterality list
    if (bodyPartsWithLaterality.includes(bodyPart)) {
        // enable laterality select element
        lateralitySelect.removeAttribute("disabled");
        lateralitySelect.setAttribute("required", "true");
        lateralitySelect.classList.add("field-info-safety");
        // set laterality select element to the given laterality
        const options = lateralitySelect.options;
        for (let i = 0; i < options.length; i++) {
            if (options[i].value === laterality) {
                lateralitySelect.selectedIndex = i;
                break;
            }
        }
    } else {
        ResetLateralitySelection();
    }
}
function ResetLateralitySelection() {
    // reset laterality select element to 0 (unaired)
    lateralitySelect.selectedIndex = 0;
    // disable laterality select element
    lateralitySelect.disabled = true;     
    lateralitySelect.removeAttribute("required");   
    lateralitySelect.classList.remove("field-info-safety");
}

export { SetLateralitySelection, ResetLateralitySelection }