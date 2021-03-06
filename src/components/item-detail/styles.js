import styled from 'styled-components';

const ItemDetailStyled = styled.div`
    display: flex;
    justify-content: center;
    width: 78%;
    margin-left: auto;
    padding: 60px;
    margin-bottom: 36px;
    border-radius: 12px;
    box-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.16), inset 0 -0.0625rem 0 rgba(0, 0, 0, 0.12), 0 0 8px rgba(0, 140, 210, 0);
    background-color: black;

    img {
        width: auto;
        max-width: 300px;
        height: 275px;
        object-fit: contain;
        margin-right: 46px;
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

export { ItemDetailStyled };