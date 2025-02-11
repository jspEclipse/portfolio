/*
TailwindCSS
React

*/

const stackData = [
    {
      title: "Technologies",
      items: ["JavaScript", "HTML", "CSS", "Java", "Python", "Lua"],
      borderColor: "border-orange-400",
    },
    {
      title: "Frameworks",
      items: ["React", "Next.js", "Material UI", "Tailwind CSS", "ShadCN", "Daisy UI"],
      borderColor: "border-green-400",
    },
    {
      title: "Tools",
      items: ["Git", "VSCode", "NeoVim", ],
      borderColor: "border-yellow-400",
    },
  ];

export default function Technologies() {
    return (
        <div className="">
          <h1 className="text-2xl font-bold mb-8">Technologies</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stackData.map((category, index) => (
              <div
                key={index}
                className={`border-2 ${category.borderColor} rounded-lg p-6 shadow-md`}
              >
                <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );
}