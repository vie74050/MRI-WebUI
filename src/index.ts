import { Tooltip, Panel} from 'bootstrap';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/scheduler.css";
import "./styles/registration.css";
import "./styles/registration-options.css";

require('./EventHandlers/patientOrientation.ts');
require('./EventHandlers/bodyPartsLaterality.ts');
require('./EventHandlers/units.ts');
require('./EventHandlers/ageDOB.ts');

