
import { describe, expect, it } from "vitest";

import { render, screen } from "@testing-library/react";
import { BrowserRouter, } from "react-router-dom";
import '@testing-library/jest-dom/vitest'


import AllDestinations from './AllDestinations'


describe( 'AllDestinations has a headline', ()=>{

    it( 'should have headline', ()=>{
        render(<BrowserRouter> <AllDestinations /> </BrowserRouter>);

        const Headline = screen.getByText('We have the right destination for you');
       
        expect(Headline).toBeVisible();

    
    
    });
   


})