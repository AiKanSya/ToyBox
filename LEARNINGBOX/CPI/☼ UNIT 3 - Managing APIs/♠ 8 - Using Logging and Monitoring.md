# ♠ 8 [USING LOGGING AND MONITORING](https://learning.sap.com/learning-journeys/developing-with-sap-integration-suite/using-logging-and-monitoring_e83faa28-1ebd-41e5-87b7-1a053c336b36)

> :exclamation: Objectifs
>
> - [ ] Use the different ways to log health data and messages, displayed in a monitor.

## LOGGING AND MONITORING

### HEALTH MONITORING WITH SAP CLOUD ALM

Dans l'application `Health Monitoring`, vous pouvez vérifier le `health` (l'état de santé) votre `monitored cloud service` et de vos `technical systems` surveillés du point de vue de l'application et du client (customer perspective). Les `Technical metrics` sont collectées régulièrement et peuvent être utilisées pour calculer le `health` global de l’objet surveillé. Les `monitored metrics` sont définies par le service lui-même et peuvent différer pour chaque type de service.

Pour le moment, seule le `health monitoring` avec la solution `SAP Cloud ALM` est possible.

### ANALYZE API USAGE AND PERFORMANCE WITH THE BUILD-IN ADVANCED API ANALYTICS

`Advanced API Analytics` vous propose un tout nouveau `dashboard` d'analyse, fournissant des outils puissants et des rapports détaillés pour analyser l'utilisation et les performances de votre [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md). Les rapports sont classés dans plusieurs pages de rapport, chaque page de rapport fournissant des informations sur les `key API metrics` de l'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md), pertinentes à la fois pour les utilisateurs professionnels et les développeurs d'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md).

Accédez à Moniteur → API. Le `dashboard` s'ouvre.

![](./RESSOURCES/CLD900_U3_L7_01.png)

Il existe de nombreuses vues et options de configuration pour visualiser les informations pertinentes.

### LOGGING WITH MESSAGE LOGGING POLICIY

Si vous souhaitez utiliser une `logging solution` (solution de journalisation), `SAP API Management` vous permet d'envoyer des [messages syslog](../☼%20UNIT%200%20-%20Lexicon/♠%20Messages%20Syslog.md) au `third-party log management services` (service de gestion des journaux tiers). Si vous souhaitez envoyer syslog à un service tiers, suivez la [documentation du service](https://help.sap.com/docs/sap-api-management/sap-api-management/message-logging-policy?version=Cloud).

Les `third-party log management services` sont les suivants :

- `Splunk`

- `Sumo Logic`

- `Loggly`

- Autres

Un [messages syslog](../☼%20UNIT%200%20-%20Lexicon/♠%20Messages%20Syslog.md) contient les éléments et attributs suivants de requête et/ou de réponse en fonction de l'endroit où se trouve le flux.

- `Message` (Payload)

- `Host`

- `Port`

- `Protocol`

En conséquence, la capture d'écran suivante montre l'utilisation de `Splunk `:

![](./RESSOURCES/CLD900_20_U3L8_002_scr.png)

### RESOURCES

#### :small_red_triangle_down: Health Monitoring (Surveillance de l'état de santé) avec SAP Cloud ALM :

- En savoir plus ici : [Surveillance de la santé](https://support.sap.com/en/alm/sap-cloud-alm/operations/expert-portal/health-monitoring.html).

- En savoir plus ici : [Solutions prises en charge](https://help.sap.com/docs/cloud-alm/setup-administration/supported-solutions).

#### :small_red_triangle_down: Analysez l'utilisation et les performances de l'API grâce au build-in Advanced API Analytics.

- En savoir plus ici : [Analyser les API](https://help.sap.com/docs/SAP_CLOUD_PLATFORM_API_MANAGEMENT/66d066d903c2473f81ec33acfe2ccdb4/7712c611015045afb47d7c244fffee63.html?locale=en-US).

#### :small_red_triangle_down: Logging with Message Logging Policy (Journalisation avec la stratégie de journalisation des messages) :

- Apprenez-en davantage sur un blog pour utiliser Splunk et la politique de journalisation des messages : [Splunk – Partie 1 : Journalisation et surveillance SAP APIM | Blogues SAP](https://blogs.sap.com/2020/05/12/splunk-part-1-sap-apim-logging-monitoring/).

- En savoir plus sur un blog pour utiliser Loggly et la politique de journalisation des messages : [Partie 7 – Meilleures pratiques de sécurité des API – Consigner toutes les interactions API | Blogues SAP](https://blogs.sap.com/2017/08/21/sap-cloud-platform-api-management-log-all-api-interactions/).

- En savoir plus sur la politique de journalisation des messages : [Politique de journalisation des messages](https://help.sap.com/doc/66d066d903c2473f81ec33acfe2ccdb4/Cloud/en-US/6407ae7701814caa8a5107bdc3f44fe2.html).

#### :small_red_triangle_down: Inspection :

- En savoir plus dans un blog à utiliser : [Inspecter et comprendre la consommation des ressources... - SAP Community](https://community.sap.com/t5/technology-blogs-by-sap/inspecting-and-understanding-resource-consumption-of-your-integration/ba-p/13567246)

- Pour en savoir plus, consultez help.sap.com : [Inspecter la consommation de ressources pour le flux d'intégration individuel | Portail d'aide SAP](https://help.sap.com/docs/cloud-integration/sap-cloud-integration/inspect-resource-consumption-for-individual-integration-flow?q=Inspect%20Resource%20Consumption)

  ![](./RESSOURCES/CLD900_U3_L7_02.png)

### SUMMARY

Les `Metrics`, `usage` et les `performances` des `individual API calls` peuvent être examinées d'une part avec le `build-in Advanced API Analytics` et d'autre part avec le produit `SAP Cloud ALM`. Le `Logging` (journalisation) des paramètres de communication et de le `payload` est effectuée avec la `Message Logging Policy`. Il compile les données correspondantes et utilise une solution externe, comme `Loggly` ou autres, pour les visualiser.
