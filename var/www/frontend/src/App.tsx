import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-md">
            React 18 with Tailwind & DaisyUI
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Link</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col h-[84vh]">
        <img src={viteLogo} className="w-20 m-4" alt="Vite logo" />
        <img src={reactLogo} className="w-20 m-4" alt="React logo" />
        <h1 className="text-3xl text-red-500 ">Vite + React 👉 Frontend</h1>
      </div>
    </>
  );
}

export default App;
