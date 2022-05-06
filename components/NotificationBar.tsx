import MenuItem from "./MenuItem";

function NotificationBar() {
    return ( 
        <div className="bg-white rounded-t-[12px] flex justify-between font-mono font-bold px-[12px]">
            <div>
                <MenuItem title="About" link="#" />
                <MenuItem title="Work" link="#" />
                <MenuItem title="Writing" link="#" />
                <MenuItem title="Leadership" link="#" />
                <MenuItem title="Help" link="#" />
            </div>
            <div>
                <MenuItem title="11:38AM" />
            </div>
        </div>
     );
}

export default NotificationBar;