

export default function About (){

    return (

    
        <aside id="testimonials" className="scrollto text-center" data-enllax-ratio=".2">

            <div className="row clearfix">

                <div className="section-heading">
                    <h3>FEEDBACK</h3>
                    <h2 className="section-title">What our customers are saying</h2>
                </div>

                {/* <!--User Testimonial--> */}
                <blockquote className="col-3 testimonial classNameic">
                    <img src="../../assets/user-images/user-1.jpg" alt="User"/>
                    <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua</q>
                    <footer>John Doe - Happy Customer</footer>
                </blockquote>
                {/*<!-- End of Testimonial-->*/}

                {/* <!--User Testimonial--> */}
                <blockquote className="col-3 testimonial classNameic">
                    <img src="../../assets/user-images/user-2.jpg" alt="User"/>
                    <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua</q>
                    <footer>Roslyn Doe - Happy Customer</footer>
                </blockquote>
                {/*<!-- End of Testimonial-->*/}

                {/* <!--User Testimonial--> */}
                <blockquote className="col-3 testimonial classNameic">
                    <img src="../../assets/user-images/user-3.jpg" alt="User"/>
                    <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua</q>
                    <footer>Thomas Doe - Happy Customer</footer>
                </blockquote>
                {/*<!-- End of Testimonial-->*/}

            </div>

        </aside>

       
    )
}