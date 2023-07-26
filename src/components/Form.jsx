import Card from "./Card";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import useInput from "../hooks/use-input";
import React, {useState} from "react";
import FormModal from "./FormModal";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

function Form() {
  const [sent, setIsSent]=useState(false)
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangehandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);
  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangehandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput(isNotEmpty);
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);
  const {
    value: enteredCompany,
    valueChangeHandler: companyChangeHandler,
    reset: resetCompanyInput,
  } = useInput(isNotEmpty);
  const {
    value: enteredRequirement,
    valueChangeHandler: requireChangeHandler,
    reset: resetRequireInput,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredPhoneIsValid) {
    formIsValid = true;
  }
  const userCollectionRef = collection(db, "customer");

  const submitFormHandler = async (e) => {
    e.preventDefault();
    setIsSent(true)
    if (!formIsValid) {
      return;
    }
    const formInput = {
      Name: enteredName,
      Email: enteredEmail,
      Phone: enteredPhone,
      Company: enteredCompany,
      Requirements: enteredRequirement,
    };
    console.log(formInput);
    await addDoc(userCollectionRef, formInput);
    setIsSent(false)
    resetNameInput();
    resetPhoneInput();
    resetEmailInput();
    resetCompanyInput();
    resetRequireInput();
  };

  const nameClasses = nameInputHasError ? "invalid" : "";
  const phoneClasses = phoneInputHasError ? "invalid" : "";
  const emailClasses = emailInputHasError ? "invalid" : "";

  return (
    <div className="flex justify-center  mb-20">
      <Card className="w-[720px] formBackground ">
        <form
          onSubmit={submitFormHandler}
          className="flex  flex-col items-center gap-5 mt-10 mb-10  "
        >
          <h2 className="text-3xl font-sans font-semibold text-red-400 ">
            I would love to hear from you!
          </h2>
          <div>
            <label htmlFor="name">Name</label>
            <input
              className={nameClasses + " color-input"}
              id="name"
              type="text"
              autoComplete="given-name"
              placeholder="Enter Name"
              value={enteredName}
              onChange={nameChangehandler}
              onBlur={nameBlurHandler}
            />
            {nameInputHasError && (
              <p className="text-center text-red-600">Please enter a name</p>
            )}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className={emailClasses + " color-input"}
              id="email"
              type="text"
              autoComplete="off"
              placeholder="Enter Email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailInputHasError && (
              <p className="text-center text-red-600">
                Please enter a valid email
              </p>
            )}
          </div>
          <div>
            <label htmlFor="org">Company</label>
            <input
              className="color-input"
              id="org"
              type="text"
              placeholder="Enter Company"
              value={enteredCompany}
              onChange={companyChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              className={phoneClasses + " color-input"}
              id="phone"
              type="text"
              autoComplete="off"
              placeholder="Enter Phone Number"
              value={enteredPhone}
              onChange={phoneChangehandler}
              onBlur={phoneBlurHandler}
            />
            {phoneInputHasError && (
              <p className="text-center text-red-600">
                Phone number must not be empty!
              </p>
            )}
          </div>
          <div>
            <label htmlFor="require">Requirements</label>
            <textarea
              className="color-input"
              id="require"
              cols="30"
              rows="9"
              placeholder="Please State the Exact service you need in sufficient detail and its category. "
              value={enteredRequirement}
              onChange={requireChangeHandler}
            />
          </div>
          <div>
            <button disabled={!formIsValid} className="button flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-gray-600"
              >
                <path d="M9.97.97a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72v3.44h-1.5V3.31L8.03 5.03a.75.75 0 01-1.06-1.06l3-3zM9.75 6.75v6a.75.75 0 001.5 0v-6h3a3 3 0 013 3v7.5a3 3 0 01-3 3h-7.5a3 3 0 01-3-3v-7.5a3 3 0 013-3h3z" />
                <path d="M7.151 21.75a2.999 2.999 0 002.599 1.5h7.5a3 3 0 003-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 01-4.5 4.5H7.151z" />
              </svg>
              Hit me Up
            </button>
            {sent && <FormModal/>}
          </div>
        </form>

      </Card>
    </div>
  );
}

export default Form;
