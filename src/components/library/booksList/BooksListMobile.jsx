import { ReactComponent as BookIcon } from 'assets/images/svg/icon-book.svg';
import { ReactComponent as OpStarIcon } from 'assets/images/svg/op-star.svg';
import { ReactComponent as TrayIcon } from 'assets/images/svg/delete.svg';
import { ReactComponent as CheckIcon } from 'assets/images/svg/check.svg';
import { light } from 'styles/ligth.theme';

import {
  ListBox,
  ReviewButtonStyled,
  StyldeBookList,
  Tray,
} from './BooksListMobile.styled';

const colorConfig = () => ({
  unread: '#A6ABB9',
  nowReading: '#FF6B08',
  finished: '#A6ABB9',
});

const emptyData = {
  _id: '',
  author: '...',
  name: '...',
  pages: '...',
  rating: null,
  review: null,
  status: 'unread',
  year: '...',
};

const BooksListMobile = ({
  data = [],
  listTitle = null,
  training = false,
  bookSatus = null,
  tray = false,
}) => {
  const normalizeDate = data.length ? data : [emptyData];

  return (
    <ListBox>
      {listTitle && <p className="head">{listTitle}</p>}

      <StyldeBookList training={training}>
        {normalizeDate.map(book => (
          <li key={book._id} className="book-item">
            <ul className="info-list">
              <li className="info-item">
                <p className="info-label isHidden">Назва книги:</p>
                <p className="book-name">
                  <span className="book-icon-wrapper">
                    {!bookSatus ? (
                      <BookIcon
                        fill={colorConfig()[book.status]}
                        className="icon"
                      />
                    ) : (
                      <span className="check-icon-wrapper">
                        {book.status === 'finished' && <CheckIcon />}
                      </span>
                    )}
                  </span>
                  {book.name}
                </p>
              </li>

              <li className="info-item">
                <p className="info-label">Автор:</p>
                <p className="info-name">{book.author}</p>
              </li>
              <li className="info-item">
                <p className="info-label">Рік:</p>
                {book.year && <p className="info-name">{book.year}</p>}
              </li>
              <li className="info-item">
                <p className="info-label">Стор.:</p>
                <p className="info-name">{book.pages}</p>
              </li>
              {book.status === 'finished' && !training && (
                <li className="info-item">
                  <p className="info-label">Рейтинг:</p>
                  <div className="rating-block">
                    {new Array(5).fill(0).map((item, id) => {
                      const fill =
                        id < book.rating ?? 0
                          ? light.colors.mainBrandColor
                          : 'none';
                      return (
                        <OpStarIcon fill={fill} key={id} className="star" />
                      );
                    })}
                  </div>
                </li>
              )}
            </ul>
            {book.status === 'finished' && !training && (
              <ReviewButtonStyled style={{ marginTop: '20px' }} type="button">
                Резюме
              </ReviewButtonStyled>
            )}
            {tray && !bookSatus && (
              <Tray type="button">
                <TrayIcon fill="#A6ABB9" />
              </Tray>
            )}
          </li>
        ))}
      </StyldeBookList>
    </ListBox>
  );
};

export default BooksListMobile;
