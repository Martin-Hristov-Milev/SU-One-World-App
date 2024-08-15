import { describe, expect, it } from "vitest";
import { BrowserRouter, Link, Route, Rutes, useNavigate} from "react-router-dom";

import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest'


import Login from './Login'
import App from '../../App'

// describe( 'Login', ()=>{

//     it( 'should have headline', ()=>{
//         render(<Login />);

//         const Headline = screen.getByText('LOGIN');
//         // const Headline = screen.getByText(/adventure/i);
//         expect(Headline).toBeVisible();
//     })
// });
