import { Tooltip } from 'bootstrap';
import "../styles/tooltip.css";

const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl, { 
    customClass: 'custom-tooltip',
    boundary: 'window', // Ensures tooltips are not cut off by overflow 
}));
