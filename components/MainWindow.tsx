import Desktop from "./Desktop";
import NotificationBar from "./Bars/NotificationBar";

function MainWindow() {
    return ( 
        <div className="flex flex-col h-full p-5">
            <NotificationBar />
            <Desktop />
        </div>
     );
}

export default MainWindow;