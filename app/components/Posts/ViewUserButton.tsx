"use client";

import React from "react";

interface ViewUserButtonProps {
    userId: number
}

const ViewUserButton: React.FC<ViewUserButtonProps> = (userId) => {
    const handleClick = () => alert('userId : ${userId}');
    return (
         <>
            <button onClick={handleClick}>Lihat User</button>
         </>
    );
};

export default ViewUserButton
