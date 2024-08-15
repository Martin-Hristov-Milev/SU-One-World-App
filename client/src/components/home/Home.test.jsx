import { describe, expect, it } from "vitest";

import { render, screen } from "@testing-library/react";
import { BrowserRouter, } from "react-router-dom";
import '@testing-library/jest-dom/vitest'


import Home from './Home'


describe( 'Home', ()=>{

    it( 'should have headline', ()=>{
        render(<BrowserRouter> <Home /> </BrowserRouter>);

        const Headline = screen.getByText('ADVENTURE AWAITS, JUST A CLICK AWAY');
       
        expect(Headline).toBeVisible();

    
    
    });
   

})
