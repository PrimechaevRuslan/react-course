import React from "react";
import { useNavigate } from "react-router-dom";
import css from "../../../styles/styles.css";

const buttonCss = {
    display: 'block',
    padding: '10px 14px 12px',
    borderRadius: '6px',
    backgroundColor: '#80F347',
    cursor: 'pointer',
    marginLeft: '10px' 
};

const { HeaderContainer, HeaderCss } = css;

const Head = () => {

    const navigate = useNavigate();

    return(
        <React.Fragment>
            <HeaderContainer>
                <HeaderCss.Logo>FINMANAGER</HeaderCss.Logo>
                <HeaderCss.MenuContainer>
                    <button onClick={() => navigate('/main')} style={buttonCss}>Главная</button>
                    <button onClick={() => navigate('/stat/расход')} style={buttonCss}>Статистика</button>
                    <button onClick={() => navigate('/plan')} style={buttonCss}>Планирование</button>
                </HeaderCss.MenuContainer>
            </HeaderContainer>
        </React.Fragment>
    );
};

export default Head;