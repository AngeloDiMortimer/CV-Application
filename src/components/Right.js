import React from "react";

const Right = ({
    onPrint,
}) => {
    return (
        <>
            <button className="cursor-pointer mt-4 mb-2 p-2
                    rounded-md border-solid border-2 border-customBlue text-customBlue font-semibold
                    transition-all duration-300
                    hover:bg-customBlue hover:text-slate-50" onClick={onPrint}>Generate PDF</button>
        </>
    );
}

export default Right;