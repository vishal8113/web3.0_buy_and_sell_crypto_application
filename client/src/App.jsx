import { NavBar,Footer,Welcome, Services, Transactions } from "./components"

const App = () => {
  return (
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <NavBar/>
          <Welcome/>
        </div>
      <Services/>
      <Footer/>
      <Transactions/>
      </div>
  )
}

export default App
