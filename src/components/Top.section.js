import {useSelector} from "react-redux"

export default function TopSection(){
    const counter = useSelector( state => state.counter )

    return(
        <div>
            <section className="section-top">
                <h6>calc</h6>
                <div><div className="on-off"></div></div>
            </section>
            <input type="number" id="input-el" defaultValue={""} />
        </div>
    )
}