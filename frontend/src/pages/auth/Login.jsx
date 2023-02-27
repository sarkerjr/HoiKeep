import React from 'react';

const Login = () => {
  return (
    <section className="h-full gradient-form bg-white md:h-screen">
      <div className="container py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-green-600">
          <div className="xl:w-4/12">
            <div className="block bg-green-100 shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="w-full flex justify-center lg:w-12/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <form>
                      <p className="mb-4 pt-4">Please login to your account</p>
                      <div className="mb-4">
                        <input
                          type="email"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-300 focus:outline-none"
                          id="formControlInputEmail"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-300 focus:outline-none"
                          id="formControlInputPassword"
                          placeholder="Password"
                        />
                      </div>
                      <div className="text-center pt-1 mb-12 pb-1">
                        <button
                          className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-green-600 hover:bg-green-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Log in
                        </button>
                        <a className="text-gray-500" href="#!">
                          Forgot password?
                        </a>
                      </div>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="inline-block px-6 py-2 border-2 border-green-600 text-green-600 font-medium text-xs leading-tight uppercase rounded hover:bg-green-600 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
