import Desktop from "./Desktop";
import NotificationBar from "./NotificationBar";

function MainWindow() {
    return ( 
        <div className="flex flex-col h-full p-3">
            <NotificationBar />
            <Desktop />
        </div>
     );
}

export default MainWindow;