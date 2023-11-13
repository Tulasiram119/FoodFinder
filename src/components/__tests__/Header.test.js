import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header"
import { Provider } from "react-redux";
import appStrore from "../../utilis/appStore";

describe('Tesying of header componenet', () => {
  it("should load login button",()=>{
    render(<Provider store={appStrore}><Header /></Provider>);
    const login = screen.getByRole("button");
    except(login).toBeInTheDocument();
  })
})
