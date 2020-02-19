import styled from 'styled-components';

const HeaderStyled = styled.header`
    display: flex;
    align-items: center;

    h1 {
        margin-right: 64px;
    }

    nav {
        a {
            color: white;
            text-decoration: none;

            &:not(:last-of-type) {
                margin-right: 15px;
            }
        }
    }
`;

export { HeaderStyled };