// One method per module
function schoolSlides() {
  return [
    '00-school/00-TITLE.md', 
    '00-school/01-speaker.md'];
}

function introSlides() {
  return ['intro/00-TITLE.md'];
}

function reposServiceSlides(){
  return [
    "services/repos/00-intro.md"
  ];
}

function boardServiceSlides(){
  return [
    "services/boards/00-intro.md"
  ];
}

function pipelinesServiceSlides(){
  return [
    "services/pipelines/00-intro.md"
  ];
}

function testServiceSlides(){
  return [
    "services/test/00-intro.md"
  ];
}

function artifactsSlides(){
  return [
    "services/artifacts/00-intro.md"
  ];
}

function servicesSlides(){
  return [
    ...reposServiceSlides(),
    ...boardServiceSlides(),
    ...pipelinesServiceSlides(),
    ...artifactsSlides(),
    ...testServiceSlides(),

  ]

}
function formation() {
  return [
    //
    ...schoolSlides(), 
    ...introSlides(),
    ...servicesSlides()
  ].map(slidePath => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}
