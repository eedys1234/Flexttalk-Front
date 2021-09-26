
import DropDownBox from "../../../components/dropdown/DropDownBox";

import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { selectRoom } from "../../../redux/reducers/RoomReducer";

const getName = item => {
    return item.roomName;
}

const getId = item => {
    return item.roomId;
}

const CommunityGroup = () => {

    const { selectedRoomTypeName, searchBookmarks, searchPrimary } = useSelector(state => state.rooms);

    const dispath = useDispatch();

    const onClickRoom = useCallback((e, selectedRoom)=> {
        e.stopPropagation();
        dispath(selectRoom(selectedRoom))
    }, []);
    
    return (
        <div className="communication_snb_group">
            <DropDownBox
                title={'즐겨찾는 목록'}
                list={searchBookmarks}
                opened={true}
                getName={getName}
                getId={getId}
                onClickRoom={onClickRoom}
            />
            <DropDownBox 
                title={selectedRoomTypeName}
                list={searchPrimary}
                opened={true}
                getName={getName}
                getId={getId}
                onClickRoom={onClickRoom}
            />
        </div>
    )
}


export default CommunityGroup;