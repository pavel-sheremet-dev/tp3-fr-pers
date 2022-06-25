import AuthorQuote from 'components/citation/Сitation';

import SignIn from 'components/auth/signIn/SignIn';

import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Loader } from 'components/common/loader/Loader';
import { MainStyled } from './registrationPage/RegistrationPage.styled';

const LoginPage = () => {
  const loading = useSelector(authSelectors.getLoading);
  return (
    <MainStyled>
      <SignIn />
      <AuthorQuote />
      {loading && <Loader />}
    </MainStyled>
  );
};

export default LoginPage;
