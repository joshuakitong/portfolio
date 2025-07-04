const WebDevTech = () => {
    return (
        <>
        <p>
          These are the technologies and tools I have experience with as a web developer:<br/>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
          <div className="space-y-6">
            <strong>Languages</strong>: HTML5 / CSS3, JavaScript, TypeScript, C#, Java, VB, Python<br/>
            <strong>Frameworks & Libraries</strong>: React, AngularJS, Angular, ASP.NET, Flask, Kendo UI, Tailwind CSS, Framer Motion<br/>
            <strong>Tools & Platforms</strong>: Git, Bitbucket, npm, Visual Studio Code
          </div>
          <div className="space-y-6">
            <strong>Project Management</strong>: Jira, Confluence, Crucible<br/>
            <strong>Database</strong>: PL/SQL, LINQ, MySQL<br/>
            <strong>AI Tools</strong>: ChatGPT, GitHub Copilot, Gemini<br/>
            <strong>Communication</strong>: Slack, Zoom, Skype
          </div>
        </div>
        </>
    )
};

export default WebDevTech;