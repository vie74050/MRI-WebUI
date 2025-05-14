import { Tooltip, Panel} from 'bootstrap';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

// Get #orientationBtn and assign click event
const orientationBtn = document.getElementById("orientationBtn") as HTMLButtonElement;
const orientationOpts =document.getElementById("orientationOptions") as HTMLButtonElement;

orientationBtn.addEventListener("click", () => {    
    // toggle panel class hidden
    orientationOpts.classList.toggle("hidden");
        
});

// Get orientationOpts' icons and assign click event
const orientationIcons = orientationOpts.querySelectorAll(".select-icon") as NodeListOf<HTMLDivElement>;
orientationIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
              
        // remove active class from all icons
        orientationIcons.forEach((icon) => {
            icon.classList.remove("selected");
        });
        // add active class to clicked icon
        icon.classList.add("selected");
        
    });
});

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
    } else {
        // disable laterality select element
        lateralitySelect.disabled = true;
        // reset laterality select element to 0 (unaired)
        lateralitySelect.selectedIndex = 0;
    }
}
);