import styled from "styled-components";

import RnbTitle from './RnbTitle';
import RnbIn from './RnbIn';

const Rnb = ({rnbView, rnbTitle, list, onChange, onClose}) => {

    return (
        <StyledRnb
            view={rnbView}
        >
            <RnbTitle 
                title={rnbTitle}
                onClose={onClose}
            />
            <RnbIn
                list={list}
                onChange={onChange}
            />
        </StyledRnb>
    );
}

const StyledRnb = styled.div `
    display: ${({view}) => view ? 'block' : 'none'};
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1110;
    width: 442px;
    background: #fff;
    box-shadow: -4px 0 25px -15px #000;
    word-break: break-all;
    -webkit-transition: right .25s;
    transition: right .25s;
`

export default Rnb;