import { Home } from "@/components"
import { MovieList } from "@/components"
export default function Main() {
  return (
 <main>
  <div className="px-2 lg:px-20">
 <Home/>
  </div>
  <div className="px-5 lg:px-20">
 <MovieList/>
 <MovieList sector={'top_rated'}/>
 <MovieList sector={'upcoming'}/>
    
  </div>
 </main>
  )
}
