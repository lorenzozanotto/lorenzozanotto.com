import WindowHandle from "./WindowHandle";

function ModalWindow() {
    return ( 
        <div className="m-10 h-[450px] w-[500px] border-2 bg-macos-window-canvas border-black shadow-macos-window">
            <WindowHandle />
        </div>
     );
}

export default ModalWindow;