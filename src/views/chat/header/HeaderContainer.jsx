import HeaderMenu from "./menu/HeaderMenu";
import HeaderContent from './feature/HeaderContent';
import styled from "styled-components";

const HeaderContainer = () => {
    return (
        <StyledHeader>
            <HeaderMenu />
            <HeaderContent 
                roomName={`문자 서비스`}
                roomEtcFeatureList={[
                    {
                        name: '참여자'
                    },
                    {
                        name: '초대'
                    },
                    {
                        name: '파일 모아보기'
                    },
                    {
                        name: '검색'
                    }
            ]}
            />
        </StyledHeader>
    )
}

const StyledHeader = styled.div `
    height: 48px;
    padding: 0 20px;
    background: #343a40;
`

export default HeaderContainer;