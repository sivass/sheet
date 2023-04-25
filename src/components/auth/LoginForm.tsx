export function LoginForm(): JSX.Element {
  return (
    <>
      <main className="relative flex flex-1 flex-col overflow-hidden px-4 py-8 sm:px-6 lg:px-8 bg-emerald-100 h-screen">
        <div className="relative flex flex-1 flex-col items-center justify-center pb-16 pt-12">
          <div className="w-full max-w-sm bg-white p-5 border-2 rounded-md border-emerald-50">
            <h1 className="text-center p-2">Log in to your account</h1>
            <form action="/" className="w-full max-w-sm">
              <div className="mb-6">
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"
                  value=""
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"
                  value=""
                />
              </div>
              <button
                type="submit"
                className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-emerald-900 text-white hover:bg-emerald-700 w-full"
              >
                <span>Sign in to account</span>
              </button>
              <div className="flex mt-4 justify-between">
                <p className="flex-column">
                  <a href="/forget" className="text-sm hover:underline">
                    Forget password?
                  </a>
                </p>
                <p className="flex-column">
                  <a href="/signup" className="text-sm hover:underline">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
