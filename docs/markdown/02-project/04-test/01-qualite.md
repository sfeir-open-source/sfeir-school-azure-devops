<!-- .slide: class="transition bg-green" -->

# Tests
![logo](./assets/images/services/test/logo.svg)

**Qualité**

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

- Unit Tests par plateforme
- SonarQube / SonarCloud
- NDepend
- Resharper Code Quality Analysis


<div class="tip">
Avantage: Feedback rapide
</div>


##--##
# Tests dans les Pipelines

- Execution des tests 
- Agrégation des résultats
- Gated Check-in / Gated Commit


Notes:
https://dev.azure.com/SFEIR/sfeir-school-azure-master/_build/results?buildId=111&view=results


