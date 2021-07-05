import './App.css';
import Banner from './module/banner/banner.module'
import PreviewContent from './module/body/preview-content.module'
import InformationContent from './module/body/information-content.module'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <PreviewContent></PreviewContent>
      <InformationContent></InformationContent>
    </div>
  );
}

export default App;
