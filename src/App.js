
import ChatMain from "./views/chat/ChatMain";
import CreateRoomDlg from "./views/popup/CreateRoomDlg";
import DeportParticipantDlg from "./views/popup/DeportParticipantDlg";
import DisplayFilesDlg from "./views/popup/DisplayFilesDlg";
import InviteParticipantDlg from "./views/popup/InviteParticipantDlg";
import ParticipantsDlg from "./views/popup/ParticipantsDlg/ParticipantsDlg";

function App() {
  return (
    <>
      <ChatMain />
      <CreateRoomDlg />
      <ParticipantsDlg />
      <InviteParticipantDlg />
      <DeportParticipantDlg />
      <DisplayFilesDlg />
    </>
  );
}

export default App;
