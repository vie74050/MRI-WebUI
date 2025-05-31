import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/scheduler.css";
import "./styles/registration.css";
import "./styles/registration-options.css";
import "./styles/table.css";
import "./styles/tooltip.css";

// patient registration
require('./EventHandlers/units.ts');
require('./EventHandlers/ageDOB.ts');
require('./EventHandlers/exam-btn.ts');
require('./EventHandlers/bodyPartsLaterality.ts');
require('./EventHandlers/orientation-btn.ts');
require('./EventHandlers/deleteProcedure-btn.ts');
require('./EventHandlers/registerPatient-btn.ts');
require('./EventHandlers/registration-loadData-options.ts');
require('./EventHandlers/registration-edit-options.ts');
// scheduler
require('./EventHandlers/scheduler-sort-btns.ts');
require('./EventHandlers/scheduler-select-btn.ts');
// bootstrap tooltips
import { Tooltip } from 'bootstrap';
const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl, { 
    customClass: 'custom-tooltip',
    boundary: 'window', // Ensures tooltips are not cut off by overflow 
}));
