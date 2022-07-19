import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CardList from './components/CardList';
import Header from './components/Header';
import Footer from './components/Footer'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./store/reducers/ActionCreators";
import { MyTreeView } from './components/MyTreeView';

function App() {

  const dispatch = useDispatch();

  const { data } = useSelector(state => state.dataReducer);

  useEffect(() => {
    if(data.length === 0)
      dispatch(fetchData())
  }, [dispatch])
  
  return (
      <div className="App">
        <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Navigate replace to="/list" />} />
            <Route index path="/list" element={<CardList />} />
            <Route index path="/treeview" element={<MyTreeView />} />
            <Route path="/list/:page" element={<CardList />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    
  );
}

export default App;
