import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from "./atoms"
import { useEffect } from "react"

const App = () => {
    return(
        <RecoilRoot>
            <MainApp />
        </RecoilRoot>
    )
}

const MainApp = () => {
    const networkNotificatoinCount = useRecoilValue(networkAtom)
    const jobsAtomCount = useRecoilValue(jobsAtom);
    const notificationsAtomCount = useRecoilValue(notificationsAtom)
    const [messagingAtomCount,setMessagingAtomcount] = useRecoilState(messagingAtom);

    const totalNotificationCount = useRecoilValue(totalNotificationSelector);

    //not follow use Memo
    // const totalNotificationCount = networkNotificatoinCount+jobsAtomCount+notificationAtomCount+messagingAtomCount ;
  return (
    <div>
        <button>Home</button>
        <button>My Network ({networkNotificatoinCount >=100 ? "99+" : networkNotificatoinCount})</button>
        <button>Jobs({jobsAtomCount})</button>
        <button>Messaging ({messagingAtomCount})</button>
        <button>Notification ({notificationsAtomCount})</button>

        <button>Me ({totalNotificationCount})</button>

        {/* <button onClick={() =>{setMessagingAtomcount(messagingAtomCount + 1)}}>Me</button> */}
    </div>
  )
}

export default App