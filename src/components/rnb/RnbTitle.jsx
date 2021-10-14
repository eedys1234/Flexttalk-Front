import styled from "styled-components"

const RnbTitle = ({title, onClose}) => {

    return (
        <StyledTitleBx>
            <StyledTitleText>{title}</StyledTitleText>
            <StyledCloseBx>
                <StyledCloseBtn onClick={onClose}>
                    <StyledCloseIc>닫기</StyledCloseIc>
                </StyledCloseBtn>
            </StyledCloseBx>
        </StyledTitleBx>
    )
}

const StyledTitleBx = styled.div `
    position: absolute;
    top: 0;
    right: 26px;
    left: 26px;
    z-index: 10;
    height: 50px;
    border-bottom: 1px solid #626262;
    word-break: break-all;
`

const StyledTitleText = styled.h1 `
    float: left;
    margin-top: 2px;
    font-size: 20px;
    line-height: 48px;
    color: #4a4a4a;
    white-space: nowrap;
`

const StyledCloseBx = styled.div `
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
`

const StyledCloseBtn = styled.button `
    display: inline-block;
    width: auto;
    position: relative;
    border: 0;
    background: 0 0;
    font-weight: 400;
    text-align: center;
    vertical-align: top;
    box-sizing: border-box;
    cursor: pointer;
    outline: 0;
`

const StyledCloseIc = styled.span `
    width: 13px;
    height: 13px;
    background-position: -140px -275px;
    display: inline-block;
    overflow: hidden;
    line-height: 100em;
    vertical-align: top;
    background: url(https://static.wehago.com/imgs/common/sp_lux.png) 0 0 no-repeat;
`

export default RnbTitle;