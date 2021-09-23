import styled from "styled-components";

const DropDownItem = ({item}) => {

    const { selected, name, count } = item;

    return(
        <StyledGroupBox
            selected={selected}
        >
        <StyledGroupBoxText>
            <div className="img_thum">
                <div className="pic_wrap">
                    <span className="use_member"></span>
                    <span className="use_member"></span>
                    <span className="use_member"></span>
                    <span className="use_member"></span>
                </div>
            </div>
            <StyledGroupBoxTextEllipse>
                <StyledGroupBoxTextEllipseLeft>{name}</StyledGroupBoxTextEllipseLeft>
                <StyledGroupBoxTextEllipseRight>{count}</StyledGroupBoxTextEllipseRight>
            </StyledGroupBoxTextEllipse>
        </StyledGroupBoxText>
        <StyledBookMarkBtn>
            <StyledBookMarkIc/>
        </StyledBookMarkBtn>
        <StyledAlarmBox>
            <StyledAlarmBtn>
                <StyledAlarmIc />
            </StyledAlarmBtn>
        </StyledAlarmBox>

    </StyledGroupBox>

    )
}

const StyledGroupBox = styled.li `
    position: relative;
    height: 48px;
    line-height: 48px;
    padding: 0 50px 0 33px;
    font-size: 13px;
    cursor: pointer;
    
    ${(props) => props.selected ? 
    `
    background-color: #d9f4ff;
    margin: 0 -7px;
    border-radius: 5px;
    border-color: #e5edf0 #c6d4de #c0d7eb;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    box-shadow: 0 1px 2px rgba(18,105,179,.3);
    `        
    : ''}   
`

const StyledGroupBoxText = styled.a `
    display: block;
    height: 100%;
    padding: 0 52px 0 12px;
`

const StyledGroupBoxTextEllipse = styled.div `
    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 100%;
`

const StyledGroupBoxTextEllipseLeft = styled.em `
    font-style: normal;
`

const StyledGroupBoxTextEllipseRight = styled.span `
    font-size: 11px;
`

const StyledBookMarkBtn = styled.button `
    position: absolute;
    width: 17px;
    height: 17px;
    outline: 0;
    border: none;
    background: 0 0;
    cursor: pointer;
    top: 4px;
    left: 11px;
    z-index: 6;
`
const StyledBookMarkIc = styled.span `
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 16px;
    margin-top: -8px;
    margin-left: -8px;
    background-position: ${(props) => props.added ? '-194px -483px' : '-215px -483px'};
`

const StyledAlarmBox = styled.div `
    position: absolute;
    top: 50%;
    right: 5px;
    width: 20px;
    height: 20px;
    border: none;
    background: 0 0;
    outline: 0;
    cursor: pointer;
    margin-top: -9px;
`

const StyledAlarmBtn = styled.button `
    position: absolute;
    top:50%;
    margin-top: -10px;
    margin-right: -10px;
    width: 20px;
    height: 20px;
    border: none;
    background: 0 0;
    outline: 0;
    cursor: pointer;
`

const StyledAlarmIc = styled.span `
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -7px;
    margin-left: -7px;
    width: 14px;
    height: 13px;
    background-position: -324px -484px;
`

export default DropDownItem;