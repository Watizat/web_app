# Guide de contribution

Bienvenue dans le guide de contribution de l'association Watizat

Merci d'investir votre temps pour contribuer à ce projet auquel nous croyons et investissons notre temps !

Nous vous invitons à lire notre code de conduite pour que notre communauté de codage et de partage reste accessible et respectable.

Dans ce guide, vous obtiendrez une vue d'ensemble du flux de contribution depuis l'ouverture d'un problème, la création d'une pull-request (PR), la révision et la fusion d'une PR.

## Contributions

De nombreuses manière de contribuer existent, et créer du code n'est l'unique manière de le faire.

Vous pouvez par exemple (liste non-exhaustive) :

- Créer un nouveau design, ou restructurer les mises en page pour améliorer la convivialité du  guide
- Commenter les issue et apporter un regard extérieur
- Aider à rendre le guide plus accessible et plus inclusif
- Participer à l'écriture et l'amélioration de la documentation (à destination des devéloppeur·euse·s ou des membres de Watizat)
- Participer à la traduction des différents éléments du guide, ou de la documentation
- Rédiger des tutoriels pour le projet
- Plus d'idées ici : <https://opensource.guide/fr/how-to-contribute>

### Créer une nouvelle issue

Si vous repérez un problème dans le site et/ou le code, cherchez si un problème existe déjà. S'il n'existe pas de problème connexe, vous pouvez ouvrir une nouvelle issue. Veillez à inclure un titre et une description claire, autant d'informations pertinentes que possible, ainsi qu'un exemple de code si nécessaire.

### Résoudre un problème

Parcourez nos issues existantes pour trouver celle qui vous intéresse. Vous pouvez affiner la recherche en utilisant des étiquettes comme filtres.
Si vous décidez de traiter une issue, pensez à vous l'attribuer, afin que les autres personnes ne se lancent pas en parallèle sur la même issue..
Si vous résolvez une issue sur lequel travailler, vous pouvez ouvrir une PR et proposer un correctif.

### Reproduire un bug signalé

Vous pouvez contribuer au projet en validant une issue ou en ajoutant un contexte supplémentaire à un problème existant

### Tester une pull request

Vous pouvez contribuer à un projet open source en fusionnant une pull-request dans votre copie locale du projet et en testant les changements. Ajoutez le résultat de vos tests dans un commentaire sur la pull-request

### Apporter des modifications au code

#### 1- Créer un dépôt (fork)

Vous pouvez ainsi apporter vos modifications sans affecter le projet original jusqu'à ce que vous soyez prêt à les fusionner

#### 2- Installer le projet sur votre espace de travail

Via la commande `npm install` ou `yarn`

#### 3- Créez une branche de travail et commencez à apporter vos modifications

#### 4- Valider la mise à jour

Validez les modifications une fois que vous en êtes satisfait. N'oubliez pas de vous auto-réviser pour accélérer le processus de révision⚡.
Demande d'extraction

#### 5- Lorsque vous avez terminé les modifications, créez une pull-request (PR)

- Marquez votre PR comme "Ready for revioew" et expliquer vos modifications, pour que nous puissions réviser votre PR. Ce modèle aide les réviseurs à comprendre vos modifications ainsi que l'objectif de votre demande.

- N'oubliez pas de lier votre PR à un problème si vous en résolvez un

- Activez la case à cocher pour autoriser les modifications du mainteneur afin que la branche puisse être mise à jour pour une fusion

- NB : Si vous n'êtes pas très à l'aise avec le système de pull-request, vous trouverez plus d'informations ici :
  - <https://docs.github.com/en/pull-requests/collaborating-with-pull-requests>
  - <https://www.dataschool.io/how-to-contribute-on-github>

#### 6- Une fois que vous avez soumis votre PR, un membre de l'équipe Docs examinera votre proposition

- Il se peut que nous posions des questions ou que nous demandions des informations supplémentaires.
- Il se peut que nous demandions que des modifications soient apportées avant que le PR ne soit fusionné, soit en utilisant les modifications suggérées, soit en utilisant les commentaires de la demande d'extraction. Vous pouvez appliquer les modifications suggérées directement via l'interface utilisateur. Vous pouvez faire d'autres changements dans votre fork, puis les livrer à votre branche.
- Au fur et à mesure que vous mettez à jour votre PR et que vous appliquez les changements, marquez chaque conversation comme résolue.
- Si vous rencontrez des problèmes de fusion, consultez ce tutoriel git pour vous aider à résoudre les conflits de fusion et autres problèmes.

#### 7- Votre PR est fusionné

Félicitations 🎉🎉 L'équipe de Watizat vous remercie ✨.

## Organisation du développement

### Organisation des branches

#### Principes

- La branche de production est la branche "main"
  - Cette branche est publiée sur l'url : <https://guide.watizat.app>
- La branche de développement est la branche "dev"
  - Cette branche est publiée sur l'url : <https://dev.watizat.app>
  - Cette branche sert de révision définitive avant mise en production
- Une branche doit être crée pour chaque version
- Une branche doit être crée pour chaque amélioration et/ou correction d'issue

#### Schéma

Schéma de l'organisation des branches et exemple de noms de branche sur le repo Watizat

```md
main 
└── dev
    ├── 1.0.1
    |       └── 1.0.1-docs-project_doc
    ├── 1.0.2
    |
    ├── 1.1.0 
    |       └── 1.1.0-feature-versionning_modal
    ├── 1.2.0
    |
    ├── 2.0.0
    |       └── 2.0.0-feature-translate_space
    └── 3.0.0
```

#### Nommer ses branches de développement

##### Les types de branches

Le type d’une branche doit être clair  afin de comprendre le but de celle-ci. Voici une liste non exhaustive des types de branches :

- **feature**: Ajout d’une nouvelle fonctionnalité
- **bugfix**: Correction d’un bug
- **hotfix**: Correction d’un bug critique
- **clean**: Nettoyage du code
- **experiment**: Expérimentation de fonctionnalités
- **docs**: Commentaire de code

##### Les noms de branche

Le nom de la branche décrit succinctement le but de celle-ci. Certaines règles doivent être respectées :

- Le nom doit faire moins de 50 caractères;
- Le nom doit respecter la convention [snake-case](https://code-garage.fr/blog/convention-nommage-kebab-case-snake-case-et-autres) : les mots doivent être en minuscule et liés par des underscore_

##### Numérotation de branche et de version

La numérotation suit le principe de  a.b.c

- a : Major version
    Ajout de fonctionnalités majeure, changement d'interface significatif, changement d'API, etc
- b : Minor version
    Ajout de fonctionnalités mineurs, léger changement d'interface,
- v : Patch verison
    Correction de bugs, changements minimes (imperceptible pour un· user)

##### Exemples de versions

- 1.0.1 => 1.0.2 : Passage d'une version patch à une autre
- 1.0.2 => 1.1.0 : Passage d'une version patch à une version minueure
- 1.5.3 => 2.0.0 : Passage d'une version mineur à une version majeure

##### Exemples de branche

```md
─ feature-translate_space
─ bugfix-phone_number
─ experiment-new_homepage
─ clean-old_functions
─ docs-comments
```

#### Sens de fusion du code

```md
feature-translate_space
│ Tout est ok (dans votre fork) ?
| Si oui => pull-request
│
└──> 2.0.0
 | Roadmap complétée => Vérifications !
 │ Tout est ok ? Si oui => merge
 | 
    └──> dev  
  | Publication sur l'url de dev
     │ Tout est ok ? Si oui => merge
  | 
     └──> main
   | Mise en production
```

## Convention de codage

### Logique générale

Il s'agit d'un logiciel open source !
Pensez aux personnes qui liront votre code, et faites en sorte qu'il soit agréable à lire pour eux.
C'est un peu comme conduire une voiture : Vous aimez peut-être faire des beignets quand vous êtes seul, mais avec des passagers, l'objectif est de rendre la conduite aussi douce que possible.

### Lisibilité

- Utiliser deux espaces pour l'indentation (tabulations douces).

- Toujours utiliser des espaces après les éléments de liste et les paramètres de méthode ([1, 2, 3], et non [1,2,3]), autour des opérateurs (x += 1, et non x+=1), et autour des flèches de hachage.

### Accessibilité

- Placez toujours des "alt" sur l'ensemble de vos images
- ⚠️ **Besoin d'aide ici**
