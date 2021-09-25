
import DropDownBox from "../../../components/dropdown/DropDownBox";

import { useDispatch, useSelector } from "react-redux";
import { selectedRoom } from "../../../redux/reducers/RoomReducer";

const convertProps = (item) => {           
    console.log('[tag]', 'convertProps()')         
    return {
        ...item,
        id: item.roomId,
        name: item.roomName,
        count: 0,           
    };
}

const CommunityGroup = () => {

    const { selectedRoomTypeName, bookmarks, primary } = useSelector(state => state.rooms);

    return (
        <div className="communication_snb_group">
            <DropDownBox
                title={'즐겨찾는 목록'}
                list={bookmarks}
                opened={true}
                convertProps={convertProps}
            />
            <DropDownBox 
                title={selectedRoomTypeName}
                list={primary}
                opened={true}
                convertProps={convertProps}
            />
        </div>
    )
}


export default CommunityGroup;