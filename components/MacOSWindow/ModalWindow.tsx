import Draggable, { DraggableBounds } from "react-draggable";
import WindowHandle from "./WindowHandle";
import abruzzo from "../../public/img/abruzzo-small.jpg"
import Image from "next/image";

interface Props {
    bounds?: DraggableBounds
}

function ModalWindow(props: Props) {
    return (
        <Draggable handle=".macHandle" bounds={props.bounds}>
            <div className="flex flex-col m-2 md:m-10 md:max-w-[450px] h-[560px] border-2 bg-macos-window-canvas border-black shadow-macos-window">
                <WindowHandle />
                <div className="overflow-scroll flex-1 border border-black m-[6px] mt-0 shadow-retro-ui bg-white">
                    <Image
                        src={abruzzo}
                        alt="A picture of Abruzzo, the hometown of Lorenzo"
                    />
                    <div className="m-2">
                        <h2 className="font-bold">Hello there, I'm Lorenzo 👋</h2>
                        <p className="text-[14px]">I'm an <span className="bg-yellow-100">engieer and multidisciplinary designer</span> based in the green hills of Italy.</p>
                        <p className="mt-2 text-[14px]">I love to take the leadership of small to mid-sized engineering teams to promote the best practices in software design and see truly unbelievable products come into life.</p>
                        <p className="mt-2 text-[14px]">Currently I’m directing the app and cloud team at Neato Robotics,
while on evenings I'm curating Engineering Dispatched, a journalthat covers the daily topics required to be an engineering manager</p>
                    </div>
                </div>
            </div>
        </Draggable>
    );
}

export default ModalWindow;