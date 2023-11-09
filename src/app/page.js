import Navbar from './Components/Shared/Shared/Navbar'
import Categories from './Components/Categories/Categories'
import CategoriesMenus from './Components/Categories/CategoriesMenus/CategoriesMenus'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <div className="lg:flex">
        <div className="lg:w-64 p-4">
          <Categories />
        </div>
        <div className="flex-1 bg-green-200 p-4">Main Content (Variable Width)
        </div>
        <div className="lg:w-48 bg-red-200 p-4">Right Column (300px)</div>
      </div>
    </main>
  )
}
