
export default function Details(){

    return ( 

        <div id="banner-content" className="row clearfix">
        <div id="services" className="scrollto clearfix">

        <div className="row no-padding-bottom clearfix">

            {/*<!--Content Left Side-->*/}
            <div className="col-3">
                {/*<!--User Testimonial-->*/}
                <blockquote className="testimonial text-right bigtest">
                        <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua
                        </q>
                        <footer>— John Doe, Happy Customer</footer>
                </blockquote>
                {/*<!-- End of Testimonial-->*/}

            </div>
            
            {/*<!--Content of the Midle Side-->*/}
            <div className="col-3">
                <div className="section-heading">
                    <h3>BELIEVING</h3>
                    <h2 className="section-title">Focusing On What Matters Most</h2>
                    <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>
                </div>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo.
                </p>
                <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet!
                </p>
                <div>
                <a href="#"  className="button video link-lightbox">
                    EDIT
                </a></div>
                <a href="#"  className="button video link-lightbox">
                    DELETE
                </a>
            </div>
            {/*<!--End Content Right Side-->*/}

            <div className="col-3">
                <img src="images/dancer.jpg" alt="Nature"/>
            </div>

        </div>


    </div>
    </div>
    )


}
      
