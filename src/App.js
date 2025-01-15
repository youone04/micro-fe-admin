
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './utils/const-routes/const.routes';

function App(props) {
  return (
    <BrowserRouter >
     <Routes>
      <Route path="/" element={<p>Module admin running!</p>} />
      {
        routes.map((route, index) => {
          const Component = route.component; // Ambil komponen dari route
          return (
            <Route
              key={index}
              path={route.path}
              element={<Component {...props} />} // Lempar navigate dan props lainnya
            />
          );
        })
      }

      </Routes>
    </BrowserRouter>
  );
}

export default App;
