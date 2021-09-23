
import PopupBox from "../../../../components/popup/PopupBox";

import styled from "styled-components";

const RoomMessageFile = () => {
    
    return(
        <StyledMessageAppending>
            <StyledMessageFile>
                <div>
                    <img src="https://api0.wehago.com/DCloudStorageServer/WehagoIMG//company_25/2019/03/19/5c07d270-4a01-11e9-9157-0b50511f2a6d_sl.jpg" />
                </div>
                <StyledMessageFileIn>
                    <img src className="img_file" />
                        <StyledFileNameEllipsis>표준임대차계약서.doc</StyledFileNameEllipsis>
                        <StyledFileSize>69.00KB</StyledFileSize>
                        <StyledFileDownloadBtn>
                            <span className="ic_download" />
                        </StyledFileDownloadBtn>
                </StyledMessageFileIn>
            </StyledMessageFile>
            <StyledEtcBox>
                <div className="popover_btn_set">
                    <div className="popoverbx">
                        <StyledPopupBtn>
                            <span className="sp_ic" />
                        </StyledPopupBtn>
                    </div>
                    <PopupBox>
                    </PopupBox>
                </div>
            </StyledEtcBox>
        </StyledMessageAppending>
    );
}

const StyledMessageAppending = styled.div `
    position: relative;
    display: inline-block;
    padding: 0 140px 0 20px;
` 

const StyledMessageFile = styled.div `
    position: relative;
    display: inline-block;
    border: 1px solid transparent;
    box-shadow: none;
    box-sizing: border-box;
    &:hover {
        border: 1px solid #48a7ff;
    }
`

const StyledMessageFileIn = styled.div `
    position: relative;
    clear: both;
    background: #ddfaff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 11px 45px 8px 46px;
    overflow: hidden;
`

const StyledFileNameEllipsis = styled.span `
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;
    text-overflow: ellipsis;
    display: block;
    font-size: 12px;
    font-family: 돋움,Dotum,Helvetica,Apple SD Gothic Neo,sans-serif;
    max-width: 306px;
    color: #4a4a4a;
`

const StyledFileSize = styled.span `
    display: block;
    margin-top: 3px;
    font-size: 12px;
    font-family: 돋움,Dotum,Helvetica,Apple SD Gothic Neo,sans-serif;
    color: #9a9a9a;
`

const StyledFileDownloadBtn = styled.button `
    position: absolute;
    top: 50%;
    right: 10px;
    margin-top: -16px;
    width: 32px;
    height: 32px;
    display: inline-block;
    border: none;
    background: 0 0;
    outline: 0;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
`
const StyledEtcBox = styled.div `
    position: absolute;
    top: 50%;
    left: auto;
    right: 95px;
    margin-top: -17px;
`

const StyledPopupBtn = styled.div `
    width: 35px;
    height: 35px;
    border: 0;
    background: none;
`

export default RoomMessageFile;