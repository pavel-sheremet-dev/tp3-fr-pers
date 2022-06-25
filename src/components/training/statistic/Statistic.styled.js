import styled from 'styled-components';
import SmallLine from 'assets/images/svg/smLine.svg';
import LargeLine from 'assets/images/svg/lgLine.svg';

export const Title = styled.h2`
  display: flex;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.2;
  justify-content: center;
  align-items: center;
  margin: 4px;

  &::before,
  ::after {
    content: url(${SmallLine});
    margin-top: -5px;
    margin-left: 4px;
    margin-right: 4px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    justify-content: start;
    align-items: start;
    font-size: 14px;
    margin: 7px;
    margin-left: 96px;
    &::before {
      content: none;
    }
    &::after {
      content: url(${LargeLine});
      margin-top: -5px;
      margin-left: 8px;
      margin-right: 0;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    font-size: 12px;
    margin-top: 0;
    margin-bottom: 4px;
    margin-left: 0;
    justify-content: center;

    &::before,
    &::after {
      content: url(${SmallLine});
      margin-top: -5px;
      margin-left: 4px;
      margin-right: 4px;
    }
  }
`;

export const List = styled.ul`
  width: 245px;
  padding-right: 7px;
  margin: 0 auto;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-left: 96px;
    height: 127px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin: 0 auto;
    height: 107px;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  margin-top: 4px;
  margin-bottom: 4px;
`;

export const Date = styled.span`
  width: 75px;
  color: ${({ theme }) => theme.colors.defaultFont};
  text-align: center;
`;

export const Time = styled.span`
  width: 65px;
  color: ${({ theme }) => theme.colors.lightText};
  text-align: center;
`;

export const Page = styled.span`
  display: inline-block;
  margin-right: 5px;
  text-align: end;
  color: ${({ theme }) => theme.colors.defaultFont};
`;

export const PagesName = styled.span`
  width: 85px;

  text-align: end;
  color: ${({ theme }) => theme.colors.lightText};
`;
