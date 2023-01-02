import React from "react";

const welcome = () => {
  return (
    <div className="app-container">
      <div className="container-fluid sign-up">
        <div className="row no-gutter">
          <div className="col-md-6 d-none d-md-flex bg-image"></div>
           <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h1 className="display-4">Welcome to our application!</h1>
                    <div className="form-group md3">
                      <a
                        className="btn btn-danger btn-block text-uppercase mb-2 rounded-pill shadow-sm signUpBtn"
                        href="/sign-up"
                      >
                        Sign Up
                      </a>
                      <p className="btnP"> OR </p>
                      <a
                        className="btn btn-danger btn-block text-uppercase mb-2 rounded-pill shadow-sm signInBtn"
                        href="/sign-in"
                      >
                        Sign In
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default welcome;
