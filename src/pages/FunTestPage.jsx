import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import useAppStore from "../store/appStore";
import PrimaryButton from "../components/Button/PrimaryButton";
import DestructiveButton from "../components/Button/DestructiveButton";
import SecondaryButton from "../components/Button/SecondaryButton";

const FunTestPage = () => {
    const { count, addCount, reduceCount } = useAppStore();
    return (
        <div>
            {" "}
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <p className="text-2xl">hello</p>
            <div className="card">
                <PrimaryButton text="Add Count" clickHandler={addCount} />
                <SecondaryButton text={`Count is now ${count}`} />
                <DestructiveButton text="Reduce Count" fullWidth={true} clickHandler={reduceCount} />
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

export default FunTestPage;
