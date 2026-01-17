---
layout: page
title: repositories
permalink: /repositories/
description: Curated collection of my research projects and open-source contributions.
nav: true
nav_order: 5
---

<div style="text-align: center; margin-bottom: 3rem;">
  <h1 style="font-size: 2.5rem; font-weight: 600; color: #2c3e50; margin-bottom: 1rem;">Featured Repositories</h1>
  <p style="font-size: 1.1rem; color: #7f8c8d; max-width: 800px; margin: 0 auto;">
    Impactful research projects spanning computational biology, computer vision, and machine learning
  </p>
</div>

{% if site.data.repositories.github_repos %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center" style="gap: 2rem; margin-top: 2rem;">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
