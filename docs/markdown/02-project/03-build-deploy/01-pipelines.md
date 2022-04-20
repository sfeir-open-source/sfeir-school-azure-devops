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
- Environnement
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
Le service qui va executer une pipeline de build ou de release

Hosting:

| Microsoft                                              | Self-hosted                           |
|--------------------------------------------------------|---------------------------------------|
| - Environnement "clean" à chaque execution (plus lent) | - Build incrémentielles (plus rapide) |
| - 0 maintenance                                        | - Maintenance                         |
| - Minutes gratuites                                    | - Illimité                            |


Compatibilité
- macOS
- Linux (x64, ARM, ARM64, RHEL6)
- Windows (x64, x86)
- Docker

Groupé dans des pool

Sélectionné par Capabilities / Demands

##--##

## Environnements

Un environnement est une collection de ressources que vous pouvez cibler avec des déploiements à partir d’un pipeline. 
Dev, test, QA, Staging et production sont des exemples typiques de noms d’environnement.

Avantages
- Historique de déploiement
- Traçabilité des validations et des éléments de travail	
- Sécurité: Validations par 
    - approval 
    - whitelist de branches 
    - restrictions (par ex policy sur images docker) 
    - heure
    - lock exclusif
    - autres: azure function; api REST, ...

##--##

## Service Connections
- Azure
- Chef
- Docker et Docker Registry
- Kubernetes
- Maven
- GitHub
- WebHook
- Jenkins
- SSH
- ...
