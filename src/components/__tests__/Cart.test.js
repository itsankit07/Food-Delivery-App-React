import RestaurantMenu from "../RestaurantMenu"
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../Mocks/ResMenu.json"
import {act} from "react-dom/test-utils"
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:() => Promise.resolve(MOCK_DATA)
    })
})

it("should load the restaurant page",async ()=>{
    await act(async ()=>{
        render(
            <Provider store = {appStore}>
        <RestaurantMenu/>
        </Provider>
        );
    })

    const category = screen.getByText("Vada Pavs (11)")

    expect(category).toBeInTheDocument();
})

it("should test the accordian header clicked",async ()=>{
    await act(async ()=>{
        render(
            <Provider store = {appStore}>
        <RestaurantMenu/>
        </Provider>
        );
    })

    const category = screen.getByText("Vada Pavs (11)")

    fireEvent.click(category);

    const item = screen.getByText("Classic Vada Pav");
    expect(item).toBeInTheDocument();

})

it("should test the header to be updated with cart items",async ()=>{
    await act(async ()=>{
        render(
            <BrowserRouter>
            <Provider store = {appStore}>
                <Header/>
              <RestaurantMenu/>
            </Provider>
            </BrowserRouter>
        );
    })

    const category = screen.getByText("Vada Pavs (11)")

    fireEvent.click(category);
    
    const btn = screen.getAllByRole("button",{name:"Add+"})

    fireEvent.click(btn[0]);

    expect(screen.getByText("🛒(1)")).toBeInTheDocument();
   

})

