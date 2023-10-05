import {screen,render} from "@testing-library/react"
import "@testing-library/jest-dom"
import Contact from "../Contact"



describe("grouping",()=>{

    test("should load contact us Component",()=>{

        render(<Contact/>)
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    })
    
    test("should load button in contact Component",()=>{
    
        render (<Contact/>)
    
        const button = screen.getByText("Submit");
    
        expect(button).toBeInTheDocument();
    })

})