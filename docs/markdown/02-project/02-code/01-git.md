<!-- .slide: class="transition bg-pink" -->
# Code
![logo](./assets/images/services/repos/logo.svg)

**Git**

##--##
## Structure

Dans Azure DevOps:
- 1 projet = n repos
- 1 repo = 1 solution

Notes:
- 1 projet = 1 solution: a pondérer pour le développement front-end monorepo

##--##
## Workflows habituels
- Trunk / Feature
- GitFlow
- Forking Workflow

Notes:
Décrire chaque workflow rapidement
- Gitflow: semble tres logique, mais s'avere lourd a l'utilisation et surtout pour le CI/CD: 
- Trunk/feature : le plus populaire, simple
- Forking: Pour des équipes distribuées, permet à chaqun de faire un fork du projet et de gerer sa stratégie de développement

##--##
## Stratégies

`master` ou `main`:
- Soit 
    - La dernière version du code. Pas forcément stable
    - Branches releases ponctuelles
- Ou
    - Version stable du code
    - Toujours prête !
    - Source des releases
    - Release = Tag

- Toujours:
    - Protégée par branch policies
    - Tous les changements arrivent par PR

##--##
## Feature branch

- Nouvelles fonctionnalités, bug fixes
- Bien surveiller la convention de nommage
    ```text
    features/feature-name
    features/feature-area/feature-name
    
    bugfix/description
    hotfix/description
    
    users/username/description
    users/username/workitem
    ```


