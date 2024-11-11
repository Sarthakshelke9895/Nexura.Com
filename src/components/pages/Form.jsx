import React from 'react'
import './form.css'
import Backarow from '../../assets/backarrow.png'
import  { useRef } from 'react';

const Form = () => {
    const handlebackclick = () => {
        window.history.back();
    }
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const addRef = useRef();
    const appnameRef = useRef();
    const ownerRef = useRef();
    const apkfileRef = useRef();
    const applogoRef = useRef();
    const appdescRef = useRef();



    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
    
        // List of refs to required fields
        const requiredFields = [nameRef, emailRef, phoneRef,addRef,appnameRef,ownerRef,apkfileRef,applogoRef,appdescRef];
        let firstEmptyField = null;
    
        // Check each field to see if it’s empty
        requiredFields.forEach((field) => {
          // Clear any previous highlights
          field.current.classList.remove("highlight");
    
          // If field is empty, mark it as the first empty field
          if (!field.current.value.trim()) {
            if (!firstEmptyField) {
              firstEmptyField = field;
            }
            field.current.classList.add("highlight"); // Highlight the empty field
          }
        });
    
        // If there’s an empty field, scroll to it and focus
        if (firstEmptyField) {
          firstEmptyField.current.scrollIntoView({ behavior: "smooth", block: "center" });
          firstEmptyField.current.focus();
        } else {
          // All fields are filled; proceed with form submission or other actions
          alert("Form submitted successfully!");
          // Uncomment the line below if you want to actually submit the form
          // e.target.submit();
        }
      };

  return (


    <div className="all">
        <nav className='randomnav'>
            <div className="background">
            <img src={Backarow} alt="Back"  id='backarrow' onClick={handlebackclick}/>
            </div>
            
            <img src="faviconserver" alt="logo" id='website_logonav' />
            <h1 id='website_namenav'>Nexura</h1>
        </nav>
<div class="custom-form-container">
<h2 id='onehead'>*Fill out the form with correct details to proceed your app upload</h2>

    <form action="/submit-app" method="POST" enctype="multipart/form-data" class="custom-form">
        <div class="custom-form-group">
            <input type="text" id="name" name="name" required class="custom-input" ref={nameRef}/>
            <label for="name" class="custom-label">Name</label>
            <span class="custom-underline"></span>
        </div>
        
        <div class="custom-form-group">
            <input type="email" id="email" name="email" required class="custom-input" ref={emailRef}/>
            <label for="email" class="custom-label">Email</label>
            <span class="custom-underline"></span>
        </div>

        <div class="custom-form-group">
            <input type="tel" id="contactNo" name="contactNo" required class="custom-input" ref={phoneRef}/>
            <label for="contactNo" class="custom-label">Contact Number</label>
            <span class="custom-underline"></span>
        </div>

        <div class="custom-form-group">
            <input type="text" id="address" name="address"  required class="custom-input"  ref={addRef}/>
            <label for="address" class="custom-label">Address</label>
            <span class="custom-underline"></span>
        </div>
        <div class="custom-form-group">
            <input type="text" id="app-name" name="app-name"  required class="custom-input"  ref={appnameRef}/>
            <label for="app-name" class="custom-label">App-Name</label>
            <span class="custom-underline"></span>
        </div>
        <div class="custom-form-group">
            <input type="text" id="address" name="appslogan"  class="custom-input"/>
            <label for="appslogan" class="custom-label">App-Slogan (if-any)</label>
            <span class="custom-underline"></span>
        </div>
        <div class="custom-form-group">
            <input type="text" id="address" name="appowner"  class="custom-input"  ref={ownerRef}/>
            <label for="appowner" class="custom-label">Owned-By</label>
            <span class="custom-underline"></span>
        </div>

        <div class="custom-form-group">
        <div class="form-group">
            <label for="apkFile" className='hello'>APK File</label>
            <input type="file" id="apkFile" name="apkFile" accept=".apk" required ref={apkfileRef}/>
        </div>
        </div>

        <div class="custom-form-group">
        
            <label for="appImage" className='hello'>App Image</label>
            <input type="file" id="appImage" name="appImage" accept="image/*" required ref={applogoRef}/>
      
        </div>

        <div class="custom-form-group">
            <textarea id="appDescription" name="appDescription" required class="custom-input"  ref={appdescRef}></textarea>
            <label for="appDescription" class="custom-label">App Description</label>
            <span class="custom-underline"></span>
        </div>

        <button type="submit" class="custom-submit-btn" onClick={handleSubmit}>Submit</button>
    </form>
</div>
    </div>


  )
}

export default Form;