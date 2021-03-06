
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deportParticipantPopupClose } from '../../redux/reducers/CmmnReducer';
import { search } from '../../redux/reducers/ParticipantReducer';

import Rnb from "../../components/rnb/Rnb";

const DeportParticipantDlg = () => {

    const dispatch = useDispatch();

    const onChange = useCallback((e) => {
        const { value } = e.target;
        dispatch(search(value));
    }, [dispatch]);

    const onClose = useCallback(() => {
        dispatch(deportParticipantPopupClose());
    }, [dispatch]);

    const { deportParticipnatPopupView } = useSelector(state => state.cmmn);
    const { searchParticipants } = useSelector(state => state.pariticipants);

    const mapSearchParticipants = searchParticipants.map((participant) => ({
        id: participant.participantId,
        name: '',
        email: participant.userEmail,
        isMark: participant.isOwner,
        isMarkText: '마스터',
    }));


    return (
        <Rnb 
            rnbView={deportParticipnatPopupView}
            rnbTitle={'참여자 리스트'}
            list={mapSearchParticipants}
            onChange={onChange}
            onClose={onClose}
        />
    );
}

export default DeportParticipantDlg;
