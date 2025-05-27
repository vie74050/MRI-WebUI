// Get #orientationBtn and assign click event
const orientationBtn = document.getElementById("orientation-btn") as HTMLButtonElement;
const orientationIcon = document.getElementById("orientationIcon") as HTMLDivElement;
const orientationText = document.getElementById("orientationText") as HTMLDivElement;
const orientationOpts =document.getElementById("orientationOptions") as HTMLButtonElement;

const defaultIconSrc = orientationIcon.getAttribute("src") as string;
const defaultIconText = orientationText.innerText;

orientationBtn.addEventListener("click", () => {    
    const orientationArrow = orientationBtn.querySelector('svg');
    // toggle panel class hidden
    orientationOpts.classList.toggle("hidden");
    // toggle icon caret up/dn svg
    if (orientationOpts.classList.contains("hidden")) {
        orientationArrow?.setAttribute("data-icon", "angle-down");
    } else {
        orientationArrow?.setAttribute("data-icon", "angle-up");
    }

    
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
        // update orientationIcon src and orientationText text
        const iconSrc = icon.getAttribute("src") as string;
        const iconText = icon.getAttribute("alt") as string;
        orientationIcon.setAttribute("src", iconSrc);
        orientationText.innerText = iconText;               
    });
});

function ResetOrientationSelect() {
    // remove active class from all icons
    orientationIcons.forEach((icon) => {
        icon.classList.remove("selected");
    });
    // reset orientationIcon src and orientationText text
    
    orientationIcon.setAttribute("src", defaultIconSrc);
    orientationText.innerText = defaultIconText;
    // hide orientationOpts
    orientationOpts.classList.add("hidden");

    // reset orientationBtn arrow
    const orientationArrow = orientationBtn.querySelector('svg');
    orientationArrow?.setAttribute("data-icon", "angle-down");

}

type orientationDataType = {
    iconSrc: string;
    iconText: string;
    iconId: string;
}
function getOrientationData(): orientationDataType {
    const selectedIcon = orientationOpts.querySelector(".selected") as HTMLDivElement;
    let orientationData: orientationDataType = {
        iconSrc: defaultIconSrc,
        iconText: defaultIconText,
        iconId: ""
    };
    if (selectedIcon) {
        const iconSrc = selectedIcon.getAttribute("src") as string;
        const iconText = selectedIcon.getAttribute("alt") as string;
        const iconId = selectedIcon.getAttribute("id") as string;
        orientationData = {
            iconSrc: iconSrc,
            iconText: iconText,
            iconId: iconId,
        };
    }
     
    return orientationData;
}

export { orientationBtn, ResetOrientationSelect, getOrientationData };