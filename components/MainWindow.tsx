import Desktop from "./Desktop";
import NotificationBar from "./NotificationBar";

function MainWindow() {
    return ( 
        <div className="flex flex-col h-full px-8 py-5">
            <NotificationBar />
            <Desktop />
        </div>
     );
}

export default MainWindow;