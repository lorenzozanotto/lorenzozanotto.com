import WindowHandle from "./WindowHandle";

function ModalWindow() {
    return ( 
        <div className="flex flex-col m-10 h-[450px] w-[500px] border-2 bg-macos-window-canvas border-black shadow-macos-window">
            <WindowHandle />
            <div className="overflow-scroll flex-1 border border-black m-[6px] mt-0 shadow-retro-ui bg-white">
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
            </div>
        </div>
     );
}

export default ModalWindow;