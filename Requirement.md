# Titre du test technique : Développement d'une petite application avec Next.js

## Introduction :
Vous êtes chargé(e) de développer une application web sur la base d'un site e-commerce en utilisant Next.js. L'objectif est de créer une interface utilisateur permettant aux utilisateurs de consulter des produits provenant d'une API externe.

## Tâches à accomplir :

Configuration de l'environnement :

Initialiser un nouveau projet Next.js en typescript (on se passera de eslint et prettier).
L'application doit être développée en mobile-first, il n'y a pas d'enjeu particulier pour moi de l'adapter en desktop, il faudra simplement boxer les éléments pour que cela reste cohérent.

L'application doit récupérer les données de l'api open source https://fakestoreapi.com/

### Menu:
Le menu devra renvoyer la page home depuis un logo aléatoire et la liste des catégories.

### Page d'accueil :

Créez une page d'accueil qui affiche une liste de produits récupérées depuis l'API externe.
Affichez au moins les informations de base de chaque produit (titre, description, prix, image, etc.).
Assurez-vous que la page est responsive et offre une expérience utilisateur agréable.
Bonus: Créer une pagination Loadmore

### Page de détail :

Mettez en place une page de détail pour chaque annonce, accessible depuis la page d'accueil.
La page de détail devrait afficher toutes les informations disponibles pour une annonce spécifique.
Ajoutez un bouton de retour à la page d'accueil depuis la page de détail.

### Page catégories:

Afficher la liste des produits pour chaque catégorie en utilisant le app directory de next13 et les slugs.

## Bonus: 

Recherche:
Ajoutez une fonction de recherche permettant aux utilisateurs de rechercher des annonces en fonction de mots-clés.
Affichez les résultats de la recherche de manière claire et concise sur une page dédiés (exemple: /search)

Optimisation des performances :

Utilisez les fonctionnalités de pré-rendu de Next.js pour optimiser les performances de l'application.
Assurez-vous que l'application gère efficacement le chargement asynchrone des données.


## Critères d'évaluation :

Qualité du code (lisibilité, modularité, bonnes pratiques).
Fonctionnalités implémentées conformément aux spécifications.
Gestion des erreurs et des cas limites.
Respect des bonnes pratiques de sécurité.
Performances de l'application.

### Instructions :

Utilisez Next.js pour le développement de l'application.
Pour l'UI, tu peux utiliser des librairies ou pas, c'est comme tu veux.

Préférer un bon nommage de variable et fonctions au code commenter.

Fournissez des instructions claires sur la façon de lancer l'application localement.
Livrez le code source via un système de gestion de versions (GitHub).

______________________________________________________

Le bonus porte bien son nom, aucune obligation de le faire. 
Je reste disponible si tu as des questions, l'idée est simplement de voir quelques requêtes à une API.
Si tu en connais une autre libre à toi, il faut juste qu'elle reste dans le thème.

Tu as jusqu'à lundi mais si tu as fini avant sans les bonus c'est top et si tu n'as pas terminé, pas de souci non plus.

Eclate toi bien surtout!

Jimmy