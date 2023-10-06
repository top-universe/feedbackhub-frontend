import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import useAppStore from "../store/appStore";
import PrimaryButton from "../components/Button/PrimaryButton";
import DestructiveButton from "../components/Button/DestructiveButton";
import SecondaryButton from "../components/Button/SecondaryButton";
import Input from "../components/Input/Input";
import { useState } from "react";

const FunTestPage = () => {
    const { count, addCount, reduceCount } = useAppStore();
    const [values, setValues] = useState({ random: "" });
    const [errors, setErrors] = useState({ random: "" });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        try {
            setValues((prevState) => ({ ...prevState, [name]: value }))

            if (!/^[a-z0-9 ]*$/gi.test(value)) {
                throw new Error("Alphanumeric characters only")
            }
            setErrors((prevState) => ({ ...prevState, [name]: "" }));
        } catch (error) {
            setErrors((prevState) => ({ ...prevState, [name]: error.message }));
        }
    }

    return (
        <div className="w-full min-h-screen flex justify-center items-center py-10">
            <div className="w-[320px]">
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
                    <div className="py-10">
                        <Input
                            value={values.random}
                            name="random"
                            label="Random"
                            disabled={true}
                            placeholder="Write anything"
                            changeHandler={handleChange}
                            errMsg={errors.random}
                        />
                    </div>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </div>
        </div>
    );
};

export default FunTestPage;
