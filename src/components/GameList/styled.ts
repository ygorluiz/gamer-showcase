import styled from "styled-components";

export const List = styled.ul`
    display: block;
    max-width: 542px;
    margin: 0 auto;
    padding: 0 16px;
    box-sizing: border-box;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        max-width: ${({ theme }) => theme.breakpoints.tablet};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        max-width: ${({ theme }) => theme.breakpoints.desktop};
    }
`;

export const ListItem = styled.li`
    margin-bottom: 24px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: inline-block;
        max-width: 332px;
        margin-right: 21px;
        &:nth-of-type(even) {
            margin-right: 0;
        }
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        max-width: 312px;
        &:nth-of-type(even) {
            margin-right: 24px;
        }
        &:nth-of-type(3n + 3) {
            margin-right: 0;
        }
    }
`;
