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
    "02-azure-devops"
  ),
  services: {
    repos: chapter("services/repos",
      "00-intro",
      "01-git",
      "02-review",
      "03-forks",
      "04-wikis",
      "05-qualite",
      "99-hands-on"
    ),
    boards: chapter("services/boards",
      "00-intro",
      "99-hands-on"
    ),
    pipelines: chapter("services/pipelines",
      "00-intro",
      "01-agents-jobs",
      "02-pipelines",
      "03-tasks",
      "99-hands-on"
    ),
 
    artifacts: chapter("services/artifacts",
      "00-intro",
      "99-hands-on"
    )
  },
  outro: chapter("outro",
    "00-TITLE"
  )
};


export function usedSlides() {
  return [
    ...slides.school,
    ...slides.intro,
    ...slides.services.repos,
    ...slides.services.boards,
    ...slides.services.pipelines,
    ...slides.services.artifacts,
    ...slides.outro,
  ]

  
}
