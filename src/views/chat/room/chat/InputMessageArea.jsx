
import styled from "styled-components";

const MessageInputArea = () => {

    return (
        <StyledInputArea>
            <StyledInputAreaInner>
                <StyledMentionContainer>
                    <StyledMentionContent contentEditable="true"
                    ></StyledMentionContent>
                    {/* <StyledMention>
                        <button type="button" className="ft_btn btn_mention">
                            <span className="ic_mention" />
                        </button>
                    </StyledMention>
                    <StyledEmotion>
                        <button type="button" className="ft_btn btn_emotion">
                            <span className="ic_emotion" />
                        </button>
                    </StyledEmotion> */}
                    <StyledSubmitBtn>전송</StyledSubmitBtn>
                </StyledMentionContainer>
            </StyledInputAreaInner>
        </StyledInputArea>
    )
}

const StyledInputArea =  styled.div `
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 20px 21px;
    background: #dfe0e4;
    z-index: 10;
`

const StyledInputAreaInner = styled.div `
    position: relative;
    margin-top: 3px;
    border-radius: 5px;
    background: #fff;
`

const StyledMentionContainer = styled.div `
    position: relative;
    height: auto;
`

const StyledMentionContent = styled.div `
    min-height: 52px;
    padding: 20px 100px 18px 30px;
    color: #010101;
    font-size: 14px;
    font-family: 돋움,Dotum,Helvetica,Apple SD Gothic Neo,sans-serif;
    line-height: 20px;
    box-sizing: border-box;
    max-height: 150px;
    overflow: hidden;
    overflow-y: auto;
`

const StyledSubmitBtn = styled.button `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 9px 20px;
    color: #fff;
    background: #8da6bf;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 14px;
    font-weight: 700;
    display: inline-block;
    width: auto;
    border: none;
    outline: 0;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
`

export default MessageInputArea;