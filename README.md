# Projet-Devops

# Branches Principales:
'main': Branche stable, contient le code en production.
'develop': Branche de développement, contient les fonctionnalités en cours.

# Branches de Support:
'feature/': Pour les nouvelles fonctionnalités. Par exemple, 'feature/nouvelle-fonction'.
'hotfix/': Pour les correctifs urgents directement sur la branche main.
'release/': Pour les préparations de la prochaine version en production.

# Flux de Travail:
- Développement de nouvelles fonctionnalités sur des branches 'feature/' créées à partir de 'develop'.
- Une fois la fonctionnalité terminée, fusionnez la branche 'feature/' dans 'develop'.
- Pour une release, créez une branche 'release/' à partir de 'develop'.
- Après les tests et ajustements, fusionnez 'release/' dans main et 'develop'.
- En cas de correctifs urgents, créez une branche 'hotfix/' à partir de 'main', puis fusionnez-la dans 'main' et 'develop' après correction.
