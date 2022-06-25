import styled from 'styled-components';

export const ListBox = styled.div`
  width: 280px;
  margin-left: auto;
  margin-right: auto;

  & .head {
    font-size: 19px;
    line-height: 1.21;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;

export const StyldeBookList = styled.ul`
  border-top: ${({ training }) => (training ? '1px solid #e0e5eb' : 'none')};

  & .book-item {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: ${({ training }) => (!training ? '20px 20px' : '20px 0px')};
    background-color: ${({ theme, training }) =>
      !training ? theme.colors.white : 'transparent'};
    box-shadow: ${({ training, theme }) =>
      !training ? theme.shadows.header : 'none'};
    border-bottom: 1px solid #e0e5eb;

    &:not(:last-child) {
      margin-bottom: ${({ training }) => (!training ? '16px' : '0')};
    }
  }

  & p {
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;
  }

  & .book-name {
    margin-bottom: 12px;
    display: flex;
    color: ${({ theme }) => theme.colors.defaultFont};
  }

  & .book-icon-wrapper {
    min-width: 34px;
    height: 17px;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  & .check-icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14px;
    height: 14px;
    border-radius: 1px;
    border: 1px solid ${({ theme }) => theme.colors.mainBrandColor};
  }

  & .info-item {
    display: grid;
    grid-template-columns: ${({ training }) =>
      !training ? '1fr 1fr' : '0.8fr 1.2fr'};
    gap: 0px 10px;
    margin-bottom: 14px;

    &:first-child {
      display: block;
      width: ${({ training }) => (!training ? '225px' : '260px')};
      margin-bottom: 12px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  & .info-label {
    color: ${({ theme }) => theme.colors.lightText};
    padding-left: 34px;
  }

  & .rating-block {
    display: flex;
  }
  & .star:not(:last-child) {
    margin-right: 3px;
  }
`;

export const ReviewButtonStyled = styled.button`
  margin-left: auto;
  margin-right: auto;
  padding: 12px;
  height: 40px;
  min-width: 127px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.reviewBtn};
  box-shadow: ${({ theme }) => theme.shadows.btnShadow};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition('background-color')};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.mainBrandColor};
  }
`;

export const Tray = styled.button`
  position: absolute;
  top: 20px;
  right: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;

  & svg {
    transition: ${({ theme }) => theme.transition('fill')};
  }

  & svg:hover,
  & svg:focus {
    fill: ${({ theme }) => theme.colors.mainBrandColor};
  }
`;

export const BooksListContainer = styled.div`
  margin-top: 100px;
  & div:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const HrLine = styled.div`
  height: 10px;
  background-color: green;
`;
