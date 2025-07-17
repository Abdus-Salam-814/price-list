import DaisyNavbar from "./component/daisyNav/DaisyNavbar"
import Nav from "./component/nav/Nav"
import PriceList from "./component/priceList/PriceList"

function App() {
 
  
  

  return (
    <>
    <h1 className="text-6xl bg-white text-black p-8">Daisy ui Nav Bar </h1>

      <Nav></Nav>

      <DaisyNavbar></DaisyNavbar>

      <PriceList></PriceList>

    
    </>
  )
}

export default App
