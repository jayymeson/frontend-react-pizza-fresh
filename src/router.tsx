import { Route, Routes } from "react-router-dom"
import { RoutPath } from "../src/types/routes"
import Home from "../src/pages/Home"

const Router = () => {
    return(
        <Routes>
            <Route path={RoutPath.HOME} element={<Home />}/>
        </Routes>
    )
}

export default Router