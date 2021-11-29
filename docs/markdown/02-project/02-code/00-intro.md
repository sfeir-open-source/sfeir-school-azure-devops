<!-- .slide: class="transition bg-pink" -->
# Azure Repos
![logo](./assets/images/services/repos/logo.svg)

##--##

## Source Control

Se doit d'etre centralise!

Permet
- collaboration
- historique
- resolution de conflits


##--##

## Bonnes pratiques
- commit often
- pas de fichier personel, pas de secret
- integrer master/main souvent
- verifier les tests avant un push
- commit message
- associer les changements avec un workitem
- suivre les conventions de l'equipe

##--##

## TFVC, Git

https://docs.microsoft.com/fr-fr/azure/devops/repos/tfvc/comparison-git-tfvc?view=azure-devops#which-version-control-system-should-i-use

Principale difference: TFVC cree une copie lors de la creation de branches, Git ne stocke que les differences

##--##

## Git

| Avantages        |                          Inconvénients |
|------------------|---------------------------------------:|
| Branches légères |                 Courbe d'apprentissage |
| Distribué        | Gros fichiers / binaires pas bienvenus |
