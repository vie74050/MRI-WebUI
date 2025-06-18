// Get #OrientationBtn and assign click event
const OrientationBtn = document.getElementById("orientation-btn") as HTMLButtonElement;
const orientationIcon = document.getElementById("orientationIcon") as HTMLDivElement;
const orientationText = document.getElementById("orientationText") as HTMLDivElement;
const orientationOpts =document.getElementById("orientationOptions") as HTMLButtonElement;
const defaultIconSrc = orientationIcon.getAttribute("src") as string;
const defaultIconText = orientationText.innerText;

type orientationDataType = {
    iconSrc: string;
    iconText: string;
    iconId: string;
}

OrientationBtn.addEventListener("click", () => {    
    const orientationArrow = OrientationBtn.querySelector('svg');
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
        const oselected = icon.getAttribute("id") as string;
        SetOrientationData(oselected);              
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

    // reset OrientationBtn arrow
    const orientationArrow = OrientationBtn.querySelector('svg');
    orientationArrow?.setAttribute("data-icon", "angle-down");

}


function GetOrientationData(): orientationDataType {
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
function SetOrientationData(iconId: string) {
    const selectedIcon = orientationOpts.querySelector(`#${iconId}`) as HTMLDivElement;
    const orientationData: orientationDataType = {
        iconSrc: selectedIcon?.getAttribute("src") || "",
        iconText: selectedIcon?.getAttribute("alt") || "",
        iconId: iconId
    };
    // set orientationIcon src and orientationText text
    orientationIcon.setAttribute("src", orientationData.iconSrc);
    orientationText.innerText = orientationData.iconText;
    // set selected icon
    orientationIcons.forEach((icon) => {
        if (icon.getAttribute("src") === orientationData.iconSrc) {
            icon.classList.add("selected");
        } else {
            icon.classList.remove("selected");
        }
    });
}
export { OrientationBtn, ResetOrientationSelect, GetOrientationData, SetOrientationData };