---
layout: default 
title: Writing 
description: Latest articles
permalink: /blog/
---

<div class="blog-container">
    <div class="blog-posts">
        <h1>Writing</h1>
        <ul class="post-list">
            {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
            {% for post in sorted_posts %}
            <li>
                <a class="post-link" href="{{ post.url | relative_url }}">
                    {% if forloop.index0 == 0 %} 
                    <span class="red-dot"></span>
                    {% endif %}
                    <span class="post-title">{{ post.title }}</span>
                    <span class="post-date">{{ post.date | date: "%m-%d-%Y" }}</span>
                </a>
            </li>
            {% endfor %}
        </ul>
    </div>
</div>