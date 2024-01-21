import MainPage from './Pages/MainPage'
import Playbar from './components/PlayBar/PlayBar'
import style from './global.module.scss'

const App = () => {
  return (

 
  <div className={style.wrapper}>
    <MainPage></MainPage>
    <Playbar></Playbar>
  </div>
  
  )
}

export default App
