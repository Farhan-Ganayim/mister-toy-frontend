import { createRoot } from "react-dom/client"
import { RootCmp } from "./RootCmp"

createRoot(document.getElementById('root')).render(
    // <StrictMode>
    <RootCmp />
    //  </StrictMode>, 
)