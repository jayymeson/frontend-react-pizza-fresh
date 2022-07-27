import { Route, Routes } from "react-router-dom"
import { RoutPath } from "types/routes"
import Home from "pages/Home"

const Router = () => {
    return(
        <Routes>
            <Route path={RoutPath.HOME} element={<Home />}/>
        </Routes>
    )
}

export default Router