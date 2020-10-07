import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import './styles/header.css';
import './styles/tasks.css';
import bgToDo from './images/todo.jpg';
import {createProject} from "./modules/project";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import { clearTaskView, renderTask } from "./modules/taskView";

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
	document.getElementById("sb-wrapper").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
	document.getElementById("sb-wrapper").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
}

