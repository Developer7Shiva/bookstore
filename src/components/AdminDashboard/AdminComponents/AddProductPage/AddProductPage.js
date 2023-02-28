import React from "react"
import AddBookComponent from "../AddBookComponent"
import Sidebar from "../Sidebar/Sidebar"
// import { AddBookComponent } from "../AddBookComponent"
export const AddProductPage = () => {
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                {/* <Sidebar /> */}
                <AddBookComponent />
            </div>
        </div>
    )
}