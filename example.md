Bwyan's Markdown Previwer
================

A React.js Project for Free Code Camp 
-------------------------------------

This page offers a brief overview of what it's like to use Markdown. Markdown should be very easy to pick up simply by
looking at a few examples of it in action.

**Note:** This document is itself written using Markdown.


## Paragraphs, Headers, Blockquotes ##

A paragraph is simply one or more consecutive lines of text, separated
by one or more blank lines. (A blank line is any line that looks like a
blank line -- a line containing nothing spaces or tabs is considered
blank.) Normal paragraphs should not be intended with spaces or tabs.

Markdown offers two styles of headers: *Setext* and *atx*.
Setext-style headers for `<h1>` and `<h2>` are created by
"underlining" with equal signs (`=`) and hyphens (`-`), respectively.
To create an atx-style header, you put 1-6 hash marks (`#`) at the
beginning of the line -- the number of hashes equals the resulting
HTML header level.

Blockquotes are indicated using email-style '`>`' angle brackets.

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

A First Level Header
====================
    
A Second Level Header
---------------------

Now is the time for all good men to come to
the aid of their country. This is just a
regular paragraph.

The quick brown fox jumped over the lazy
dog's back.
    
> This is a blockquote.
> 
> This is the second paragraph in the blockquote.
>
> ## This is an H2 in a blockquote



### Phrase Emphasis ###

Markdown uses asterisks and underscores to indicate spans of emphasis.

Some of these words *are emphasized*.
Some of these words _are emphasized also_.
    
Use two asterisks for **strong emphasis**.
Or, if you prefer, __use two underscores instead__.


## Lists ##

Unordered (bulleted) lists use asterisks, pluses, and hyphens (`*`,
`+`, and `-`) as list markers. These three markers are
interchangeable:

* Candy.
+ Gum.
- Booze.

Ordered (numbered) lists use regular numbers, followed by periods, as
list markers:

1. Red
2. Green
3. Blue

### Links ###

Markdown supports two styles for creating links: *inline* and
*reference*. With both styles, you use square brackets to delimit the
text you want to turn into a link.

Inline-style links use parentheses immediately after the link text.
For example:

This is an [example link](http://example.com/).

Optionally, you may include a title attribute in the parentheses:

This is an [example link](http://example.com/ "With a Title").

Reference-style links allow you to refer to your links by names, which
you define elsewhere in your document:

I get 10 times more traffic from [Google][1] than from
[Yahoo][2] or [MSN][3].

[1]: http://google.com/        "Google"
[2]: http://search.yahoo.com/  "Yahoo Search"
[3]: http://search.msn.com/    "MSN Search"

### Images ###

Image syntax is very much like link syntax.

Inline (titles are optional):

![Screenshot of Free Code Camp Calculator](https://github.com/bwyan/fcc-assets/blob/master/portfolio/fcc-calc@2x.png?raw=true "My Free Code Camp Calculator")

### Code ###

In a regular paragraph, you can create code span by wrapping text in
backtick quotes. Any ampersands (`&`) and angle brackets (`<` or
`>`) will automatically be translated into HTML entities. This makes
it easy to use Markdown to write about HTML example code:

I strongly recommend against using any `<blink>` tags.

I wish SmartyPants used named entities like `&mdash;`
instead of decimal-encoded entites like `&#8212;`.

To specify an entire block of pre-formatted code, indent every line of
the block by 4 spaces or 1 tab. Just like with code spans, `&`, `<`,
and `>` characters will be escaped automatically.

    <p>If you want your page to validate under XHTML 1.0 Strict,
    you've got to put paragraph tags in your blockquotes:</p>
    
    <pre><code>&lt;blockquote&gt;
        &lt;p&gt;For example.&lt;/p&gt;
    &lt;/blockquote&gt;
    </code></pre>

