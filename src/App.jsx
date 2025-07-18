import Axios from "./component/axios/Axios"
import MyChart from "./component/Chart/MyChart"
import DaisyNavbar from "./component/daisyNav/DaisyNavbar"
import Nav from "./component/nav/Nav"
import PriceList from "./component/priceList/PriceList"
import Navbar from "./prictis-component/NavBar/Navbar"



function App() {
 
  
  

  return (
    <>
    <h1 className="text-6xl bg-white text-black p-8">Daisy ui Nav Bar </h1>

      {/* <Nav></Nav> */}

      <Navbar></Navbar>

      <DaisyNavbar></DaisyNavbar>

      <PriceList></PriceList>
      <MyChart></MyChart>
    <Axios></Axios>
     

    
    </>
  )
}

export default App
