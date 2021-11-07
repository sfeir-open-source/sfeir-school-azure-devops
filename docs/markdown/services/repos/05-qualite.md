<!-- .slide: class="transition bg-pink" -->
# Azure Repos
![logo](./assets/images/services/repos/logo.svg)

Qualite

##--##
## Mesure de la qualité

- Fiabilité
    - Probabilité de fonctionnement sans erreur sur une période de temps
    - Nombre d'incidents / Disponibilité
- Maintenabilité
    - Niveau de maintenabilité du code. En rapport avec la consistance du code, la complexité du code, la taille du code, etc.
    - Dépends aussi de la testabilité du code.
    - Difficile à quantifier.
- Testabilité
    - Mesure la capacité du code à etre testé. 
    - Dépends souvent de la capacité à isoloer des portions pour les tester, et la capacité à observer les changements.
    - Doit être automatisable.
- Portabilité
    - Indépendance du code de l'environnement d'exécution.


##--##
## Mesurer la dette technique et la qualité du code.

- Tests
- SonarQube / SonarCloud
- NDepend
- Resharper Code Quality Analysis

Quand?
- Dans les pipelines
- Quality Gates

<div class="tip">
Avantage: Feedback rapide
</div>