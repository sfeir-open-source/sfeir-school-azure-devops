<!-- .slide: class="transition bg-white" -->
# Outils
![logo](./assets/images/services/repos/logo.svg)

**az cli**

##--##
## az devops

- ```az devops project (list/create/delete/show)```
    Lister / Créer / Supprimer / Afficher un projet

- ```az devops team (list/create/delete/show)```
    Lister / Créer / Supprimer / Afficher une équipe


- ```az devops user (list/add/remove/show/update)```
    Lister / Ajouter / Supprimer / Afficher / Modifier un utilisateur


- ```az devops wiki (list/create/delete/show)```
    Lister / Créer / Supprimer / Afficher un wiki

- ```az devops wiki page (create/delete/show/update)```
    Créer / Supprimer / Afficher / Modifier une page wiki


Notes:

##--##
## az pipelines

- ```az pipelines (list/create/delete/show)```
    Lister / Créer / Supprimer / Afficher une pipeline

- ```az pipelines run```
    Exécuter une pipeline


- ```az pipelines variables (list/create/delete/update)```
    Lister / Créer / Supprimer / Modifier une variable

Notes:

##--##
## az repos

- ```az repos (list/create/delete/show/update/import/...)```
    Lister / Créer / Supprimer / Afficher / Modifier / Importer un repository

- ```az repos pr (list/create/show/update/reviewer add/set-vote/...)```
    Manipuler les PR, Ajouter un reviewer / Définir un vote

Notes:

##--##
## az artifacts

```
az artifacts universal download --feed
                                --name
                                --path
                                --version
                                [--detect {false, true}]
                                [--file-filter]
                                [--org]
                                [--project]
                                [--scope {organization, project}]




az artifacts universal publish --feed
                               --name
                               --path
                               --version
                               [--description]
                               [--detect {false, true}]
                               [--org]
                               [--project]
                               [--scope {organization, project}]
```
