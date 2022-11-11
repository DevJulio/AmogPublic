import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import home from "./pages/home";
import comitivas from "./pages/comitivas";
import garota from "./pages/garota";
import Tendas from "./pages/tendas";
import competicoes from "./pages/competicoes";
import Progress from "./pages/Construcao";
import ComitivasAdmin from "./pages/ademir/painel";
import GarotaMain from "./pages/garotaMain";
import Shows from "./pages/shows";
import TendasAdmin from "./pages/ademir/painelTendas";
import Login from "./pages/ademir/login";
import Dashborad from "./pages/ademir/dashboard";
import Ticket from "./pages/ticket";
import Days from "./pages/ticket/secondStep";
import Checkout from "./pages/checkout";
import ProvasAdmin from "./pages/ademir/painelProvas";
import TicketDay from "./pages/ticket/ticketReady";
import Burn from "./pages/ademir/burnTicket";
import EntradasAdmin from "./pages/ademir/entradas";
import DowloadTicket from "./pages/downloadTicket";
import CompeticaoAdm from "./pages/ademir/cadastraProva";
import CheckoutAdmin from "./pages/ademir/cadastraTicket";
import Blog from "./pages/blog";
import BlogDetail from "./pages/blog/detailPost";
import BlogPost from "./pages/ademir/blogPost";
import UpdateBlog from "./pages/blog/update";
import TvAmog from "./pages/tv";
import TvAmogAdm from "./pages/ademir/tv";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={home}></Route>
        <Route path="/blog" exact component={Blog}></Route>
        <Route path="/tvamog" exact component={TvAmog}></Route>
        <Route path="/Blog/Detalhes/" exact component={BlogDetail}></Route>
        <Route path="/Blog/atualizar" exact component={UpdateBlog}></Route>
        <Route path="/baixar-ingresso" exact component={DowloadTicket}></Route>
        <Route path="/construcao" exact component={Progress}></Route>
        <Route path="/compras/checkout" exact component={Checkout}></Route>
        <Route path="/compras/ticket" exact component={TicketDay}></Route>
        {/* <Route path="/compras/ingressos" exact component={Ticket}></Route> */}
        <Route path="/compras/burn/" exact component={Burn}></Route>
        <Route path="/compras/ingressos/dias" exact component={Days}></Route>
        <Route path="/adm1n/login" exact component={Login}></Route>
        <Route path="/adm1n/home" exact component={Dashborad}></Route>
        <Route path="/adm1n/blog" exact component={BlogPost}></Route>
        <Route path="/adm1n/comitivas" exact component={ComitivasAdmin}></Route>
        <Route path="/adm1n/tendas" exact component={TendasAdmin}></Route>
        <Route path="/adm1n/Provas" exact component={ProvasAdmin}></Route>
        <Route path="/adm1n/entradas" exact component={EntradasAdmin}></Route>
        <Route path="/adm1n/checkout" exact component={CheckoutAdmin}></Route>
        <Route path="/adm1n/TvAmogAdm" exact component={TvAmogAdm}></Route>
        <Route
          path="/adm1n/cadastro/provas"
          exact
          component={CompeticaoAdm}
        ></Route>
        <Route path="/cadastro/comitivas" exact component={comitivas}></Route>
        <Route path="/competicoes" exact component={competicoes}></Route>
        <Route path="/Garota" exact component={GarotaMain}></Route>
        <Route path="/Shows" exact component={Shows}></Route>
        <Route path="/GarotaAmog" exact component={garota}></Route>
        <Route path="/cadastro/Tenda" exact component={Tendas}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
