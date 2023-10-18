import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import App from "../App"
import Sobre from "../pages/sobre"
import Servicos from "../pages/servicos"
import Produtos from "../pages/produtos"
import Projetos from "../pages/projetos"
import Contato from "../pages/contato"
import Blog from "../pages/blog"
import ProdutosBots from "../pages/produtos/bots"
import ProdutosAuto from "../pages/produtos/automatizacoes"
import ProdutosApp from "../pages/produtos/aplicacoes"
import PostPage from "../pages/blog/post"


export default function RouterManager() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/sobre" element={<Sobre />}/>
            <Route path="/servicos" element={<Servicos />}/>
            <Route path="/produtos" element={<Produtos />}/>
            <Route path="/produtos/aplicacoes" element={<ProdutosApp />}/>
            <Route path="/produtos/automatizacoes" element={<ProdutosAuto />}/>
            <Route path="/produtos/bots" element={<ProdutosBots />}/>
            <Route path="/projetos" element={<Projetos />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/blog/:post" element={<PostPage />}/>
            <Route path="/contato" element={<Contato />}/>
        </Routes>
    </Router>
  )
}