import { render,screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe('this testing of contact us page', () => {
    it('should show heading element on screen', () => {
  
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    })
    
    it('should show submit  on screen', () => {
      
        render(<Contact />);
    
        const button = screen.getByText("Submit");
    
        expect(button).toBeInTheDocument();
    })
    
    it('should show inputs  on screen', () => {
      
        render(<Contact />);
    
        const heading = screen.getAllByRole("textbox");
    
        expect(heading.length).toBe(2);
    })
})


