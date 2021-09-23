
import styled from "styled-components";

const MoveRecentlyMessageArea = () => {

    return (
        <StyledMoveRecentlyMessageArea>
            <StyledMoveRecentlyBtn>
                최근 대화내용으로 이동
            </StyledMoveRecentlyBtn>
        </StyledMoveRecentlyMessageArea>
    )
}

const StyledMoveRecentlyMessageArea = styled.div `
    position: absolute;
    bottom: 98px;
    left: 20px;
    z-index: 10;
`

const StyledMoveRecentlyBtn = styled.button `
    position: relative;
    display: block;
    line-height: 36px;
    border-radius: 5px;
    padding-left: 13px;
    width: 202px;
    height: 35px;
    color: #000;
    background: #fffbde;
    font-size: 12px;
    font-weight: 700;
    font-family: 돋움,Dotum,Helvetica,Apple SD Gothic Neo,sans-serif;
    text-align: left;
    box-shadow: 2px 3px 10px 0 rgba(0,0,0,.2);
    border: 0;
    outline: 0;
    cursor: pointer;
`

export default MoveRecentlyMessageArea;