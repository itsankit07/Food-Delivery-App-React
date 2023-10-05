import { fireEvent, render , screen} from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it("should render header component with a Login Button",()=>{

    render(
    <Provider store = {appStore}>
        <BrowserRouter>
         <Header/>
    </BrowserRouter>
    </Provider>
    )
    // const loginButton = screen.getByText("Login");
    const loginButton = screen.getByRole("button",{name:"Login"});

    expect(loginButton).toBeInTheDocument();

})

it("should render header component with Cart",()=>{

    render(
    <Provider store = {appStore}>
        <BrowserRouter>
         <Header/>
    </BrowserRouter>
    </Provider>
    )
    // /cart/ means it should contain cart in text
    const cartitem = screen.getByText(/🛒/);

    expect(cartitem).toBeInTheDocument();

})

it("should change login button to logout button",()=>{

    render(
        <Provider store = {appStore}>
            <BrowserRouter>
             <Header/>
        </BrowserRouter>
        </Provider>
        )
    
    const loginButton = screen.getByRole("button",{name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button",{name: "Logout"});

    expect(logoutButton).toBeInTheDocument;
    

})