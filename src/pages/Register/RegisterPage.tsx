import { useRef, useEffect } from "react";
import Button from "../../components/SubmitButton/SubmitButton";
import Field from "../../components/Field/Field";
import Select from "../../components/Select/Select";

import Logo from "./../../assets/snof-logo.png";
import Ellipse1 from "./../../assets/first-ellipse.svg";
import Ellipse2 from "./../../assets/second-ellipse.svg";

import "./RegisterPage.css";
import LocationRegistration from "./../../components/LocationRegistration/LocationRegistration";

export default function RegisterPage() {
  const ref = useRef(null);
  useEffect(() => {
    const prevBtns = document.querySelectorAll(".btn-prev");
    const nextBtns = document.querySelectorAll(".btn-next");
    const progress: any = document.getElementById("progress");
    const formSteps = document.querySelectorAll(".form-step");
    const progressSteps = document.querySelectorAll(".progress-step");
    console.log(formSteps);

    //Track movement on the progress bar
    let formStepsNum = 0;

    nextBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        formStepsNum++;
        updateFormSteps(formSteps, formStepsNum);
        updateProgressBar(progressSteps, formStepsNum);
      });
    });

    prevBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        formStepsNum--;
        updateFormSteps(formSteps, formStepsNum);
        updateProgressBar(progressSteps, formStepsNum);
      });
    });

    const progressActive = document.querySelectorAll(".progress-step-active");
    console.log(progressActive);

    progress.style.width =
      ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
  }, []);

  function updateFormSteps(formSteps: any, formStepsNum: any) {
    formSteps.forEach((formStep: any) => {
      formStep.classList.contains("form-step-active") &&
        formStep.classList.remove("form-step-active") &&
        formStep.classList.add("endedStep");
    });

    formSteps[formStepsNum].classList.add("form-step-active");
  }

  function updateProgressBar(progressSteps: any, formStepsNum: any) {
    progressSteps.forEach((progressStep: any, i: any) => {
      if (i < formStepsNum + 1) {
        progressStep.classList.add("progress-step-active");
      } else {
        progressStep.classList.remove("progress-step-active");
      }
    });
  }

  const submitButtonValue = "Sign Up";
  const type = "text";
  const orgName = "orgName";
  const id = "orgName";
  const orgLabel = "Organization name";
  const selectLabel = "Organization type";

  const locationNumberLabel = "Number of locations";
  const locationNumberType = "number";
  const locationNumberName = "locationNumber";
  const locationNumberId = "locNumberId";

  const emailLabel = "Email";
  const emailType = "email";
  const emailName = "orgEmail";
  const emailId = "orgEmail";

  const passwdLabel = "Password";
  const passwdType = "password";
  const passwdName = "passwd";
  const passwdId = "orgPasswd";

  return (
    <div className="register">
      <div className="logo">
        <img src={Logo} alt="SNoF-logo" />
      </div>
      <form action="#" method="post">
        <h2 className="text-center">Set up your account</h2>
        {/* Progress bar */}
        <div className="progress-bar">
          <div className="progress" id="progress"></div>
          <div
            className="progress-step progress-step-active"
            data-title="Step 1"
          ></div>
          <div className="progress-step" data-title="Half way to finish"></div>
          <div className="progress-step" data-title="Finish set up"></div>
        </div>

        {/* Steps */}
        <div className="form-step form-step-active">
          <Field labelName={orgLabel} type={type} name={orgName} id={id} />
          <Select labelName={selectLabel} />
          <div className="">
            <a href="#" className="btn btn-next width-50 ml-auto">
              Next
            </a>
          </div>
        </div>
        <div className="form-step">
          <div className="locations">
            <Field
              labelName={locationNumberLabel}
              type={locationNumberType}
              name={locationNumberName}
              id={locationNumberId}
            />
          </div>
          <div className="btn-group">
            <a href="#" className="btn btn-prev">
              Back
            </a>
            <a href="#" className="btn btn-next">
              Next
            </a>
          </div>
        </div>
        <div className="form-step">
          <Field
            labelName={emailLabel}
            type={emailType}
            name={emailName}
            id={emailId}
          />
          <Field
            labelName={passwdLabel}
            type={passwdType}
            name={passwdName}
            id={passwdId}
          />
          <div className="">
            <Button buttonValue={submitButtonValue} />
          </div>
        </div>
      </form>
    </div>
  );
}
