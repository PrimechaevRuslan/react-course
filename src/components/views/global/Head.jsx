import React from "react";
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

const Head = (props) => {

    const { action } = props;

    return(
        <React.Fragment>
            <HeaderContainer>
                <HeaderCss.Logo>FINMANAGER</HeaderCss.Logo>
                <HeaderCss.MenuContainer>
                    <button onClick={() => {
                        action('main')
                    }} style={buttonCss}>Главная</button>
                    <button onClick={() => {
                        action('stat')
                    }} style={buttonCss}>Статистика</button>
                    <button style={buttonCss}>Планирование</button>
                </HeaderCss.MenuContainer>
            </HeaderContainer>
        </React.Fragment>
    );
};

export default Head;