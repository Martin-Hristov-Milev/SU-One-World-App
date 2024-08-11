import ItemDestination from "./Item-destination/ItemDestination";



export default function AllDestinations(){


    return (

    <div id="banner-content" className="row clearfix">
    <div id="services" className="scrollto clearfix">
    <section id="listing" className="text-center scrollto clearfix ">
            <div className="row clearfix">
                    <div className="section-heading">
                        <h3>OWE WORLD. YOUR CHOICE </h3>
                        <h2 className="section-title">We have the right destination for you</h2>
                    </div>
                 
                    {/* <!--List ---> */}
                    <ItemDestination/>
                    <ItemDestination/>
                    <ItemDestination/>
                    <ItemDestination/>
                    <ItemDestination/>
                

                </div>
            </section>
            </div>
            </div>

    )
}