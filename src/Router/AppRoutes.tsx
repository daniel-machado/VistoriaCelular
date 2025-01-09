import { Routes, Route } from 'react-router-dom';
import Welcome from '../Screens/Welcome';
import IMEIInput from '../Screens/IMEIInput';
import ScratchCard from '../Screens/ScratchCard';
import Result from '../Screens/Result';
import AudioInput from '../Screens/AudioInput';
import AudioOutput from '../Screens/AudioOutput';
import Page404 from '../Screens/404Page';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/imei" element={<IMEIInput />} />
      <Route path="/scratch" element={<ScratchCard />} />
      <Route path="/audioinput" element={<AudioInput />} />
      <Route path="/audiooutput" element={<AudioOutput />} />
      <Route path="/result" element={<Result />} />
      {/* Página 404 para rotas inválidas */}
      <Route path="*" element={<Page404 />} />

    </Routes>
  );
};

export default AppRoutes;
