// One method per module
function chapter(chapter, ...files) {
  let out = [];
  files.forEach(f => out.push({path: `${chapter}/${f}.md`}));
  return out;
}


const slides = {
  school: chapter("school",
    "00-TITLE",
    "01-speaker"
  ),
  intro: chapter("intro",
    "00-historique",
    "01-devops",
    "02-azure-devops",

  ),
  project: {
    intro: chapter("project/00-intro",
      "00-main"
    ),
    plan: chapter("project/01-plan",
      "00-intro",
      "99-hands-on"
    ),
    
    code: chapter("project/02-code",
      "00-intro",
      "01-git",
      "02-review",
      "03-forks",
      "04-wikis",
      "05-qualite",
      "99-hands-on"
    ),
    build: chapter("project/03-build",
      "00-intro",
      "01-agents-jobs",
      "02-pipelines",
      "03-tasks",
      "99-hands-on"
    ),
    test: chapter("project/04-build",
    ),
    deploy: chapter("project/05-deploy",
    ),
    reuse: chapter("project/06-reuse",
      "00-intro",
      "99-hands-on"
    )
  },
  outro: chapter("project/99-outro",
  ),

};


export function usedSlides() {
  return [
    ...slides.school,
    ...slides.intro,
    ...slides.project.intro,
    ...slides.project.plan,
    ...slides.project.code,
    ...slides.project.build,
    ...slides.project.test,
    ...slides.project.deploy,
    ...slides.project.reuse,
    ...slides.project.outro,
    ...slides.outro,
  ]

  
}
