import styled from 'styled-components';

const RandomPlanetStyled = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 60px;
    margin-bottom: 36px;
    border-radius: 12px;
    box-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.16), inset 0 -0.0625rem 0 rgba(0, 0, 0, 0.12), 0 0 8px rgba(0, 140, 210, 0);
    background-color: black;

    img {
        width: 200px;
        height: 200px;
        margin-right: 46px;
        object-fit: contain;
    }

    div {
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
    }

    p {
        margin: 0;
        margin-bottom: 18px;
        font-size: 36px;
    }

    dl {
        display: flex;
        justify-content: space-between;
        margin: 0;

        &:not(:last-of-type) {
            margin-bottom: 18px;
        }

        dt,
        dd {
            margin: 0;
        }

        dt {
            margin-right: 30px;
        }
    }
`;

export { RandomPlanetStyled };