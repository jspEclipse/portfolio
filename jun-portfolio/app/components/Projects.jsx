import Project from "./Project";

export default function Projects() {
    const projectData = [
        {
            link: "https://trypear.ai/",
            title: "PearAI",
            text: "An Open Source Code Editor that was worked on as a collaborator",
            image: "/pearai.png",
            alt: "PearAI",
        },
        {
            link: "https://github.com/jspEclipse/korean-dictionary",
            title: "Hang.ul",
            text: "An interactive Korean-English Dictionary containing approximately 5,000 words. Data collected from community-made Anki Cards",
            image: "/hangul.png",
            alt: "Hang.ul"
        },
        {
            link: "https://github.com/jspEclipse/sudoku-solver",
            title: "Sudoku Solver",
            text: "An interactive Sudoku Board that uses a backtracking algorithm in order to solve user-inputted Sudoku Boards",
            image: "/sudoku.png",
            alt: "Sudoku Solver"
        },
    ];

    return (
        <div className="min-h-56" id="projects">
            <div className="text-2xl font-bold mb-4">Projects</div>
            <div className="flex flex-col">
                {projectData.map((item, id) => (
                    <Project key={id} link={item.link} title={item.title} text={item.text} image={item.image} alt={item.alt} />
                ))}
            </div>
        </div>
    );
}
