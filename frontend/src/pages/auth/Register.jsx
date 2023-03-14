const Register = () => {
  return (
    <div className="bg-grey-lighter flex min-h-screen flex-col">
      <div className="container mx-auto flex flex-1 flex-col items-center justify-center px-2">
        <div className="w-full rounded bg-green-100 px-6 py-8 text-black shadow-md">
          <h1 className="mb-8 text-center text-3xl text-green-600">Sign up</h1>
          <div className="flex flex-wrap items-center justify-center">
            <input
              type="text"
              className="border-grey-light m-5 mb-4 w-full rounded border p-3 md:w-5/12"
              id="fullName"
              placeholder="Full Name"
            />
            <input
              type="text"
              className="border-grey-light m-5 mb-4 w-full rounded border p-3 md:w-5/12"
              name="departmentName"
              placeholder="Department Name"
            />
            <input
              type="text"
              className="border-grey-light m-5 mb-4 w-full rounded border p-3 md:w-5/12"
              name="idNumber"
              placeholder="ID Number"
            />
            <input
              type="text"
              className="border-grey-light m-5 mb-4 w-full rounded border p-3 md:w-5/12"
              name="session"
              placeholder="Session"
            />
            <input
              type="text"
              className="border-grey-light m-5 mb-4 w-full rounded border p-3 md:w-5/12"
              name="year"
              placeholder="Year"
            />
            <input
              type="text"
              className="border-grey-light m-5 mb-4 w-full rounded border p-3 md:w-5/12"
              name="semister"
              placeholder="Semister"
            />
            <input
              type="text"
              className="border-grey-light m-5 mb-4 w-full rounded border p-3 md:w-5/12"
              name="admitaionDate"
              placeholder="Admitaion Date"
            />
            <input
              type="text"
              className="border-grey-light m-5 mb-4 w-full rounded border p-3 md:w-5/12"
              name="roomNumber"
              placeholder="Room Number"
            />
            <button
              type="submit"
              className=" mb-3 w-full rounded bg-green-600 px-6 py-4 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-green-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg xl:ml-20 xl:mr-20 md:ml-10 md:mr-10 m-5"
            >
              Student Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
