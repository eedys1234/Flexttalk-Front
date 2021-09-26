import { memo, useCallback, useState } from 'react'
import styled from "styled-components";
import DropDownList from "./DropDownList";

const DropDownBox = ({title = '', list = [], getName, getId, onClickRoom}) => {

    const [opened, setOpen] = useState(true);
    
    const onClickBox = useCallback(() => {
        setOpen(!opened)
    }, [opened]);

    return(
            <StyledDropDownBox
                onClick={onClickBox}
            > 
                <StyledDropDownTitleBox>
                    <StyledDropDownTitle>
                        <span>
                            {title} (<span className="number">{list.length || 0}</span>)
                        </span>
                        <StyledDropDownCollapse/>
                    </StyledDropDownTitle>
                </StyledDropDownTitleBox>
                <DropDownList
                    opened={opened}
                    list={list}
                    getName={getName}
                    getId={getId}
                    onClickRoom={onClickRoom}
                >
                </DropDownList>
            </StyledDropDownBox>
    )
}

const StyledDropDownBox = styled.div `
    background: #fff;
    border-radius: 5px;
    margin-top: 9px;
`

const StyledDropDownTitleBox = styled.div `
    position: relative;
    border-bottom: 1px solid #d9e4e5;
`

const StyledDropDownTitle = styled.a `
    display: block;
    height: 48px;
    line-height: 48px;
    padding: 0 50px 0 33px;
    font-size: 14px;
    cursor: pointer;
`

const StyledDropDownCollapse = styled.i `
    position: absolute;
    top: 21px;
    left: 17px;
    background-position: ${(props) => props.opened ? '-50px -50px' : '-175px -225px'};
    width: 8px;
    height: ${(props) => props.opened ? '4px' : '8px'};
    margin-top: ${(props) => props.opened ? '-2px' : '0'};
`

export default memo(DropDownBox);