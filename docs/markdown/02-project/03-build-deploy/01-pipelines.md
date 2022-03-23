<!-- .slide: class="transition bg-blue" -->
# Build & Deploy
![logo](./assets/images/services/pipelines/logo.svg)

**Azure Pipelines**

**Pipelines**

##--##
## Vocabulaire
- Agent
- Artifact
- Build
- Job
- Pipeline
- Release
- Stage
- Task
- Trigger


##--##
## Overview
![](./assets/images/services/pipelines/key-concepts.svg)


##--##
## Détails

- Un déclencheur (`trigger`) indique à un pipeline de s’exécuter.
- Un pipeline est constitué d’une ou de plusieurs étapes (`stage`). Un pipeline peut être déployé sur un ou plusieurs environnements.
- Une étape (`stage`) est un moyen d’organiser les jobs dans un pipeline, et chaque étape peut avoir un ou plusieurs jobs.
- Chaque job s’exécute sur un agent. Un job peut également s’exécuter sans agent.
- Chaque agent exécute un job qui contient une ou plusieurs étapes (`step`).
- Une étape (`step`) peut être une tâche ou un script et est le plus petit bloc de construction d’un pipeline.
- Une tâche est un script prédéfini qui effectue une action, telle que l’appel d’une API REST ou la publication d’un artefact de Build.
- Un artefact est une collection de fichiers ou de packages publiés par une exécution.


##--##
## Agents

TODO: https://docs.microsoft.com/fr-fr/azure/devops/pipelines/agents/agents?view=azure-devops&tabs=browser
- MS
- Self
- Capabilities / Demands


##--##

## Environements
TODO: https://docs.microsoft.com/fr-fr/azure/devops/pipelines/process/environments?view=azure-devops