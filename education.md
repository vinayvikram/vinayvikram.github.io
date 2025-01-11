---
layout: page
title: Education
permalink: /education
---

{% for education in site.data.education %}
---
### {{ education.course }}
**[{{ education.institute }}]({{ education.institute_url }})**  
*{{ education.location }}*  
{{ education.completed }} |
**{{ education.grade }}** 
 

{% endfor %}
