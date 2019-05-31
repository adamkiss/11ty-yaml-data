# Yaml documents as a DB for 11ty - demo

This is just a quick demo for using Yaml (as multiple documents) & Markdown with 11ty.

Here is a loop over the database (in Handlebars.js):

{{#each db}}

<h1>{{title}}</h1>

{{{body}}}

<hr/>

{{/each}}