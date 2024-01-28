import styled from "styled-components";

export const Title = styled.div`
    font-size: 4.8rem;
    font-weight: 900;
    text-align: center;
`;

export const TimerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    max-width: 50rem;
    height: 16rem;
    margin: 2rem;
    padding: 1.5rem 1rem;

    border-radius: 0.5rem;

    background-color: #2F3443;
    box-shadow: 5px 5px 3px 0px #000a;
`;

export const TimerItem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 1rem;
    overflow: hidden;
    width: 100%;
    height: 100%;

    border-radius: 1.5rem;

    background-color: #535864;
    box-shadow: 0px 0px 2px 3px #0007;

    &::before {
        content: "";
        
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50%;

        background-color: #0003;
    }
`;

export const TimerNumber = styled.span`
    font-size: 5.6rem;
    font-weight: 700;
`;

export const TimerText = styled.span`
    font-size: 2rem;
    font-weight: 300;
`;

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    max-width: 50rem;
    margin: 0.5rem;

    @media screen and (max-width: 50rem) {
        flex-direction: column;
        margin: 0 0.5rem;
    }
`;

export const Button = styled.button`
    position: relative;
    width: 100%;
    height: 4.5rem;

    margin: 0 1rem;
    overflow: hidden;
    border-radius: 3px;
    cursor: pointer;

    background: #0001;
    color: #E6E7E9;
    border: 3px solid #E6E7E9;

    @media screen and (max-width: 50rem) {
        margin: 1rem;
    }
`;