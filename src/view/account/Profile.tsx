export default function Profile(): JSX.Element {
  return (
    <>
      <div className="relative flex h-screen w-3/4 overflow-x-hidden left-72 mx-5">
        <div className="absolute bg-white border-2 rounded-md border-emerald-500 border-opacity-20 inset-y-24 h-fit w-full">
          <div className="py-10 mx-5">
            <h1 className="text-2xl text-emerald-950 font-bold uppercase mx-2">
              Profile
            </h1>
            <form className="py-5">
              <div className="flex relative h-full">
                <div className="mb-6 lg:w-1/2 mx-2">
                  <label className="block text-sm font-semibold leading-6 text-emerald-950">
                    First name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="mt-2  text-emerald-950 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"
                  />
                </div>
                <div className="mb-6 lg:w-1/2 mx-2">
                  <label className="block text-sm font-semibold leading-6 text-emerald-950">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="mt-2  text-emerald-950 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"
                  />
                </div>
              </div>
              <div className="mb-6 w-full max-w-md text-center mx-5 absolute right-0 py-1">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-emerald-900 text-white hover:bg-emerald-700 w-full"
                >
                  <span>Update profile</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
