import { ReactComponent as BookIcon } from 'assets/images/svg/icon-book.svg';
import {
  ListBox,
  ReviewButtonStyled,
  StyldeBookList,
} from './BooksListMobile.styled';
import { ReactComponent as OpStarIcon } from 'assets/images/svg/op-star.svg';
import { getCssVars } from 'styles/vars';

const emptyData = {
  author: '...',
  name: '...',
  pages: '...',
  rating: null,
  review: null,
  status: 'unread',
  year: '...',
};

const colorConfig = () => ({
  unread: '#A6ABB9',
  nowReading: '#FF6B08',
  finished: '#A6ABB9',
});

const BooksList = () => {
  return <div>OOPA</div>;
};

export default BooksList;

// const BooksListMobile = ({
//   data = [],
//   status = 'finished',
//   type = 'training',
//   listTitle = null,
// }) => {
//   const normalizeDate = data.length ? data : [emptyData];

//   return (
//     <ListBox>
//       {listTitle && <p className="head">{listTitle}</p>}

//       <StyldeBookList>
//         {normalizeDate.map(book => (
//           <li key={book._id} className="book-item">
//             <ul className="info-list">
//               <li className="info-item">
//                 <p className="info-label isHidden">Назва книги:</p>
//                 <p className="book-name">
//                   <span>
//                     <BookIcon
//                       fill={colorConfig()[book.status]}
//                       className="icon"
//                     />
//                   </span>
//                   {book.name}
//                 </p>
//               </li>

//               <li className="info-item">
//                 <p className="info-label">Автор:</p>
//                 <p className="info-name">{book.author}</p>
//               </li>
//               <li className="info-item">
//                 <p className="info-label">Рік:</p>
//                 {book.year && <p className="info-name">{book.year}</p>}
//               </li>
//               <li className="info-item">
//                 <p className="info-label">Стор.:</p>
//                 <p className="info-name">{book.pages}</p>
//               </li>
//               {book.status === 'finished' && (
//                 <li className="info-item">
//                   <p className="info-label">Рейтинг:</p>
//                   <div className="rating-block">
//                     {new Array(5).fill(0).map((item, id) => {
//                       const fill =
//                         id < book.rating ?? 0
//                           ? getCssVars().colors.mainBrandColor
//                           : 'none';
//                       return (
//                         <OpStarIcon fill={fill} key={id} className="star" />
//                       );
//                     })}
//                   </div>
//                 </li>
//               )}
//             </ul>
//             {book.status === 'finished' && (
//               <ReviewButtonStyled style={{ marginTop: '20px' }} type="button">
//                 Резюме
//               </ReviewButtonStyled>
//             )}
//           </li>
//         ))}
//       </StyldeBookList>
//     </ListBox>
//   );
// };
