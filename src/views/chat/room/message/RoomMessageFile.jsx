
import PopupBox from "../../../../components/popup/PopupBox";

import styled from "styled-components";

const RoomMessageFile = () => {
    
    return(
        <div className="chat_appending">
            <div className="chat_file">
            <div>
                <img src="https://api0.wehago.com/DCloudStorageServer/WehagoIMG//company_25/2019/03/19/5c07d270-4a01-11e9-9157-0b50511f2a6d_sl.jpg" />
            </div>
            <div className="chat_file_in">
                <img src className="img_file" />
                <span className="file_name ellipsis">표준임대차계약서.doc</span>
                <span className="file_size">69.00KB</span>
                <button type="button" className="ft_btn btn_download">
                <span className="ic_download" />
                </button>
            </div>
            </div>
            <div className="chat_etc_btn">
            <div className="popover_btn_set">
                <div className="popoverbx">
                    <StyledPopupBtn>
                        <span className="sp_ic" />
                    </StyledPopupBtn>
                </div>
                <PopupBox>
                </PopupBox>
            </div>
            </div>
        </div>
    );
}

const StyledPopupBtn = styled.div `
    width: 35px;
    height: 35px;
    border: 0;
    background: none;
`

export default RoomMessageFile;