const IMG='https://initiativeacademy.dz/wp-content/uploads/';
const PH={logo:IMG+'2026/06/ia-logo-v2.png',hall:IMG+'2026/08/hall-dentree01.jpeg',hall2:IMG+'2026/08/hall-dentree.jpeg',form1:IMG+'2026/08/salle-de-formation-01.jpeg',form2:IMG+'2026/08/salle-de-formation-02.jpeg',bureaux:IMG+'2026/08/Bureaux-privatifs.jpeg',dom:IMG+'2026/06/ia-domiciliation-room.jpg'};
const CO={tel:'0770 690 796',telh:'+213770690796',mail:'contact@initiativeacademy.dz',adr:'Saïd Hamdine, Alger, Algérie',fb:'https://www.facebook.com/initiativeacademy.dz',ig:'https://www.instagram.com/initiativeacademy.dz',li:'https://www.linkedin.com/company/initiativeacademy'};
const SERV=[
['coworking','Coworking','Un espace de travail qui vous inspire',PH.form2,['Wi-Fi haut débit sécurisé inclus','Espaces lounge et zones de détente','Café et thé offerts toute la journée','Accès flexible : journée, semaine, mois']],
['formations','Formations','Boostez vos compétences',PH.form1,['Programmes certifiants personnalisés','Formateurs experts de leur domaine','Présentiel et distanciel disponibles','Petits groupes pour un suivi optimal']],
['domiciliation','Domiciliation','Une adresse professionnelle à Alger',PH.hall2,['Adresse légale et fiscale reconnue','Réception et gestion du courrier','Assistance administrative incluse','Sans engagement, tarifs compétitifs']],
['bureaux','Bureaux privatifs','Votre bureau dédié, clé en main',PH.bureaux,['Bureaux de 1 à 10 personnes','Mobilier et équipements premium inclus','Accès sécurisé 24 h/24 et 7 j/7','Contrats flexibles et évolutifs']],
['incubateur','Incubateur','Faites grandir votre startup',PH.dom,['Mentorat et accompagnement personnalisé','Réseau d\'experts et d\'investisseurs','Ateliers et workshops spécialisés','Espace de travail dédié à votre projet']]];
const EQUIP=[['wifi','Wi-Fi haut débit','Connexion fibre optique ultra-rapide et sécurisée dans tout l\'espace.'],['print','Impression gratuite','Imprimante laser et scanner à disposition de tous les membres.'],['sofa','Espaces lounge','Zones de détente confortables pour vos pauses et échanges informels.'],['room','Salles de réunion','Salles équipées réservables pour vos réunions et présentations.'],['cup','Café et thé offerts','Boissons chaudes à volonté pour rester productif toute la journée.'],['lock','Accès sécurisé','Contrôle d\'accès et vidéosurveillance pour votre tranquillité.']];
const CAT={vente:['Commercial & vente','#1f6fff'],mkt:['Marketing','#6a5cff'],client:['Accueil & relation client','#00a6c8'],ia:['IA, données & conformité','#0b3a8c'],peda:['Pédagogie','#2f4fd6']};
const F=[
['delegue','Délégué commercial','vente','Les fondamentaux du métier : prospection, présentation de l\'offre, suivi du portefeuille clients et reporting.'],
['vente','La maîtrise des techniques de vente','vente','Découverte du besoin, argumentation, traitement des objections et conclusion de la vente.'],
['negociation','Maîtriser la négociation commerciale','vente','Préparer, conduire et conclure une négociation gagnant-gagnant avec ses clients et partenaires.'],
['force','Force de vente et marketing clientèle','vente','Organiser, animer et piloter une équipe commerciale orientée vers la satisfaction client.'],
['distribution','La fonction distribution','vente','Canaux, logistique et relations avec les distributeurs : comprendre et optimiser la distribution.'],
['comcom','Comprendre la communication commerciale','mkt','Les outils et messages qui font connaître une offre et déclenchent l\'acte d\'achat.'],
['initmkt','Initiation au marketing','mkt','Les bases du marketing : marché, cible, positionnement et mix marketing.'],
['industriel','Comprendre le marketing industriel','mkt','Les spécificités du marketing B2B et industriel : cycles longs, acheteurs multiples, valeur.'],
['produit','Comprendre le produit','mkt','Analyser une offre, sa valeur perçue et son cycle de vie pour mieux la vendre.'],
['operationnel','Le marketing opérationnel','mkt','Passer de la stratégie à l\'action : plans d\'action, promotion, suivi et mesure.'],
['etude','Maîtriser l\'étude de marché','mkt','Collecter, analyser et exploiter les données du marché pour prendre les bonnes décisions.'],
['services','Maîtriser le marketing des services','mkt','Concevoir et promouvoir une offre de services : qualité, expérience et fidélisation.'],
['information','L\'information, l\'élément de toutes les convoitises','mkt','Veille, collecte et exploitation de l\'information comme avantage concurrentiel.'],
['interpersonnelle','La communication interpersonnelle','client','Écoute active, assertivité et gestion des échanges pour des relations professionnelles efficaces.'],
['receptionniste','Le réceptionniste','client','Accueil physique et téléphonique, gestion des visiteurs et image de l\'entreprise.'],
['accueil','Accueil client','client','Les bonnes pratiques d\'un accueil professionnel qui fidélise la clientèle.'],
['soutien','Soutien au service à la clientèle','client','Traiter les demandes et les réclamations pour garantir la satisfaction client.'],
['chatgpt','Formation ChatGPT','ia','Utiliser l\'intelligence artificielle générative au quotidien : rédiger, analyser, gagner du temps.'],
['loi','Loi 18-07 & Loi 25-11','ia','Le cadre légal algérien de la protection des données à caractère personnel et sa mise en conformité.'],
['donnees','Protection des données personnelles','ia','Sécuriser et protéger les données personnelles au sein de l\'entreprise.'],
['formateur','Formation de formateur','peda','Concevoir, animer et évaluer une formation professionnelle efficace.']];
