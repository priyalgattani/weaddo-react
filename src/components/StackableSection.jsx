import BlueOutlineButton from "./BlueOutlineButton";
import Cards from "./Cards";

function StackableSection() {
    return (
        <section id="stackable">
            <div className="container-fluid section">
                <div className="row">
                    <div id="stackable-text" className="col-lg-6 stackable-text">
                        <h2>Want To Transform Your MarTech?</h2>
                        <p>Let's begin.</p>
                        <div className="stackable-buttons">
                            <BlueOutlineButton class="btn-stackable" text="Omni Channel" />
                            <BlueOutlineButton class="btn-stackable" text="D2C" />
                            <BlueOutlineButton class="btn-stackable" text="Healthcare" />
                            <BlueOutlineButton class="btn-stackable" text="Education" />
                        </div>
                    </div>
                    <Cards />
                </div>
            </div>
        </section>
    )
}

export default StackableSection;