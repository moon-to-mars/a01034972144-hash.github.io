---
layout: page
title: 고딕 소설 비교
permalink: /gothic/
---

<h2>Frankenstein vs. Dracula</h2>
<div style="display: flex; gap: 1em;">
    <div style="flex: 1;"><h3>Frankenstein (Shelley, 1818)</h3>
        <div style="height: 500px;"><canvas id="chart-frankenstein"></canvas></div>
    </div>
    <div style="flex: 1;"><h3>Dracula (Stoker, 1897)</h3>
        <div style="height: 500px;"><canvas id="chart-dracula"></canvas></div>
    </div>
</div>

{% include chartjs.html %}
<script src="/assets/js/analysis.js"></script>
<script src="/assets/js/gothic.js"></script>