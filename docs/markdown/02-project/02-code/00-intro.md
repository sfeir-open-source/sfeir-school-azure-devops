<!-- .slide: class="transition bg-pink" -->
# Code
![logo](./assets/images/services/repos/logo.svg)

**Azure Repos**

##--##

## Source Control

Se doit d'être centralisé!

Permet
- collaboration
- historique
- resolution de conflits


##--##

## Bonnes pratiques
- "commit often"
- pas de fichier personnel, pas de secret
- intégrer master/main souvent
- verifier les tests avant un push
- commit message
- associer les changements avec un workitem
- suivre les conventions de l'équipe

##--##

## TFVC, Git

TODO https://docs.microsoft.com/fr-fr/azure/devops/repos/tfvc/comparison-git-tfvc?view=azure-devops#which-version-control-system-should-i-use

Principale difference: TFVC cree une copie lors de la creation de branches, Git ne stocke que les differences

##--##

## Git

| Avantages        |                          Inconvénients |
|------------------|---------------------------------------:|
| Branches légères |                 Courbe d'apprentissage |
| Distribué        | Gros fichiers / binaires pas bienvenus |
