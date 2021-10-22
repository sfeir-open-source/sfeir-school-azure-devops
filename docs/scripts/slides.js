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


    ),
    boards: chapter("services/boards",
      "00-intro"
    ),
    pipelines: chapter("services/pipelines",
      "00-intro"
    ),
    test : chapter("services/test",
      "00-intro"
    ),
    artifacts: chapter("services/artifacts",
      "00-intro"
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
    ...slides.services.test,
    ...slides.outro,
  ]

  
}
