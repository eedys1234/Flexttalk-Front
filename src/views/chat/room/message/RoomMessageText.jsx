
import PopupBox from "../../../../components/popup/PopupBox";

import styled from "styled-components"

const RoomMessageText = ({messageOwner}) => {

    return (
        <StyledChatInnerArea
        messageOwner={messageOwner}
        >
        <StyledChatBalloon
            messageOwner={messageOwner}
        >
            <StyledChatReadCount
                messageOwner={messageOwner}
            >{1}</StyledChatReadCount>

            <span className="sp balloon" />
            <div className>안녕하세요.</div>
        </StyledChatBalloon>

        <StyledEtcBox
            messageOwner={messageOwner}
        >
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
    </StyledChatInnerArea>

    )
}


const StyledChatInnerArea = styled.div `
    position: relative;
    display: inline-block;
    ${({messageOwner}) => messageOwner 
    ? 
        `
            padding: 0 20px 0 140px;
            padding-left: 140px;
        `
    : 
        `
            padding: 0 140px 0 20px;
            `
    }
    
    
`

const StyledChatBalloon = styled.div `
    position: relative;
    display: inline-block;
    padding: 10px;
    background: ${({messageOwner}) => messageOwner ? `#ddfaff` : `#fff`} ;
    color: #000;
    font-size: 12px;
    font-family: 돋움,Dotum,Helvetica,Apple SD Gothic Neo,sans-serif;
    font-weight: 400;
    line-height: 17px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid transparent;
    box-shadow: none;
    &::hover {
        border: 1px solid #48a7ff;        
    }

    
}
`

const StyledChatReadCount = styled.span `

    ${({messageOwner}) => messageOwner 
    ? 
        `
            left: -46px;
            right: auto;
        `
    :
        `
            right: -46px;
            left: auto;
        `
    }


    text-align: right;
    position: absolute;
    bottom: -2px;
    color: #1c90fb;
    width: 30px;
    font-size: 12px;
    padding: 0 8px;
    background: transparent;
    text-align: left;

`

const StyledEtcBox = styled.div `
    
    ${({messageOwner}) => messageOwner 
    ? 
        `
            right: auto;
            left: 95px;
        `
    :
        `
            left: auto;
            right: 95px;    
        `
    }
    position: absolute;
    top: 50%;
    margin-top: -17px;
`

const StyledPopupBtn = styled.div `
    width: 35px;
    height: 35px;
    border: 0;
    background: none;
`

export default RoomMessageText; 