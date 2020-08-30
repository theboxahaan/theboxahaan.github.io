---
title: Home
js: []
css: ['/assets/css/home.css']
order: 1
layout: default
---
<div class="fixbar four columns">
&nbsp;    
</div>
<div class="fixbar-front">
    <div class="spacer"></div>
    <div class="header row">
        <h1 class="header">the<b>box</b></h1>
        <h3 class="header-small">AHAAN</h3>
    </div>
    <div class="row">
        <img class="profile-pic" src="/assets/images/haddock.jpg">
    </div>
    <div class="spacer"></div>
    <div class="contents row">
    <h3>Affiliations</h3>
    <ul>
        <li>IIT Bhilai</li>
        <li>de.ci.phe.red LAB</li>
    </ul>
    </div>
    <!-- <div class="spacer"></div> -->
    <a href="https://github.com/theboxahaan">
        <div class="foot row">
            <span>This project is maintained by</span>
            <small><span class="gituser">github.com/theboxahaan</span></small>
        </div>
    </a>
</div>
<div class="material eight columns">
    <div class="row">
        <h2>Updates</h2>
        <div class="updates">
        {% for i in site.data.updates %}
            <ul>
                {% assign href = site.posts | where: 'name', i.name | first %}
                <li><b>{{i.date}}</b>: <a href="{{href.url | absolute_url }}">[{{i.title}}]</a><br> <b>===></b> {{i.msg}}</li>
            </ul>
        {% endfor %}
        </div>
    </div>
    <div class="spacer"></div>
    <div class="row">
        <h2><code>$~ who am i</code></h2>
        <p> Hi.
        I'm a security researcher hoping to make it big in the field. This is a collection of notes and posts that I have cwritten over time relating to my work, as I unravel my interests and explore the (un)knowns.<br>
        CS is great. There is lots of stuff to do and not a lot required to get started. So you might find posts on ML, Compilers and some other doo-dah that ignited my curiosity :P
        </p>
        <blockquote><h3>Have issues ?</h3>
        <p>Feel free to get in touch and I'll do my best to respond.</p></blockquote>
    </div>
    <!-- <div class="spacer"></div> -->
    <div class="row">
        <h2>what else</h2>
        <p>If you are a <b>John Petrucci</b> fan by any chance ♥<br>
        I am also into basketball, guitar (...duh) and a bunch of other stuff. I enjoy playing third person triple A titles. <b>Arkham Knight</b> anyone ;) and dabble in web design from time to time.
        </p>
    </div>
    <div class="spacer"></div>
    <!-- <div class="row">
        <blockquote>
        <h3>acknowledgements</h3>
        <p> Credits to <code>Hergé(1941)</code> for giving us Captain Haddock. I hope this qualifies as fair use. Shout out to the maintainers of <a href="http://getskeleton.com/"><code>skeleton css</code></a>boilerplate & <a href="https://buttons.github.io/"><code>GitHub:Buttons</code></a>. Finally, this jekyll theme is inspired by one from <a href="https://github.com/orderedlist"><code>orderedlist</code></a>
        </p>
        </blockquote>
    </div> -->
</div>
