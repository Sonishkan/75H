/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// core components
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import PageHeader from "../../components/PageHeader/PageHeader.js";
import Footer from "../../components/Footer/Footer.js";
import ProfilePage from "./ProfilePage.js";
import {Amplify,  Hub } from "aws-amplify";
import config from '../../aws-exports.js';



// sections for this page/view
import JavaScript from "../IndexSections/JavaScript.js";
import Signup from "../IndexSections/Signup.js";
import Examples from "../IndexSections/Examples.js";

Amplify.configure(config);

export default function Index(props) {

  const [currentUser, setCurrentUser] = React.useState(null) ;
  
  React.useEffect(() => {
    {
      Hub.listen("auth", (event) => {
        const { payload } = event;
        console.log("A new auth event has happened: ", event);
        if (payload.event === "signIn" || payload.event === "autoSignIn") {
          setCurrentUser (event.payload.data)
          console.log("a user has signed in!", currentUser);
          
        }
        else if (payload.event === "signOut") {
          
          setCurrentUser(null)
          console.log("a user has signed out!", currentUser);          
        }
      })
      console.log("currentUser", currentUser);
      
    }

  }, []);

  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  
  return (
    <>
      <IndexNavbar currentUser={currentUser}/>
      <div className="wrapper">
        
        <div className="main">
          {currentUser !== null ? (
            // If currentUser is not null (user is logged in), show ProfilePage
            <ProfilePage />
          ) : (
            // If currentUser is null (user is not logged in), show other components
            <>
              <PageHeader />
              <JavaScript />
              <Examples />
              <Signup />
            </>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
  
}
