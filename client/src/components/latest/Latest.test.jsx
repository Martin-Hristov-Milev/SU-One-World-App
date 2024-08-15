
import { describe, expect, it } from "vitest";

import { render, screen } from "@testing-library/react";
import { BrowserRouter, } from "react-router-dom";
import '@testing-library/jest-dom/vitest'


import Latest from './Latest'


describe( 'Latest Destinations has a page title', ()=>{

    it( 'should have headline', ()=>{
        render(<BrowserRouter> <Latest /> </BrowserRouter>);

        const Headline = screen.getByText('LATEST DESTINATIONS');
       
        expect(Headline).toBeVisible();

    
    
    });
   


})