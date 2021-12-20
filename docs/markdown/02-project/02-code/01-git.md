<!-- .slide: class="transition bg-pink" -->
# Code
![logo](./assets/images/services/repos/logo.svg)

**Git**

##--##
## Structure

Dans Azure DevOps:
- 1 projet = n repos
- 1 repo = 1 solution

##--##
## Workflows habituels
- Trunk / Feature
- GitFlow
- Forking

Notes:
Decrire chaque workflow rapidement

##--##
## CI-CD

`master` ou `main`:
- La seule origine pour release en prod
- Toujours prête !
- Protégée par branch policies
- Tous les changements arrivent par PR
- Release = Tag

branche feature:
- Nouvelles fonctionnalités, bug fixes
- Bien surveiller la convention de nommage
    ```
    features/feature-name
    features/feature-area/feature-name
    
    bugfix/description
    hotfix/description
    
    users/username/description
    users/username/workitem
    ```


