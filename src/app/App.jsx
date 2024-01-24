
import '../style/App.css'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import {About, Error, Home, Users, Item} from '../Pages' //Здесь можно просто указать папку, она автоматом будет искать файлы js

// импортируем необходимые компоненты из react-router-dom, предварительно его установив (npm i react-router-dom) NavLink нам нужен будет в хэдере. Отсюда можно удалить
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'


function App() {


//в Main пишем непосредственно контроллер. Routes - обертка конроллера 
//<Route path='/' -если после слэша в основном адресе будет пусто, отрисуй домашнюю страницу: element={<Home/>}></Route>, path='*' - если совпадений по именам страниц нет, обычно отрисовывается страница ошибки
//ВЕСЬ компонент оборачиваем в Router. Он следит за приложением и URL и отлавливает, какую страничку нужно отрисовать
//path='/item/:idUsers' -это динамический путь. idUsers-произвольное наименование. Логика пути(<Link to={`/item/${item.id}`} key={index}>) прописана в Users.jsx и Item.jsx
  return (
    <Router>
      <div className="globalContainer">
     <header><Header/></header>
     <main>
      <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/users' element={<Users/>}></Route>
<Route path='/item/:idUsers' element={<Item/>}></Route>
<Route path='*' element={<Error/>}></Route>

      </Routes>
     </main>
     <footer><Footer/></footer>
     </div>
    </Router>
  )
}

export default App
