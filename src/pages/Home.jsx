import React from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import useAppStore from "../store/appStore";

const Home = () => {
  const { count, addCount, reduceCount } = useAppStore();
  return (
    <div>
      {" "}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="text-2xl">hello</p>
      <div className="card">
        <button onClick={addCount}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default Home;
