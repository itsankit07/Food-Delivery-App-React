import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../Mocks/ResListMockData.json"
import { BrowserRouter } from "react-router-dom"
import {act} from "react-dom/test-utils"
import "@testing-library/jest-dom"


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : () =>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("should test the search feature in body",async()=>{
    await act (async ()=>render(<BrowserRouter><Body/></BrowserRouter>))

    const resCardInitial = screen.getAllByTestId("resCard")

    expect(resCardInitial.length).toBe(9);

    const button = screen.getByRole("button",{name : "Search"});

    const searchInput = screen.getByTestId("input");

    fireEvent.change(searchInput,{target:{value:"Pav"}});

    fireEvent.click(button);

    const resCard = screen.getAllByTestId("resCard")

    expect(resCard.length).toBe(2);

    // expect(button).toBeInTheDocument();
})


it("should test the search feature in body",async()=>{
    await act (async ()=>render(<BrowserRouter><Body/></BrowserRouter>))

    const resCardInitial = screen.getAllByTestId("resCard")

    expect(resCardInitial.length).toBe(9);

    const filterbutton = screen.getByRole("button",{name : "Top Rated Restaurant"});

    fireEvent.click(filterbutton);

    const topratedafter = screen.getAllByTestId("resCard")

    expect(topratedafter.length).toBe(2);

    // expect(button).toBeInTheDocument();
})