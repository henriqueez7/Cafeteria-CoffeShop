import Header from "./componentes/Header/Header"
import styles from "./App.module.css"
import SectionPrimary from "./componentes/SectionPrimary/FamososDia"


function App() {
  return (
    <div className={styles.container}>
      <Header />
      <SectionPrimary />
    </div>
  )
}

export default App
