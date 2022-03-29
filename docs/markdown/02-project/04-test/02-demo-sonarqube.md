<!-- .slide: class="transition bg-green" -->

# Tests
![logo](./assets/images/services/test/logo.svg)

**Demo: SonarQube / SonarCloud**

##--##
## Configuration de SonarQube

```yaml
steps:
- task: SonarQubePrepare@5
  displayName: 'Prepare analysis on SonarQube'
  inputs:
    SonarQube: SonarQube
    scannerMode: CLI
    configMode: manual
    cliProjectKey: Key
    cliProjectName: Project
```

```yaml
steps:
- task: SonarQubeAnalyze@5
  displayName: 'Run Code Analysis'
```

```yaml
steps:
- task: SonarQubePublish@5
  displayName: 'Publish Quality Gate Result'
```
##--##
## Demo SonarCloud

Notes:
	https://sonarcloud.io/
