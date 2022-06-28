import { render } from "react-dom"
import h from "components/htm_create_element"
import Clock from "components/clock"

render(
    h`<h1>Hello world!</h1><${Clock}/>`,
    document.getElementById("root")
)