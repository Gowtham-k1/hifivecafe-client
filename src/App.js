
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/login";
import Navbar from "./component/navbar";
import Home from "./component/home";
import Galary from "./component/galary/galary";
import Galary_list from "./component/galary/galary_list";
import Reservation from "./component/reservation/reservation";
import Sub_cat from "./component/reservation/sub_cat";
import Sub_cat_list from "./component/reservation/sub_cat_list";
import CLT_cart from "./component/reservation/CLT_cart";
import TB_cart from "./component/reservation/TB_cart";
import BTB_cart from "./component/reservation/BTB_cart";
import Menu from "./component/menu/menu";
import Sidebar from "./component/sidebar";
import Menu_cart from "./component/menu/menu_cart";
import Cake_sub from "./component/cake/cake_sub";
import Cake_cat from "./component/cake/cake_cat";
import Proceed_page from "./component/menu/proceed_page";

// ==========================

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/logIn" element={<Login />} />
          <Route path="/galary" element={<Galary />} />
          <Route path="/galary_list" element={<Galary_list />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/sub_cat" element={<Sub_cat />} />
          <Route path="/sub_cat_list" element={<Sub_cat_list />} />
          <Route path="/clt_cart" element={<CLT_cart />} />
          <Route path="/tb_cart" element={<TB_cart />} />
          <Route path="/btb_cart" element={<BTB_cart />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu_cart" element={<Menu_cart />} />
          <Route path="/cake_cat" element={<Cake_cat />} />
          <Route path="/cake_sub" element={<Cake_sub />} />



  
    
        </Routes>
      </BrowserRouter>


      {/* <Cake_cart/> */}
      {/* <Menu_cart/> */}
      {/* <Sidebar /> */}
      {/* <Navbar/> */}
      {/* <Login/> */}

    </>
  );
}

export default App;
