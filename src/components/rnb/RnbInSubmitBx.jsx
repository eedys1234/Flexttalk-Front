
import styled from "styled-components";

const RnbInSubmitBx = ({onChange}) => {

    return (
        <StyledSubmitBx>
            <StyledSearchBx>
                <StyledSearchInput onChange={onChange}>
                </StyledSearchInput>
                <StyledSearchBtn>
                    <svg focusable="false" viewBox="0 0 24 24" style={{display: 'inline-block', fill: 'rgb(28, 144, 251)', height: '14px', width: '16px', userSelect: 'none', textAlign: 'center', verticalAlign: 'middle', marginBottom: '2px'}}>
                        <path d="M23.94,22.054l-5.712-5.677c3.033-3.973,2.775-9.656-0.857-13.287c-1.979-1.981-4.574-2.97-7.17-2.97 c-2.593,0-5.188,0.989-7.167,2.969c-3.958,3.958-3.958,10.376,0,14.337c1.979,1.98,4.574,2.971,7.167,2.971 c2.204,0,4.383-0.756,6.207-2.182l5.708,5.665L23.94,22.054z M4.374,16.083c-1.557-1.555-2.414-3.624-2.414-5.826 c0-2.201,0.857-4.27,2.412-5.827c1.555-1.557,3.625-2.415,5.829-2.415s4.27,0.858,5.826,2.413 c1.562,1.557,2.417,3.626,2.417,5.827c0,2.202-0.86,4.272-2.417,5.828c-1.553,1.559-3.625,2.416-5.826,2.416 C7.999,18.499,5.928,17.642,4.374,16.083z" />
                    </svg>
                </StyledSearchBtn>
            </StyledSearchBx>
        </StyledSubmitBx>
    )
}

const StyledSubmitBx = styled.div `
    margin: 13px 0px 0px;
`

const StyledSearchBx = styled.div `
    margin: 0px;
    padding: 6px 24px 0px 6px;
    position: relative;
    border: 1px solid rgb(219, 219, 219);
    background: rgb(255, 255, 255);
    height: 19px;
    line-height: 19px;	
` 

const StyledSearchInput = styled.input `
    margin: 0px;
    padding: 0px;
    display: block;
    font-size: 12px;
    font-family: 돋움, Dotum, Helvetica, "Apple SD Gothic Neo", sans-serif;
    color: rgb(26, 26, 26);
    letter-spacing: -0.5px;
    vertical-align: top;
    border: 0px none;
    background: transparent;
    outline: none;
    width: 100%;
`

const StyledSearchBtn = styled.button `
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    outline: none;
    position: absolute;
    text-align: center;
    vertical-align: top;
    border-radius: 0px;
    border: 0px none;
    background: transparent;
    color: rgb(74, 74, 74);
    text-decoration: none;
    font-family: 돋움, Dotum, Helvetica, "Apple SD Gothic Neo", sans-serif;
    font-size: 12px;
    height: 27px;
    letter-spacing: -0.5px;
    line-height: initial;
    padding: 0px;
    width: 27px;
    margin: 0px;
    top: 0px;
    right: 0px;
`

export default RnbInSubmitBx;