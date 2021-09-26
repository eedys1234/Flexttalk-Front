
import HeaderContentEtcItem from "./HeaderContentEtcItem";

import styled from "styled-components";
import { useCallback } from "react";

const HeaderContenEtcList = ({roomEtcFeatureList}) => {


    return (
        <StyledChatEtcUl>
        {
            roomEtcFeatureList.map((feature, index) => {
                return (
                    <HeaderContentEtcItem
                        key={index}
                        feature={feature}
                    >
                    </HeaderContentEtcItem>
                )
            })
        }
        </StyledChatEtcUl>
    );
}

const StyledChatEtcUl = styled.ul `
    display: inline-block;
    vertical-align: middle;
    &::after {
        display: block;
        clear: both;
        content: '';        
    }
`

export default HeaderContenEtcList;