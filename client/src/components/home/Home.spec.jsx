import { describe, expect, it } from "vitest";

import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest'


import Home from './Home'
import App from '../../App'

describe( 'Home', ()=>{

    it( 'should have headline', ()=>{
        render(<App> <Home /> </App>);

        const Headline = screen.getByText('ADVENTURE AWAITS, JUST A CLICK AWAY');
        // const Headline = screen.getByText(/adventure/i);
        expect(Headline).toBeVisible();

        screen.debug()
    
    
    });
    it( 'should be equal', ()=>{
        expect (true).toBeTruthy();
    });


})
