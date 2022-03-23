<!-- .slide: class="transition bg-pink" -->
# Code
![logo](./assets/images/services/repos/logo.svg)

**Azure Repos**

##--##

## Source Control

Quel que soit le système utilisé, un source control permet:

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

## Azure Repos

- Possibilité d'utiliser TFVC, Git interne, GitHub, Bitbucket, etc.
-  TFVC, Git les alternatives hostées dans Azure DevOps

##--##

## TFVC vs Git

Principale difference: TFVC cree une copie lors de la creation de branches, Git ne stocke que les differences

Choix:
- Ne plus utiliser TFVC
- Utiliser Git
- Evaluer l'utilisation de Github


##--##

## Git

| Avantages        |                          Inconvénients |
|------------------|---------------------------------------:|
| Branches légères |                 Courbe d'apprentissage |
| Distribué        | Gros fichiers / binaires pas bienvenus |
