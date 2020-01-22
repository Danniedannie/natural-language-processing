import { checkForName } from "./client/js/nameChecker";
import { handleSubmit, getAnalysis } from "./client/js/formHandler";
import "./client/styles/resets.scss";
import "./client/styles/footer.scss";
import "./client/styles/form.scss";
import "./client/styles/header.scss";
import "./client/styles/base.scss";

document.querySelector("form").addEventListener("submit", handleSubmit);
document.querySelector("#getResults").addEventListener("click", getAnalysis);
export { checkForName, handleSubmit };
