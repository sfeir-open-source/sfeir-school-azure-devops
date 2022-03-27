

// One method per module
function chapter(chapter, ...files) {
  let out = [];
  files.forEach(f => out.push({path: `${chapter}/${f}.md`}));
  return out;
}


const slides = {
  school: chapter("00-school",
    "00-titre",
    "01-speakers"
  ),
  intro: chapter("01-intro",
    "01-devops",
    "02-historique",
    "03-azure-devops",
    "04-agenda",
    "05-projet",

  ),
  project: {
    plan: chapter("02-project/01-plan",
      "01-process-workitems",
      "02-labs"
    ),
    
    code: chapter("02-project/02-code",
      "00-intro",
      "01-git",
      "02-lab-clone",
      "03-review",
      "04-lab-review",      
      "05-forks",
    ),
    build: chapter("02-project/03-build-deploy",
      "00-intro",      
      "01-pipelines",
      "02-demo-pipeline-designer",      
      "03-yaml",
      "04-yaml",
      "05-lab-build-project",
      "06-github"
    ),
    test: chapter("02-project/04-test",
      "00-intro",      
      "01-qualite",
      "02-demo-sonarqube",      
      "03-demo-test"
    ),
    reuse: chapter("02-project/05-reuse",
      "01-artefacts",
      "02-lab-artefacts"
    ),
    document: chapter("02-project/06-document",
      "01-wikis",
      "02-lab-wiki"
    )
  },
  outro: chapter("03-outro",
    "01-conclusion",
  ),

};


export function usedSlides() {
  return [
    ...slides.school,
    ...slides.intro,
    ...slides.project.plan,
    ...slides.project.code,
    ...slides.project.build,
    ...slides.project.test,
    ...slides.project.reuse,
    ...slides.project.document,    
    ...slides.outro,
  ]

  
}