---
layout: page
title: repositories
permalink: /repositories/
description: Showcase of my prominent GitHub repositories and contributions.
nav: true
nav_order: 5
---

<!-- Repositories Page with Royal Bluish Design -->

<div class="royal-card" style="text-align: center; margin-bottom: 3rem;">
  <h1 class="section-title-posh" style="margin-bottom: 1rem;">Featured Repositories</h1>
  <p class="royal-card-content" style="font-size: 1.1rem; color: #6b8cbe;">
    A curated collection of my most impactful research projects and open-source contributions in computational biology, machine learning, and computer vision.
  </p>
</div>

{% if site.data.repositories.github_users %}

<div class="royal-card">
  <h2 class="subsection-title-posh">GitHub Profile</h2>
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center" style="margin-top: 1.5rem;">
    {% for user in site.data.repositories.github_users %}
      {% include repository/repo_user.liquid username=user %}
    {% endfor %}
  </div>
</div>

{% if site.repo_trophies.enabled %}

<div class="royal-card">
  <h2 class="subsection-title-posh">GitHub Achievements</h2>
  {% for user in site.data.repositories.github_users %}
    {% if site.data.repositories.github_users.size > 1 %}
      <h4 style="color: #4a90e2; font-weight: 500; margin-bottom: 1rem;">{{ user }}</h4>
    {% endif %}
    <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center" style="margin-top: 1.5rem;">
      {% include repository/repo_trophies.liquid username=user %}
    </div>
  {% endfor %}
</div>
{% endif %}
{% endif %}

{% if site.data.repositories.github_repos %}

<div class="royal-card">
  <h2 class="subsection-title-posh">Prominent Repositories</h2>
  <p class="royal-card-content" style="margin-bottom: 2rem; color: #6b8cbe;">
    These repositories showcase my work across different domains of computer science and research.
  </p>
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center" style="gap: 1.5rem;">
    {% for repo in site.data.repositories.github_repos %}
      {% include repository/repo.liquid repository=repo %}
    {% endfor %}
  </div>
</div>
{% endif %}
