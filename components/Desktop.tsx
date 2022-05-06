import { useEffect, useRef, useState } from "react";
import { DraggableBounds } from "react-draggable";
import ModalWindow from "./MacOSWindow/ModalWindow";

function Desktop() {
    return (
        <div className="w-full flex-1 mt-[2px] rounded-b-main-window-radius bg-desktop-background">
            <ModalWindow />
        </div>
    );
}

export default Desktop;