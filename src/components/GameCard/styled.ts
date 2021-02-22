import styled from "styled-components";
import Image from "next/image";

export const StyledLink = styled.div`
    display: inline-block;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.purple};
    border-radius: 5px;
    text-decoration: none;
`;

export const Img = styled.img`
    width: 100%;
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 24px;
    font-weight: 510;
    color: ${({ theme }) => theme.colors.white};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const Details = styled.div`
    padding: 20px;

    div {
        margin-right: 8px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        white-space: nowrap;
    }
`;

export const Description = styled.p`
    font-size: 16px;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const Genre = styled.p`
    padding: 2px 4px;
    margin: 0 8px 0 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: bold;
    background: ${({ theme }) => theme.colors.rose};
    float: right;
`;

export const IconImage = styled(Image)`
    fill: red;
`;
