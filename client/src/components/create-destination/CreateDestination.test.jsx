import { describe, expect, it } from "vitest";
import { BrowserRouter, Link, Route, Rutes, useNavigate} from "react-router-dom";

import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest'


import CreateDestination from './CreateDestination'


describe( 'CreateDestination has headline', ()=>{

    it( 'should have a headline', ()=>{
        render(<BrowserRouter><CreateDestination /></BrowserRouter>);

        const Headline = screen.getByText('CREATE NEW DESTINATION');
        
        expect(Headline).toBeVisible();

        
    })
});
