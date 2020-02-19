import styled from 'styled-components';

const ItemListStyled = styled.div`
    display: flex;
    justify-content: center;
    width: 33.3%;
    padding: 60px;
    margin-bottom: 36px;
    border-radius: 12px;
    box-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.16), inset 0 -0.0625rem 0 rgba(0, 0, 0, 0.12), 0 0 8px rgba(0, 140, 210, 0);
    background-color: black;

    li {
        cursor: pointer;
    }
`;

export { ItemListStyled };