import * as S from './styles';
import { MainRoutes } from './routes/MainRoutes'; 
import { Header } from './components/Header';

function App () {
  return (
    <S.Container>
      <Header />
      <MainRoutes />
    </S.Container>
  );
};

export default App;