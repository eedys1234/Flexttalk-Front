
import { memo } from "react";

import styled from "styled-components";

const HeaderContentEtcItem = ({feature}) => {

    const { name, onClickItem } = feature;

    return (
        <StyledChatEtcLi
            onClick={onClickItem}
        >
            <StyledChatEtcBtn>
                 <span className="ic">{name}</span>
             </StyledChatEtcBtn>
         </StyledChatEtcLi>
    );
}

const StyledChatEtcLi = styled.li `
    float: left;
    margin-left: 4px;
`

const StyledChatEtcBtn = styled.button `
    padding : 5px 10px;
    width: auto;
    min-width: 25px;
    min-height: 25px;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    outline: 0;
    border: 1px solid #212529;
    border-radius: 3px;
    background: #212529;
    cursor: pointer;
`

export default memo(HeaderContentEtcItem);