import Categories from "./Components/Categories/Categories";
import Navbar from "./Components/Shared/Shared/Navbar";

async function getDuas(){
    const response = await fetch('http://localhost:3000/api')
    const data = await response.json()
    return data
}

export default async function Home() {
    const duas = await getDuas()
  return (
    <main className="flex min-h-screen flex-col">
    <Navbar />
    
    <div className="lg:flex">
      <div className="lg:w-64 p-4">
        <Categories duas={duas}/>
      </div>
      <div className="flex-1 bg-green-200 p-4">Main Content (Variable Width)
      </div>
      <div className="lg:w-48 bg-red-200 p-4">Right Column (300px)</div>
    </div>
  </main>
  )
}
