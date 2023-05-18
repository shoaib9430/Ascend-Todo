// import Home from "./Pages/Home";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRuter = ({ component: component, ...rest }) => {
  const user = useSelector((state) => {
    return state.user.currentUser;
  });

  return user ? <Outlet /> : <Navigate to="/login" />;
};

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<PrivateRuter />}>
          <Route exact path="/" element={<Home />} />
        </Route>

        {user ? (
          <Route exact path="/login" element={<Home />} />
        ) : (
          <Route exact path="/login" element={<Login />} />
        )}
        

        <Route exact path="/" element={<PrivateRuter />}>
          <Route exact path="/register" element={<Home />} />
        </Route>
        <Route exact path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
