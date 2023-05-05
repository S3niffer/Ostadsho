import { useEffect, useState } from "react";

const ThemeChangerBtn = () => {

    const [theme, setTheme] = useState<"DARK" | "LIGHT">("LIGHT");

    useEffect(() => {

    }, [theme])

    return (
        <div
            className="btn bg-SecondaryGray dark:bg-main duration-500 w-16 h-12 py-[6px] px-[14px]"
            onClick={() => {
                setTheme((prv) => {
                    if (prv === "DARK") return "LIGHT";
                    return "DARK";
                });
            }}
        >
            <span
                className={`bg-white block w-[24px] h-full duration-500 rounded-md 
                ${theme === "DARK" ? "translate-x-2" : "-translate-x-5"}`}
            ></span>
        </div>
    );
};
export default ThemeChangerBtn;
