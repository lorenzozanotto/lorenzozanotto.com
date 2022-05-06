import RetroStrokes from "./RetroStrokes";

interface Props {
    onClose?: () => void
}

function WindowHandle(props: Props) {
    return (
        <div className="flex macHandle cursor-move">
            <div className="flex flex-1">
                <div onClick={props.onClose} className="cursor-pointer m-[6px] h-[12px] w-[12px] border border-black shadow-retro-ui hover:bg-black"></div>
                <div className="mt-[6px] flex-1">
                    <RetroStrokes lines={6} />
                </div>
            </div>
            <p className="flex-1 text-center font-mono font-bold text-sm mt-[2px]">About Lorenzo</p>
            <div className="mt-[6px] mr-[6px] flex-1">
                <RetroStrokes lines={6} />
            </div>
        </div>
    );
}

export default WindowHandle;