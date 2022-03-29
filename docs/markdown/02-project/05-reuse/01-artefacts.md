<!-- .slide: class="transition bg-pink" -->

# Reuse
![logo](./assets/images/services/artifacts/logo.svg)

**Azure Artifacts**

##--##

## Présentation

Azure Artefacts est un service de stockage et versioning de packages.
- S'utilise et peut se substituer à npm / nuget / maven / ...
- Fonctionne sur la base de "feed", dont l'accès est soit privé ou public.
- Les feeds sont des groupes de packages mais ne sont pas dépendants du type de package
- Scope: Organisation ou Projet

Notes:


##--##

## Pourquoi?

- Partager avec le public des packages (binaires ou pas)
- Partager en interne les librairies communes
- Fournir un cache de packages

Notes:


##--##

## Comment
- Build dans une pipeline
- Publish d'un artifact dans un feed
- Souscription à un feed dans un autre projet


##--##

## Demo - Artefacts

Notes:

