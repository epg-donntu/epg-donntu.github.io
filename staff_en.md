---
title: Chair structure
layout: top_en.liquid
data:
  ru: staff_ru.html
---

## Chair structure


<table id="staff">
{%- for person in site.data.staff.working %}
{%- assign pdata = site.data.staff[person] %}
{%- assign fullname = pdata.en.name | append: " " | append: pdata.en.surname %}
  <tr> 
	<td><a href="staff/{{ person }}_en.html">{{ fullname }}</a></td>
	<td>{% if pdata.en.degree %}{{ pdata.en.degree }}, {% endif %}{{ pdata.en.post }}</td>
  </tr>
{%- endfor %}
</table>

<div id="staffphoto">

[<img src="../images/staff/staff.jpg" title="Employees of the EPG department" data-border="0" alt="Employees of the EPG department" />](../images/staff/staff_big.jpg)
