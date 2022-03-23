<!-- .slide: class="transition bg-blue" -->
# Build & Deploy
![logo](./assets/images/services/pipelines/logo.svg)

**Azure Pipelines**

**GitHub Actions**

##--##

## Concepts

- CI: Intégration continue
- CT: Test continu
- CD: Déploiement continu

Notes:
Le but: 
Du concept à la livraison au client
flow end to end, répétable, fiable, incrémentalement amélioré
Permet un flow de changements constants

pipeline => stages:
    build automation  
    continuous integration 
    test automation
    deployment automation

##--##

## CI - intégration continue 

Création des binaires, d'après le code source et les différentes PR.
=> Feedback direct

##--##
## CT - test continu

Les binaires sont testés pour:
- Fonctionnalités
- Sécurité
- Performance
- Compliance

##--##
## CD - Déploiement continu

Si les étapes précédentes sont réussies, les binaires doivent êtres mis à disposition pour les utilisateurs.
=> Différents niveaux de serveur
=> Déployments partiels et progressifs 

##--##
## Compatibilité
- .net
- java
- js
- python
- xcode
- ...

Notes:

##--##
##  Cibles de déploiement

- machines virtuelles, 
- conteneurs
- plateformes locales
- plateformes Cloud
- les services PaaS
- application mobile dans un store.




