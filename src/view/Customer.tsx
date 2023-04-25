export default function Customer(): JSX.Element {
  return (
    <>
      <div className="relative flex h-screen w-3/4 overflow-x-hidden left-72 mx-5">
        <div className="absolute bg-white border-2 rounded-md border-emerald-500 border-opacity-20 inset-y-24 h-fit w-full">
          <div className="py-10 mx-5">
            <h1 className="text-2xl text-emerald-950 font-bold uppercase mx-2">
              Customer
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
