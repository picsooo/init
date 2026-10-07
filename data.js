const IMG='https://initiativeacademy.dz/wp-content/uploads/';
const PH={logo:IMG+'2026/06/ia-logo-v2.png',hall:IMG+'2026/08/hall-dentree01.jpeg',hall2:IMG+'2026/08/hall-dentree.jpeg',form1:IMG+'2026/08/salle-de-formation-01.jpeg',form2:IMG+'2026/08/salle-de-formation-02.jpeg',bureaux:IMG+'2026/08/Bureaux-privatifs.jpeg',dom:IMG+'2026/06/ia-domiciliation-room.jpg',jardin:IMG+'2026/06/ia-jardin-3.jpg',jardin2:IMG+'2026/06/ia-jardin-2.jpg',reception2:IMG+'2026/06/ia-reception-2.jpg',salle2:IMG+'2026/06/ia-salle-2.jpg',interior:IMG+'2026/06/ia-interior-1.jpg'};
const CO={tel:'0798 276 563',telh:'+213798276563',mail:'contact@initiativeacademy.dz',adr:'Saïd Hamdine, Alger, Algérie',fb:'https://www.facebook.com/initiativeacademy.dz',ig:'https://www.instagram.com/initiativeacademy.dz',li:'https://www.linkedin.com/company/initiativeacademy'};
const SERV=[
['coworking','Coworking','Un espace de travail qui vous inspire',PH.form2,['Wi-Fi haut débit sécurisé inclus','Espaces lounge et zones de détente','Accès flexible : journée, semaine, mois']],
['formations','Formations','Boostez vos compétences',PH.form1,['Programmes certifiants personnalisés','Formateurs experts de leur domaine','Présentiel et distanciel disponibles','Petits groupes pour un suivi optimal']],
['domiciliation','Domiciliation','Une adresse professionnelle à Alger',PH.hall2,['Adresse légale et fiscale reconnue','Réception et gestion du courrier','Assistance administrative incluse','Sans engagement, tarifs compétitifs']],
['bureaux','Bureaux privatifs','Votre bureau dédié, clé en main',PH.bureaux,['Bureaux de 1 à 10 personnes','Mobilier et équipements premium inclus','Accès sécurisé 24 h/24 et 7 j/7','Contrats flexibles et évolutifs']],
['incubateur','Incubateur','Faites grandir votre startup',PH.dom,['Mentorat et accompagnement personnalisé','Réseau d\'experts et d\'investisseurs','Ateliers et workshops spécialisés','Espace de travail dédié à votre projet']],
['detente','Espace détente','Un jardin pour souffler entre deux rendez-vous',PH.jardin2,['Jardin extérieur au calme','Coin pause pour décompresser','Idéal pour un appel ou un café entre membres','Accessible à tous les membres']]];
const EQUIP=[['wifi','Wi-Fi haut débit','Connexion fibre optique ultra-rapide et sécurisée dans tout l\'espace.'],['print','Impression','Imprimante laser et scanner à disposition de tous les membres.'],['sofa','Espaces lounge','Zones de détente confortables pour vos pauses et échanges informels.'],['room','Salles de réunion','Salles équipées réservables pour vos réunions et présentations.'],['lock','Accès sécurisé','Contrôle d\'accès et vidéosurveillance pour votre tranquillité.']];
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
// Fiches détaillées (reprises d'Office Switch)
const FD={
chatgpt:{titre:'Introduction à l\'IA générative ChatGPT pour non-techniciens',duree:'2 jours (14 heures)',niveau:'Débutant',places:'10 personnes',prereq:'Avoir un PC',
 objectif:'Démystifier l\'outil ChatGPT pour comprendre son utilité et comment il peut être exploité pour augmenter sa productivité sur des tâches souvent répétitives et chronophages.',
 prog:[['Jour 1',[
  ['Introduction aux notions de base de l\'IA générative (1 h 30)',['Petit historique de l\'IA, d\'Alan Turing à nos jours','Qu\'est-ce qu\'un LLM (Large Language Model) ?','Qu\'est-ce qu\'un prompt ?','Qu\'est-ce qu\'un token ?']],
  ['Qu\'est-ce que ChatGPT et comment il fonctionne (2 h)',['Les principales différences entre les versions gratuites et payantes','Les interfaces et les options','Création et paramétrage du compte, personnalisation']],
  ['ChatGPT en action, niveau 1 — ateliers pratiques (3 h 30)',['La génération de textes contextuels','Le traitement de texte par l\'IA','La génération de tableaux sur mesure']]]],
 ['Jour 2',[
  ['Exploration des applications pratiques de ChatGPT (3 h 30)',['La génération d\'images (et ses limites)','L\'analyse de documents','Introduction aux GPTs : qu\'est-ce qu\'un GPT, quelles sont les rubriques existantes','Introduction à la console de création d\'un GPT']],
  ['Atelier pratique : mettre en œuvre ChatGPT pour des tâches répétitives et chronophages (3 h)',[]],
  ['Discussion sur les limites et les considérations éthiques de l\'utilisation de ChatGPT (30 min)',[]]]]],
 methode:'La formation alterne entre des présentations théoriques, des démonstrations pratiques et des ateliers interactifs pour permettre aux participants de mettre en pratique les concepts appris.'},
formateur:{titre:'Training of Trainers (TOT)',duree:'3 jours de pratique intensive + 3 mois de suivi personnel',niveau:'Débutant',places:'15 personnes',
 prereq:'Expérience préalable dans le domaine à enseigner (souvent recommandée) · Compétences de base en communication et en animation de groupes',
 objectifs:['Développer des compétences en conception et animation de formations','Acquérir des méthodes pédagogiques efficaces','Savoir évaluer les besoins de formation et les résultats des apprenants','Maîtriser les outils et techniques de présentation','Favoriser l\'interactivité et l\'engagement des apprenants'],
 public:['Formateurs internes et externes','Responsables de formation','Managers souhaitant développer des compétences de formation'],
 prog:[['Contenu de la formation',[
  ['1. Introduction à la formation de formateurs',['Rôles et responsabilités du formateur','Qualités d\'un bon formateur']],
  ['2. Conception pédagogique',['Analyse des besoins de formation','Élaboration des objectifs pédagogiques','Conception des supports de formation (diaporamas, fiches techniques, etc.)']],
  ['3. Méthodes et techniques pédagogiques',['Méthodes actives et participatives','Techniques d\'animation de groupe','Gestion des dynamiques de groupe']],
  ['4. Techniques de présentation',['Prise de parole en public','Utilisation efficace des outils audiovisuels','Structuration d\'une session de formation']]]]],
 certif:'Attestation de formation'},
delegue:{titre:'Délégué commercial : une formation complète pour réussir',duree:'5 jours / 30 heures',niveau:'Débutant',places:'15 personnes',
 intro:'Le délégué commercial est un professionnel du commerce chargé de développer les ventes d\'une entreprise auprès d\'une clientèle professionnelle. Cette formation complète permet aux stagiaires d\'acquérir toutes les compétences nécessaires pour exercer ce métier.',
 atouts:['Métier en demande','Modules théoriques et pratiques','Compétences techniques','Formateurs expérimentés','Salle équipée','Attestation','Bonne communauté','Petit déjeuner'],
 objectifs:['Acquérir les compétences techniques et comportementales nécessaires pour exercer le métier de délégué commercial','Développer son sens de l\'écoute et de la communication','Construire une relation de confiance avec les clients','Réaliser des objectifs de vente'],
 prog:[['Modules',[['Modules propres au métier',['Les différentes appellations du métier','Les avantages et les inconvénients du poste','Les qualités et compétences requises','Les évolutions possibles et les missions','Les documents commerciaux et les conditions générales de vente','Les techniques de vente et les méthodes aidant la vente','Comment devenir un bon commercial et comment présenter un produit']]]]]}
};
F.find(f=>f[0]==='delegue')[3]='Le délégué commercial développe les ventes d\'une entreprise auprès d\'une clientèle professionnelle. Une formation complète de 5 jours pour exercer ce métier.';
F.find(f=>f[0]==='chatgpt')[3]='Démystifier ChatGPT et l\'exploiter pour gagner en productivité sur les tâches répétitives. 2 jours, 14 heures.';
F.find(f=>f[0]==='formateur')[3]='Training of Trainers : concevoir, animer et évaluer une formation. 3 jours de pratique et 3 mois de suivi.';
// Pages services détaillées
const SD={
coworking:{t:'Coworking',h:'Un espace de travail qui vous inspire',img:PH.form2,grp:'Espaces',
 intro:'Un poste de travail dans un espace moderne et entièrement équipé, au sein d\'une communauté d\'entrepreneurs, de freelances et de startups. Vous venez quand vous voulez, vous payez ce que vous utilisez.',
 incl:['Wi-Fi haut débit sécurisé inclus','Espaces lounge et zones de détente','Impression et scan à disposition','Accès aux salles de réunion sur réservation','Événements et rencontres entre membres'],
 formules:[['Journée','Pour une réunion, une journée de travail au calme ou pour essayer l\'espace.'],['Semaine','Pour un projet ponctuel ou une période chargée.'],['Mois','Pour faire d\'Initiative Academy votre bureau au quotidien.']],
 pour:['Freelances et indépendants','Startups et porteurs de projet','Télétravailleurs','Équipes en déplacement à Alger']},
bureaux:{t:'Bureaux privatifs',h:'Votre bureau dédié, clé en main',img:PH.bureaux,grp:'Espaces',
 intro:'Un bureau fermé rien que pour votre équipe, meublé et équipé, avec tous les services du hub. Vous emménagez et vous travaillez dès le premier jour.',
 incl:['Bureaux de 1 à 10 personnes','Mobilier et équipements premium inclus','Accès sécurisé 24 h/24 et 7 j/7','Contrats flexibles et évolutifs','Wi-Fi et impression inclus','Accès aux salles de réunion et aux espaces communs'],
 formules:[['Bureau individuel','Pour un dirigeant, un consultant ou un professionnel libéral.'],['Bureau d\'équipe','De 2 à 10 postes pour votre équipe.'],['Sur mesure','Une configuration adaptée à votre activité.']],
 pour:['PME et filiales','Startups en croissance','Cabinets et consultants','Entreprises étrangères qui s\'installent à Alger']},
domiciliation:{t:'Domiciliation d\'entreprise',h:'Une adresse professionnelle à Alger',img:PH.hall2,grp:'Entreprises',
 intro:'Domiciliez le siège social de votre entreprise à Saïd Hamdine, Alger, sans louer de bureau. Une adresse légale et fiscale reconnue pour votre registre du commerce, vos documents officiels et votre image.',
 incl:['Adresse légale et fiscale reconnue','Attestation de domiciliation pour le registre du commerce','Réception et gestion de votre courrier','Notification à l\'arrivée de chaque courrier','Assistance administrative incluse','Accès aux salles de réunion pour recevoir vos clients','Sans engagement, tarifs compétitifs'],
 etapes:[['Rendez-vous','Nous étudions votre situation : création, transfert de siège ou ouverture d\'une agence.'],['Dossier','Vous nous remettez les pièces demandées, nous préparons le contrat de domiciliation.'],['Attestation','Vous recevez votre attestation de domiciliation pour vos démarches.'],['Gestion du courrier','Nous réceptionnons votre courrier et vous prévenons à chaque arrivée.']],
 pour:['Créateurs d\'entreprise','Entreprises qui transfèrent leur siège','Auto-entrepreneurs et freelances','Sociétés étrangères qui s\'implantent en Algérie']},
creation:{t:'Création d\'entreprise',h:'Créez votre entreprise sans perdre de temps',img:PH.dom,grp:'Entreprises',
 intro:'Nous vous accompagnons de l\'idée jusqu\'à l\'immatriculation : choix de la forme juridique, choix des activités, constitution du dossier et suivi des démarches. Vous pouvez créer votre registre du commerce avec une adresse chez nous, sans avoir à louer de bureau.',
 incl:['Conseil sur la forme juridique (personne physique, EURL, SARL, SPA…)','Aide au choix des codes d\'activité CNRC','Domiciliation du siège social incluse','Constitution et vérification du dossier','Suivi des démarches : registre du commerce, NIF, NIS, CASNOS','Ouverture du compte bancaire : accompagnement'],
 etapes:[['Diagnostic','Un premier rendez-vous pour définir votre projet, votre activité et la forme juridique adaptée.'],['Dossier','Nous préparons avec vous la liste des pièces et les documents nécessaires.'],['Immatriculation','Nous suivons le dépôt et les démarches jusqu\'à l\'obtention du registre du commerce.'],['Démarrage','Identifiants fiscaux, affiliation, compte bancaire : votre entreprise est prête à travailler.']],
 pour:['Porteurs de projet','Jeunes diplômés','Freelances qui veulent se structurer','Investisseurs et diaspora']},
assistance:{t:'Assistance administrative',h:'Vos démarches, entre de bonnes mains',img:PH.hall,grp:'Entreprises',
 intro:'Gagnez du temps sur la paperasse. Notre équipe et notre coursier administratif vous aident à gérer les démarches liées aux impôts, aux déclarations, aux formalités de l\'entreprise et à la CASNOS.',
 incl:['Coursier administratif pour vos dépôts et retraits de documents','Suivi des déclarations et des échéances','Formalités auprès des administrations','Démarches liées à la CASNOS','Modifications du registre du commerce','Conseil et orientation au quotidien'],
 etapes:[['Besoin','Vous nous expliquez la démarche à effectuer.'],['Préparation','Nous vérifions avec vous les documents nécessaires.'],['Exécution','Notre coursier se charge des déplacements et des dépôts.'],['Suivi','Nous vous tenons informé jusqu\'à la fin de la démarche.']],
 pour:['Entreprises domiciliées','Dirigeants de TPE et PME','Freelances et auto-entrepreneurs','Membres du coworking']},
boite:{t:'Boîte postale',h:'Votre courrier, reçu et géré pour vous',img:PH.hall2,grp:'Entreprises',
 intro:'Une adresse de réception pour votre courrier professionnel, gérée par notre équipe d\'accueil. Fini les courriers perdus : vous êtes prévenu à chaque arrivée et vous le récupérez quand vous voulez.',
 incl:['Adresse de réception à Saïd Hamdine, Alger','Réception du courrier et des colis','Notification à chaque arrivée','Conservation sécurisée de votre courrier','Retrait aux horaires d\'ouverture','Réexpédition possible sur demande'],
 etapes:[['Inscription','Vous choisissez la formule et signez le contrat.'],['Adresse','Vous communiquez votre nouvelle adresse à vos partenaires.'],['Réception','Nous réceptionnons et vous prévenons à chaque arrivée.'],['Retrait','Vous passez récupérer votre courrier, ou nous le réexpédions.']],
 pour:['Entreprises domiciliées','Professionnels souvent en déplacement','Entreprises sans local fixe','Particuliers et professionnels libéraux']},
incubateur:{t:'Incubateur',h:'Faites grandir votre startup',img:PH.dom,grp:'Espaces',
 intro:'Un accompagnement pour transformer une idée en entreprise solide : mentorat, réseau d\'experts et d\'investisseurs, ateliers spécialisés et espace de travail dédié.',
 incl:['Mentorat et accompagnement personnalisé','Réseau d\'experts et d\'investisseurs','Ateliers et workshops spécialisés','Espace de travail dédié à votre projet','Accès aux formations du hub','Mise en relation avec la communauté'],
 etapes:[['Candidature','Vous nous présentez votre projet.'],['Sélection','Un entretien pour évaluer le projet et vos besoins.'],['Accompagnement','Mentorat, ateliers et suivi régulier.'],['Lancement','Vous êtes prêt à lancer et faire grandir votre activité.']],
 pour:['Startups en phase d\'idée ou de lancement','Porteurs de projets innovants','Étudiants entrepreneurs','Projets à impact']}
};
const SORDER=['creation','domiciliation','boite','assistance','coworking','bureaux','incubateur'];
