import styled from 'styled-components';

const ItemListStyled = styled.div`
    display: flex;
    justify-content: center;
    width: 20%;
    padding: 60px 20px;
    margin-bottom: 36px;
    border-radius: 12px;
    box-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.16), inset 0 -0.0625rem 0 rgba(0, 0, 0, 0.12), 0 0 8px rgba(0, 140, 210, 0);
    background-color: black;

    ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }

    li {
        cursor: pointer;

        &:not(:last-of-type) {
            margin-bottom: 8px;
        }
    }
`;

export { ItemListStyled };