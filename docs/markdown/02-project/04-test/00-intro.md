<!-- .slide: class="transition bg-green" -->

# Tests
![logo](./assets/images/services/test/logo.svg)

##--##
## Tour de table



Notes:
	Faire un tour de table rapide pour voir les différentes manières de gérer les tests fonctionnels.

##--##
## Avant de tester savoir quoi tester

- Tests unitaires
- Tests d'intégration 
- Tests d'acceptation
- Tests de regression
- Tests de qualité du code
- Tests	de fonctionnalité
- Tests de performance
- Tests de charge
- ....

Notes:
	Faire un tour de table rapide pour voir les différentes manières de gérer les tests fonctionnels.

	- Black box => on test les fonctionnalités sans se soucier de leur implémentation
	- White box => on test les fonctionnalités en se souciant de leur implémentation (avec des mock par exemple)

	- Tests unitaires => test sur une methode particulière (souvent liée au domain)
	- Tests d'intégration => test sur l integration de plusieurs fonctionnalités/services/modules 
	- Tests d'acceptation => ensemble de tests unitaires et d'intégration qui valide une fonctionnalitée
	- Tests de regression => tests visant a s'assuré l'évolution d'une fonctionnalité
	- Tests de qualité du code => rapport pour valider le code, les respect des conventions des nommages, le code covergage, la complexité du code, etc...
	- Tests	de fonctionnalité => tests visant a valider une fonctionnalité d'une poinht de vue plus 'user'
	- Tests de performance => test visant a valider la performance d'une fonctionnalité (vitesses, temps de reponse, etc)
	- Tests de charge => test visant a valider la charge d'une fonctionnalité face a une charge critique (maintient de la vitesse, load balancing etc etc)
	- ....

	On sort un peu du contexte purement orienté dev et on parle plus de l'après déploiement.
	L'idéal est une équipe de testeurs différents des dev , des personnes qui vont créer et gérer l'évolution des tests plan et des testeurs.

	Il y a plusieurs approches :
		Les tests sont créés pour une release precise et independant des user stories => pas le mieux
		Les tests sont associés a des User stories et liée plutot liée a un sprint
		Test lié aux features et persistant dans la durée (plutôt pour le smoke testing)
	Souvent un mix entre les 2 approches.