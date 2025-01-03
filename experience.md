---
layout: page
title: Experience
permalink: /experience/
---

{% for experience in site.data.experiences %}
---
### {{ experience.designation }} 
**[{{ experience.company }}]({{ experience.company_linkedin_page }})**  
{{ experience.location }}  
**_{{ experience.job_type }}_**  
*{{ experience.start_date }}* - *{{ experience.end_date}}*  

{% for item in experience.work_details %}
 - {{ item }}
{% endfor %}

{% endfor %}