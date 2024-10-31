---
title: Состав кафедры
layout: top_ru.liquid
data:
  en: staff_en.html
---

## Состав кафедры

<table id="staff">
{%- for person in site.data.staff.working %}
{%- assign pdata = site.data.staff[person] %}
{%- assign fullname = pdata.ru.surname | append: " " | append: pdata.ru.name | append: " " | append: pdata.ru.thirdname %}
  <tr> 
	<td><a href="staff/{{ person }}_ru.html">{{ fullname }}</a></td>
	<td>{% if pdata.ru.degree_short %}{{ pdata.ru.degree_short }}, {% endif %}{{ pdata.ru.post_short }}</td>
  </tr>
{%- endfor %}
  <tr> 
	<td><a href="staff/yzhe_net_ru.html">Те, кого с нами уже нет</a></td>
	<td></td>
  </tr>
</table>

<div id="staffphoto">

[<img src="../images/staff/staff.jpg" title="Сотрудники кафедры ЕПГ" data-border="0" alt="Сотрудники кафедры ЕПГ" />](../images/staff/staff_big.jpg)

</div>
