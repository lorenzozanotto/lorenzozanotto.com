import dayjs from "dayjs";
import { useEffect, useState } from "react";
import LogoButton from "./LogoButton";
import MenuItem from "./MenuItem";

function NotificationBar() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setTimeout(() => {
            setTime(new Date())
        }, 1000);
    }, [time])

    return ( 
        <div className="bg-white rounded-t-main-window-radius flex justify-between font-mono font-bold px-[12px]">
            <div>
                <LogoButton />
                <MenuItem title="About" link="#" />
                <MenuItem title="Work" link="#" />
                <MenuItem title="Writing" link="#" />
                <MenuItem title="Leadership" link="#" />
                <MenuItem title="Help" link="#" />
            </div>
            <div>
                <MenuItem title={dayjs(time).format("ddd D MMM HH:mm:ss")} />
            </div>
        </div>
     );
}

export default NotificationBar;