import styled from 'styled-components';

export const Container = styled.div`
    height: 80px;
    padding: 0 30px;
    background: ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.headerTitle};

    display: flex;
    align-items: center;
`;