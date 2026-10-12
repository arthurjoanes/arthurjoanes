<img src="assets/banner.png" alt="Arthur Joanes — IA, Microsoft Fabric, Azure, engenharia de dados e full stack" width="1200">

[Português](README.md) · [LinkedIn](https://www.linkedin.com/in/arthur-joanes-6a2967373/) · [Email](mailto:arthurjoanes@hotmail.com)

I'm a **mid-level software developer** with over three years of software development experience. I work on Python APIs, web applications, data engineering and applied AI for retail operations.

My work connects ERP integrations to the interfaces used by teams, including access permissions, data quality and monitoring applications in production.

## Professional experience

- **AI for store data queries.** I developed Sol, a WhatsApp assistant using Meta's official API, with permission checks, data isolation between stores and response verification.
- **Financial automation.** I integrated an ERP with WhatsApp using Python, FastAPI and Next.js to automate payment reminders, freeing one person from a manual routine that took their entire workday.
- **Data at scale.** I maintain Microsoft Fabric pipelines for a platform with **over 3.8 billion records**, serving **more than 800 stores across 23 Brazilian states**. I implemented checks that block incomplete data from publication and allow periods to be reprocessed without duplicating records.
- **AI observability.** I developed a dashboard with FastAPI, Next.js and KQL in Azure Log Analytics to investigate failures and track response cost and quality.

## Selected projects

Personal projects using open or synthetic data, depending on the use case. Each repository documents its sources, setup and technical decisions.

### [CycleOps](https://github.com/arthurjoanes/cycleops)

Bike station availability in Oslo, with incident prioritization, a map and history. The demo replays a real GBFS feed recording; the local environment supports live collection.

[Open demo (recorded replay)](https://arthurjoanes.github.io/cycleops/)

**Python · FastAPI · PostgreSQL · React · TypeScript · MapLibre**

### [QuakeExposure](https://github.com/arthurjoanes/quake-exposure)

Earthquake exposure queries using USGS events and ShakeMap, a fictional asset portfolio and comparisons between published results. The demo uses a calculated snapshot; the local environment includes portfolio updates through CDC.

[Open demo (snapshot)](https://arthurjoanes.github.io/quake-exposure/)

**Python · FastAPI · PostGIS · Kafka · Debezium · TypeScript · Leaflet**

### [EvidenceDesk](https://github.com/arthurjoanes/evidencedesk)

Investigates discrepancies between orders and payments using verifiable sources, optional AI drafts and review by another person before approval. The analysis workflow also works without AI generation.

**Python · FastAPI · PostgreSQL · Next.js · Optional Azure OpenAI**

Also in my portfolio:

- [**Gestão de Recebíveis**](https://github.com/arthurjoanes/gestao-recebiveis) — accounts receivable with CSV imports, payment recording without duplication and job recovery; reminders use a simulated provider that distinguishes delivery attempts from confirmed delivery.
- [**Varejo Data Pipeline**](https://github.com/arthurjoanes/varejo-data-pipeline) — PySpark and Delta Lake for coverage validation, revision handling and indicator publication; blocked or failed batches preserve the previous publication.
- [**Loja Assistente**](https://github.com/arthurjoanes/loja-assistente) — sales queries in Portuguese, with store-level authorization, backend calculations and optional AI.
- [**API Sentinel**](https://github.com/arthurjoanes/api-sentinel) — a B2B API with organization isolation, shared quotas and observability for failures and recovery.
- [**ContainerOps**](https://github.com/arthurjoanes/containerops) — an API and worker operations lab covering job recovery, backup, restore and rollback.

## Technologies I use at work

| Area | Tools |
| --- | --- |
| Backend | Python, FastAPI, Pydantic, SQL |
| Web applications | TypeScript, React, Next.js |
| Data engineering | Microsoft Fabric, PySpark, OneLake, Delta Lake, Power BI |
| Cloud, AI and observability | Azure Container Apps, Azure OpenAI, Azure Log Analytics, KQL |
| Quality and delivery | pytest, Docker, CI/CD |
| Integrations | Meta WhatsApp Cloud API, ERP integration |

## Education and contact

I'm studying **Computer Science at Rede de Ensino Doctum**, currently in my eighth semester. Based in **Raul Soares, Minas Gerais, Brazil**, I'm interested in fully remote opportunities in software development, applied AI and data.

Connect with me on [LinkedIn](https://www.linkedin.com/in/arthur-joanes-6a2967373/) or email **[arthurjoanes@hotmail.com](mailto:arthurjoanes@hotmail.com)**.
