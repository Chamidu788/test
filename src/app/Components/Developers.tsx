import React from "react";

const Developers: React.FC = () => {
  const skills: string[] = [
    "Node.js",
    "React.js",
    "Vue.js",
    "Typescript",
    "Javascript",
    "Next.js",
    "Amplify",
    "AWS",
    "Terraform",
    "C# and .NET",
    "GraphQL",
    "Serverless Framework",
  ];

  return (
    <div className="bg-white px-4 sm:px-8 md:px-[100px] py-8 max-w-full mx-auto">
     
      <div className="bg-gradient-to-r p-4">
        <div className="text-lg font-semibold text-blue-500">Developers</div>
      </div>

      
      <div className="mt-6 bg-gray-100 p-6 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
          
          <div>
            <h3 className="font-bold text-gray-800">Role</h3>
            <div className="border-t-2 border-black mt-2 mb-4"></div>
            <p className="text-gray-600">Senior Web Full Stack Developer</p>
            <p className="text-sm text-gray-500 mt-2">
              Seniority in development is not just about how much time you have
              already spent behind the computer screen. It’s the way you think,
              how you approach problems and their solutions, the responsibility
              you take on and feel.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto">
                Apply Now
              </button>
              <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 w-full sm:w-auto">
                Learn More
              </button>
            </div>
          </div>

          
          <div>
            <h3 className="font-bold text-gray-800">Skills</h3>
            <div className="border-t-2 border-black mt-2 mb-4"></div>
            <div className="flex flex-wrap gap-2 mt-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;