import { render, screen } from "@testing-library/react"
import Card, { withPromotedLabel } from "../Card"
import Mock_Data from "../Mocks/CardMockData.json"
import "@testing-library/jest-dom"

it("should render card item",()=>{

    render(<Card resData = {Mock_Data}/>);
    
    const name = screen.getByText("SashMicks Bakery (Cake)");

    expect(name).toBeInTheDocument();

})

// it("should render card item with promoted label",()=>{

//     render(withPromotedLabel(Mock_Data))

// })