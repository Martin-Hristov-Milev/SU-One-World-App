import { describe, expect, it } from "vitest";
import { BrowserRouter, Link, Route, Rutes, useNavigate} from "react-router-dom";

import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest'


import Register from './Register'


describe( 'Register', ()=>{

    it( 'should have headline', ()=>{
        render(<BrowserRouter><Register /></BrowserRouter>);

        const Headline = screen.getByText('REGISTER');
        
        expect(Headline).toBeVisible();
        
        
    })
});
