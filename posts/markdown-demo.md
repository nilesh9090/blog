---
title: Markdown Cheatsheet
date: 'october 10, 2022'
desc: 'It is markdown cheatsheet here you will find all thing related to markdown '
cover_image: '/images/blog5.jpg'
slug: markdown-demo
keyword: ['Markdown cheatsheet ','Markdown','react js',Nilesh Darji','Markdown blog','learning Markdown']
---

```md
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
```

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

---

## Horizontal Rules

```md
___
---
***
```
## Output
___




## Text Formatting

### Italic
```md
*asterisks* or _underscores_
```
output

*asterisks* or _underscores_


### Bold Text
```md
**This is bold text**

__This is bold text__
```
output

**This is bold text**

__This is bold text__

### Strikethrough
```md
~~Strikethrough~~
```
output

~~Strikethrough~~

---
## Blockquotes

```md
> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.
```
> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

---
## Lists

**Unordered**
```md
+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!
```
output

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

**Ordered**

```md
1. first Item
2. second Item
3. Third item
1. You can use sequential numbers...
1. ...or keep all the numbers as `1.` it will auto increase the number

Start numbering with offset:
57. foo
58. bar
```
output

1. first Item
2. second Item
3. Third item


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar



## Code


Indented code
```bash
    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code
```


Syntax highlighting
```md
``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
.```
```
output

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));

```
## Tables
**Default**
```md
| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
```
output

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

**Right aligned columns**
```md
| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
```
output

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
## Links
```md
[link text](https://codesktop.netlify.app/)
[link with title](https://codesktop.netlify.app/ "codesktop")
```
[link text](https://codesktop.netlify.app/)
[link with title](https://codesktop.netlify.app/  "codesktop")




## Images
```md
![Minion](https://octodex.github.com/images/minion.png)
![image with title](https://octodex.github.com/images/stormtroopocat.jpg "Title")
```

![Minion](https://octodex.github.com/images/minion.png)
![image with title](https://octodex.github.com/images/stormtroopocat.jpg "Title")


