export default function Header() {
  return (
    <header className="text-white bg-blue-900 shadow-md print:bg-blue-900 print:text-white">
      <div className="flex flex-col items-center justify-between max-w-6xl px-4 py-4 mx-auto md:py-6 md:flex-row">

        {/* Title */}
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold md:text-2xl">
            Telangana Board of Secondary Education
          </h1>

          <p className="text-sm md:text-base">
            10th Class Pre-Final Examination Results 2026
          </p>
        </div>

        {/* Portal label */}
        <div className="mt-2 text-sm font-semibold md:mt-0 md:text-base">
          Official Result Portal
        </div>

      </div>
    </header>
  );
}