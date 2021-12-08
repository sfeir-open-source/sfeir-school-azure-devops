// One method per module
function chapter(chapter, ...files) {
  let out = [];
  files.forEach(f => out.push({path: `${chapter}/${f}.md`}));
  return out;
}


const slides = {
  school: chapter("00-school",
    "00-TITLE",
    "01-speaker"
  ),
  intro: chapter("01-intro",
    "00-historique",
    "01-devops",
    "02-azure-devops",

  ),
  project: {
    intro: chapter("02-project/00-intro",
      "00-main"
    ),
    plan: chapter("02-project/01-plan",
      "00-intro",
      "99-hands-on"
    ),
    
    code: chapter("02-project/02-code",
      "00-intro",
      "01-git",
      "02-review",
      "03-forks",
      "04-wikis",
      "05-qualite",
      "99-hands-on"
    ),
    build: chapter("02-project/03-build",
      "00-intro",
      "01-agents-jobs",
      "02-pipelines",
      "03-tasks",
      "99-hands-on"
    ),
    test: chapter("02-project/04-test",
    ),
    deploy: chapter("02-project/05-deploy",
    ),
    reuse: chapter("project/06-reuse",
      "00-intro",
      "99-hands-on"
    )
  },
  outro: chapter("03-outro/00-TITLE",
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
    ...slides.outro,
  ]

  
}
