
import styled from "styled-components";
import RoomMessageFile from "./RoomMessageFile";
import RoomMessageText from "./RoomMessageText";

const RoomMessage = ({messageOwner = false, isFile = false,}) => {

    return (
        <div className="chat_wrap">
            {
                messageOwner 
                ? 
                <StyledDateBox>
                    <StyledDateText>{`2020-02-21 11:56`}</StyledDateText>
                </StyledDateBox>
                :
                <StyledNameBox
                    messageOwner={messageOwner}
                >
                    <StyledNameBoxBtn>
                        이정환
                    </StyledNameBoxBtn>
                    <StyledNameBoxText>{`2020-02-29 12:00`}</StyledNameBoxText>
                </StyledNameBox>
            }
            {
                isFile ? 
                    <RoomMessageFile
                        messageOwner={messageOwner}
                    >
                    </RoomMessageFile>
              
                :
                    <RoomMessageText
                        messageOwner={messageOwner}
                    >
                    </RoomMessageText>
            }
        </div>

    )
}

const StyledDateBox = styled.div `
    display: block;
    padding-left: 17px;
    margin-bottom: 3px;
`

const StyledDateText = styled.span `
    font-size: 12px;
    font-family: 돋움,Dotum,Helvetica,Apple SD Gothic Neo,sans-serif;
    color: #8d8d8d;
    padding-right: 21px;
`

const StyledNameBox = styled.div `
    display: block;
    margin-bottom: 3px;
    padding-left: 17px;
`

const StyledNameBoxBtn = styled.button `
    display: inline-block;
    margin-right: 10px;
    font-size: 14px;
    font-weight: 600;
    position: relative;
    width: auto;
    border: none;
    background: 0 0;
    outline: 0;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
`

const StyledNameBoxText = styled.span `
    font-size: 12px;
    font-family: 돋움,Dotum,Helvetica,Apple SD Gothic Neo,sans-serif;
    color: #8d8d8d;
`

 

export default RoomMessage;