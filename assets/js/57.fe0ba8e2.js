(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{325:function(e,t,r){"use strict";r.r(t);var a=r(0),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("This page provides an overview CSV (Comma Separated Values) format for data.")]),e._v(" "),r("p",[e._v("CSV is a very old, very simple and very common “standard” for (tabular) data."),r("br"),e._v("\nWe say “standard” in quotes because there was never a formal standard for CSV,"),r("br"),e._v("\nthough in 2005 someone did put together a "),r("a",{attrs:{href:"http://tools.ietf.org/html/rfc4180",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC"),r("OutboundLink")],1),e._v(" for it.")]),e._v(" "),r("p",[e._v("CSV is supported by a "),r("strong",[e._v("huge")]),e._v(" number of tools from spreadsheets like Excel,"),r("br"),e._v("\nOpenOffice and Google Docs to complex databases to almost all programming"),r("br"),e._v("\nlanguages. As such it is probably the most widely supported structured data"),r("br"),e._v("\nformat in the world.")]),e._v(" "),r("hr"),e._v(" "),r("h2",{attrs:{id:"the-format"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-format"}},[e._v("#")]),e._v(" The Format")]),e._v(" "),r("p",[e._v("Key points are:")]),e._v(" "),r("ul",[r("li",[e._v("CSV is probably the simplest possible structured format for data")]),e._v(" "),r("li",[e._v("CSV strikes a delicate balance, remaining readable by both machines & humans")]),e._v(" "),r("li",[e._v("CSV is a two dimensional structure consisting of rows of data, each row"),r("br"),e._v("\ncontaining multiple cells. Rows are (usually) separated by line terminators"),r("br"),e._v("\nso each row corresponds to one line. Cells within a row are separated by"),r("br"),e._v("\ncommas (hence the C(ommmas) part)\n"),r("ul",[r("li",[e._v("Note that strictly we’re really talking about DSV files in that we can"),r("br"),e._v("\nallow ‘delimiters’ between cells other than a comma. However, many people"),r("br"),e._v("\nand many programs still call such data CSV (since comma is so common as the"),r("br"),e._v("\ndelimiter)")])])]),e._v(" "),r("li",[e._v("CSV is a “text-based” format, i.e. a CSV file "),r("em",[e._v("is")]),e._v(" a text file. This makes it"),r("br"),e._v("\namenable for processing with all kinds of text-oriented tools (from text"),r("br"),e._v("\neditors to "),r("a",{attrs:{href:"https://github.com/rgrp/command-line-data-wrangling",target:"_blank",rel:"noopener noreferrer"}},[e._v("unix tools like sed, grep etc"),r("OutboundLink")],1),e._v(")")])]),e._v(" "),r("h3",{attrs:{id:"what-a-csv-looks-like"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-a-csv-looks-like"}},[e._v("#")]),e._v(" What a CSV looks like")]),e._v(" "),r("p",[e._v("If you open up a CSV file in a text editor it would look something like:")]),e._v(" "),r("pre",[r("code",[e._v('A,B,C\n1,2,3\n4,"5,3",6\n')])]),e._v(" "),r("p",[e._v("Here there are 3 rows each of 3 columns. Notice how the second column in the last line is"),r("br"),e._v("\n“quoted” because the content of that value actually contains a “,” character. Without"),r("br"),e._v("\nthe quotes this character would be interpreted as a column separator. To avoid this"),r("br"),e._v("\nconfusion we put quotes around the whole value. The result is that we have 3 rows each"),r("br"),e._v("\nof 3 columns (Note a CSV file does not "),r("em",[e._v("have")]),e._v(" to have"),r("br"),e._v("\nthe same number of columns in each row).")]),e._v(" "),r("h3",{attrs:{id:"dialects-of-csvs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dialects-of-csvs"}},[e._v("#")]),e._v(" Dialects of CSVs")]),e._v(" "),r("p",[e._v("As mentioned above, CSV files can have quite a bit of variation in"),r("br"),e._v("\nstructure. Key options are:")]),e._v(" "),r("ul",[r("li",[e._v("Field delimiter: rather than comma "),r("code",[e._v(",")]),e._v(" people often use things like "),r("code",[e._v("\\t")]),r("br"),e._v("\n(tab), "),r("code",[e._v(";")]),e._v(" or "),r("code",[e._v("|")])]),e._v(" "),r("li",[e._v("Record terminator / line terminator: is "),r("code",[e._v("\\n")]),e._v(" (unix), "),r("code",[e._v("\\n\\r")]),e._v(" (dos) or something else …")]),e._v(" "),r("li",[e._v("How do you quote records that contain your delimiter")])]),e._v(" "),r("p",[e._v("You can read more in the "),r("router-link",{attrs:{to:"/specs/csv-dialect/"}},[e._v("CSV Dialect Description Format")]),e._v(" which defines"),r("br"),e._v("\na small JSON-oriented structure for specifying what options a CSV uses.")],1),e._v(" "),r("h3",{attrs:{id:"what-is-missing-in-csv"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-is-missing-in-csv"}},[e._v("#")]),e._v(" What is Missing in CSV?")]),e._v(" "),r("ul",[r("li",[e._v("CSV lacks any way to specify type information: that is, there is no way to"),r("br"),e._v("\ndistinguish “1” the string from 1 the number. This shortcoming can be"),r("br"),e._v("\naddressed by adding some form of simple schema. For example "),r("router-link",{attrs:{to:"/docs/table-schema/"}},[e._v("Table"),r("br"),e._v("\nSchema")]),e._v(" provides a very simple way to describe your schema externally"),r("br"),e._v("\nwhilst "),r("a",{attrs:{href:"http://jenit.github.io/linked-csv/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linked CSV"),r("OutboundLink")],1),e._v(" is an example of doing this “inline” (that"),r("br"),e._v("\nis, in the CSV).")],1),e._v(" "),r("li",[e._v("No support for relationships between different “tables”. This is similar to"),r("br"),e._v("\nthe previous point and again "),r("router-link",{attrs:{to:"/docs/table-schema/"}},[e._v("Table Schema")]),e._v(" provides a way to address"),r("br"),e._v("\nthis by providing additional schema information externally.")],1),e._v(" "),r("li",[e._v("CSV is really only for tabular data – it is not so good for data with"),r("br"),e._v("\nnesting or where structure is not especially tabular (though remember most"),r("br"),e._v("\ndata can be put into tabular form if you try hard enough!)")])]),e._v(" "),r("h3",{attrs:{id:"links"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[e._v("#")]),e._v(" Links")]),e._v(" "),r("p",[e._v("Specifications and overviews:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://tools.ietf.org/html/rfc4180",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC specification of CSV"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("[CSV Dialect Description Format][csvddf]")]),e._v(" "),r("li",[r("a",{attrs:{href:"http://en.wikipedia.org/wiki/Comma-separated_values",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSV on Wikipedia"),r("OutboundLink")],1)])]),e._v(" "),r("hr"),e._v(" "),r("h2",{attrs:{id:"tools"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tools"}},[e._v("#")]),e._v(" Tools")]),e._v(" "),r("p",[e._v("The great thing about CSV is the huge level of tool support. The following is"),r("br"),e._v("\nnot intended to be comprehensive but is more at the electic end of the spectrum.")]),e._v(" "),r("h3",{attrs:{id:"desktop"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#desktop"}},[e._v("#")]),e._v(" Desktop")]),e._v(" "),r("p",[e._v("All spreadsheet programs including Excel, OpenOffice, Google Docs"),r("br"),e._v("\nSpreadsheets supporting opening, editing and saving CSVs.")]),e._v(" "),r("h3",{attrs:{id:"view-a-csv-file-in-your-browser"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#view-a-csv-file-in-your-browser"}},[e._v("#")]),e._v(" View a CSV file in your Browser")]),e._v(" "),r("p",[e._v("You can view a CSV file (saving you the hassle of downloading it and opening"),r("br"),e._v("\nit). Options include:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("You can use datapipes: "),r("a",{attrs:{href:"http://datapipes.okfnlabs.org/csv/html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://datapipes.okfnlabs.org/csv/html"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Just paste your CSV file and away you go.")])]),e._v(" "),r("li",[r("p",[e._v("Install this "),r("a",{attrs:{href:"https://chrome.google.com/webstore/detail/recline-csv-viewer/ibfcfelnbfhlbpelldnngdcklnndhael",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome Browser Extension"),r("OutboundLink")],1),e._v(". This can be used both"),r("br"),e._v("\nfor online files and for files on your local disk (if you open them with your"),r("br"),e._v("\nbrowser!)")])])]),e._v(" "),r("h3",{attrs:{id:"unix-command-line-manipulation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unix-command-line-manipulation"}},[e._v("#")]),e._v(" Unix Command Line Manipulation")]),e._v(" "),r("p",[e._v("See")]),e._v(" "),r("ul",[r("li",[e._v("Using "),r("a",{attrs:{href:"https://github.com/rgrp/command-line-data-wrangling",target:"_blank",rel:"noopener noreferrer"}},[e._v("unix command line tools on CSV"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("The wonderful "),r("a",{attrs:{href:"http://csvkit.readthedocs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("csvkit"),r("OutboundLink")],1),e._v(" (python)")])]),e._v(" "),r("h3",{attrs:{id:"power-tools"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#power-tools"}},[e._v("#")]),e._v(" Power Tools")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://openrefine.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenRefine"),r("OutboundLink")],1),e._v(" is a powerful tool for editing and manipulating data and works"),r("br"),e._v("\nvery well with CSV")]),e._v(" "),r("li",[r("a",{attrs:{href:"http://explorer.okfnlabs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Data Explorer"),r("OutboundLink")],1),e._v(" supports importing CSVs and manipulating and changing"),r("br"),e._v("\nthem using javascript in the browser")])]),e._v(" "),r("h3",{attrs:{id:"libraries"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#libraries"}},[e._v("#")]),e._v(" Libraries")]),e._v(" "),r("p",[e._v("This is heavily biased towards python!")]),e._v(" "),r("h4",{attrs:{id:"python"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#python"}},[e._v("#")]),e._v(" Python")]),e._v(" "),r("ul",[r("li",[e._v("Built in csv library is good")]),e._v(" "),r("li",[e._v("The wonderful "),r("a",{attrs:{href:"http://csvkit.readthedocs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("csvkit"),r("OutboundLink")],1),e._v(" (python)")]),e._v(" "),r("li",[r("a",{attrs:{href:"http://messytables.readthedocs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("messytables"),r("OutboundLink")],1),e._v(" (python) - convert lots of badly structured data into CSV (or"),r("br"),e._v("\nother formats)")])]),e._v(" "),r("h4",{attrs:{id:"node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#node"}},[e._v("#")]),e._v(" Node")]),e._v(" "),r("p",[e._v("Nothing in standard lib yet and best option seems to be:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/wdavidw/node-csv",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/wdavidw/node-csv"),r("OutboundLink")],1)])]),e._v(" "),r("hr"),e._v(" "),r("h2",{attrs:{id:"tips-and-tricks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tips-and-tricks"}},[e._v("#")]),e._v(" Tips and Tricks")]),e._v(" "),r("h3",{attrs:{id:"csvs-and-git"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#csvs-and-git"}},[e._v("#")]),e._v(" CSVs and Git")]),e._v(" "),r("p",[e._v("Get git to handle CSV diffs in a sensible way (very useful if you are "),r("a",{attrs:{href:"http://blog.okfn.org/2013/07/02/git-and-github-for-data/",target:"_blank",rel:"noopener noreferrer"}},[e._v("using"),r("br"),e._v("\ngit or another version control system to store data"),r("OutboundLink")],1),e._v(").")]),e._v(" "),r("p",[e._v("Make these changes to config files:")]),e._v(" "),r("pre",[r("code",[e._v('# ~/.config/git/attributes\n*.csv diff=csv\n\n# ~/.gitconfig\n[diff "csv"]\n  wordRegex = [^,\\n]+[,\\n]|[,]\n')])]),e._v(" "),r("p",[e._v("Then do:")]),e._v(" "),r("pre",[r("code",[e._v("git diff --word-diff\n# make it even nicer\ngit diff --word-diff --color-words\n")])]),e._v(" "),r("p",[e._v("Credit for these fixups to "),r("a",{attrs:{href:"http://opendata.stackexchange.com/questions/748/is-there-a-git-for-data",target:"_blank",rel:"noopener noreferrer"}},[e._v("contributors on this question on"),r("br"),e._v("\nStackExchange"),r("OutboundLink")],1),r("br"),e._v("\nand to "),r("a",{attrs:{href:"http://theodi.org/blog/adapting-git-simple-data",target:"_blank",rel:"noopener noreferrer"}},[e._v("James Smith"),r("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);