import { useState } from "react";

function useToggle() {
    const [open,setOpen] = useState(false);

    function handleOpen() {
        setOpen(!open)
    }

    return {
        handleOpen,
        open
    }
}

export default useToggle;