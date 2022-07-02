import {render} from "react-dom"
import h from "components/htm_create_element"
import Candidates from "components/Candidates"

render(
    h`<${Candidates}/>`,
    document.getElementById("root")
)