import Technologies from "./Technologies"
import Projects from "./Projects"

export default function Content() {
    return (
        <div className="mt-5">
            <div className="text-2xl font-bold mb-2">Self</div>
            <div className="text-wrap leading-8">
                &emsp;&emsp; Jun Park is a first-year student and frontend developer based in Oberlin College with a passion
                for creating and finding creative solutions to hard problems. He started programming during the pandemic,
                learning java, and started to get into competitive programming where he found his passion of solving problems.
                <br/>
                <br/>
                &emsp;&emsp; After getting to USACO's Silver Division Jun started his journey into web development where he got to
                learn software development and experiment with websites. Jun got interested in doing open-source work during the 
                summer going into college and ended up becoming a large contributor to PearAI, a Y-Combinator startup, where he
                learned how to work in a collaborative setting.
            </div>
            <hr className="mt-5 mb-5"/>
            <div>
                <Technologies/>
            </div>
            <hr className="mt-5 mb-5"/>
            <div>
                <Projects/>
            </div>
        </div>
    )
}