import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navigation from "../components/Navigation";
import NotesList from "../components/NotesList";
import CreateNote from "../components/CreateNote";
import CreateUser from "../components/CreateUser";

export default function Routes(){
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/pokemon/:id">
                    <PokeDetail/>
                </Route>
                <Route>
                    <NotFound/>
                </Route>
            </Switch>
        </Router>
    );
}