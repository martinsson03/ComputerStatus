export default function Footer() {
  return (
    <footer className="bg-gray-800 mt-12 align-bottom">
      <div className="mx-auto max-w-screen-lg px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} <span className="font-semibold text-white">ComputerStatus</span>
          </p>

        </div>
      </div>
    </footer>
  );
}
