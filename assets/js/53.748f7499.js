(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{463:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("In a "),s("router-link",{attrs:{to:"/docs/joining-data-in-python/"}},[t._v("separate guide")]),t._v(", I walked through joining"),s("br"),t._v("\na tabular dataset with one containing geographic information.  In this"),s("br"),t._v("\nguide, I will demonstrate an example of joining two tabular datasets.")],1),t._v(" "),s("p",[t._v("!! There are, of course, various, more robust ways of joining"),s("br"),t._v("\ntabular data.  The example listed below is intended to demonstrate"),s("br"),t._v("\nhow the current libraries and specifications work together to perform"),s("br"),t._v("\nthis common task.")]),t._v(" "),s("h2",{attrs:{id:"data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[t._v("#")]),t._v(" Data")]),t._v(" "),s("p",[t._v("In this case, we want to join a dataset containing the "),s("em",[t._v("nominal")]),t._v(" Gross"),s("br"),t._v("\nDomestic Product (GDP) per country per year with the Consumer Price"),s("br"),t._v("\nIndex (CPI) per country per year.  By adjusting a given GDP measure by"),s("br"),t._v("\nthe CPI, a measure of inflation, one can yield the "),s("em",[t._v("real")]),t._v(" GDP, a"),s("br"),t._v("\nmeasure of economic output adjusted for price changes over time.  To"),s("br"),t._v("\ndo that, of course, we need to join these independent datasets on the"),s("br"),t._v("\ncommon values “Country Code” and “Year”.")]),t._v(" "),s("h3",{attrs:{id:"gdp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gdp"}},[t._v("#")]),t._v(" GDP")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Country Name")]),t._v(" "),s("th",[t._v("Country Code")]),t._v(" "),s("th",[t._v("Year")]),t._v(" "),s("th",[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Afghanistan")]),t._v(" "),s("td",[t._v("AFG")]),t._v(" "),s("td",[t._v("2004")]),t._v(" "),s("td",[t._v("5285461999.33739")])]),t._v(" "),s("tr",[s("td",[t._v("Afghanistan")]),t._v(" "),s("td",[t._v("AFG")]),t._v(" "),s("td",[t._v("2005")]),t._v(" "),s("td",[t._v("6275076016.47174")])]),t._v(" "),s("tr",[s("td",[t._v("Afghanistan")]),t._v(" "),s("td",[t._v("AFG")]),t._v(" "),s("td",[t._v("2006")]),t._v(" "),s("td",[t._v("7057598406.61553")])]),t._v(" "),s("tr",[s("td",[t._v("Afghanistan")]),t._v(" "),s("td",[t._v("AFG")]),t._v(" "),s("td",[t._v("2007")]),t._v(" "),s("td",[t._v("9843842455.48323")])]),t._v(" "),s("tr",[s("td",[t._v("Afghanistan")]),t._v(" "),s("td",[t._v("AFG")]),t._v(" "),s("td",[t._v("2008")]),t._v(" "),s("td",[t._v("10190529882.4878")])])])]),t._v(" "),s("h3",{attrs:{id:"cpi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cpi"}},[t._v("#")]),t._v(" CPI")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Country Name")]),t._v(" "),s("th",[t._v("Country Code")]),t._v(" "),s("th",[t._v("Year")]),t._v(" "),s("th",[t._v("CPI")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Afghanistan")]),t._v(" "),s("td",[t._v("AFG")]),t._v(" "),s("td",[t._v("2004")]),t._v(" "),s("td",[t._v("63.1318927309")])]),t._v(" "),s("tr",[s("td",[t._v("Afghanistan")]),t._v(" "),s("td",[t._v("AFG")]),t._v(" "),s("td",[t._v("2005")]),t._v(" "),s("td",[t._v("71.1409742918")])]),t._v(" "),s("tr",[s("td",[t._v("Afghanistan")]),t._v(" "),s("td",[t._v("AFG")]),t._v(" "),s("td",[t._v("2006")]),t._v(" "),s("td",[t._v("76.3021776777")])]),t._v(" "),s("tr",[s("td",[t._v("Afghanistan")]),t._v(" "),s("td",[t._v("AFG")]),t._v(" "),s("td",[t._v("2007")]),t._v(" "),s("td",[t._v("82.7748069188")])]),t._v(" "),s("tr",[s("td",[t._v("Afghanistan")]),t._v(" "),s("td",[t._v("AFG")]),t._v(" "),s("td",[t._v("2008")]),t._v(" "),s("td",[t._v("108.0666000101")])])])]),t._v(" "),s("h2",{attrs:{id:"loading-the-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loading-the-data"}},[t._v("#")]),t._v(" Loading the Data")]),t._v(" "),s("p",[t._v("As usual, the first step is to load the Data Packages library"),s("br"),t._v(" "),s("code",[t._v("datapackage")]),t._v(".  We also need to import "),s("code",[t._v("DictWriter")]),t._v(" to write our"),s("br"),t._v("\nmerged rows to a new CSV.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datapackage\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" csv "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" DictWriter\n\ncpi_dp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datapackage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DataPackage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://raw.githubusercontent.com/frictionlessdata/example-data-packages/master/cpi/datapackage.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngdp_dp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datapackage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DataPackage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://raw.githubusercontent.com/frictionlessdata/example-data-packages/master/gross-domestic-product-all/datapackage.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Given that our source data has already been packaged in"),s("br"),t._v(" "),s("router-link",{attrs:{to:"/docs/tabular-data-package/"}},[t._v("Tabular Data Package")]),t._v(" format, we know"),s("br"),t._v("\nthat we have a "),s("router-link",{attrs:{to:"/docs/table-schema/"}},[s("em",[t._v("schema")])]),t._v(" for each CSV"),s("br"),t._v("\nwhich specifies useful information for each column.  We’d like to"),s("br"),t._v("\nmerge and preserve this schema information as we’ll need it for"),s("br"),t._v("\nspecifying the combined schema in our new Data Package.  Note that"),s("br"),t._v("\nwe’re also adding a new derived column named ‘Real GDP’ and giving it"),s("br"),t._v("\na type of "),s("code",[t._v("number")]),t._v(".")],1),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("field_info "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfield_info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extend"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cpi_dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resources"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("descriptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'schema'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fields'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfield_info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extend"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdp_dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resources"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("descriptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'schema'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fields'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfield_info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Real GDP'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'type'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Now that we have this information, we can generate a "),s("code",[t._v("fieldnames")]),s("br"),t._v("\narray containing only the names of the columns to eventually pass to"),s("br"),t._v(" "),s("code",[t._v("DictWriter")]),t._v(" when we’re ready write out our new CSV.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("fieldnames "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" f "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" field_info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"joining-the-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#joining-the-data"}},[t._v("#")]),t._v(" Joining the Data")]),t._v(" "),s("p",[t._v("What follows is a fairly simple example of iterating through each row"),s("br"),t._v("\nof each CSV and creating a new "),s("code",[t._v("merged_row")]),t._v(" when ‘Year’ and ‘Country"),s("br"),t._v("\nCode’ match on the two datasets.  We are also calculating our derived"),s("br"),t._v("\n‘Real GDP’ column based in the information found in the original"),s("br"),t._v("\ncolumns.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'real_gdp.csv'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'w'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" csvfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    writer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DictWriter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("csvfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fieldnames"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("fieldnames"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    writer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("writeheader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" gdp_row "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" gdp_dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resources"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" cpi_row "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" cpi_dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resources"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" gdp_row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Year'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" cpi_row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Year'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" gdp_row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Country Code'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" cpi_row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Country Code'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                merged_row "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gdp_row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("copy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                merged_row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cpi_row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                merged_row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Real GDP'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdp_row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cpi_row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CPI'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                writer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("writerow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("merged_row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"creating-a-new-data-package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-data-package"}},[t._v("#")]),t._v(" Creating a New Data Package")]),t._v(" "),s("p",[t._v("Now that we’ve created our new CSV "),s("code",[t._v("real_gdp.csv")]),t._v(", we can use the Data"),s("br"),t._v("\nPackage library to package it up with some useful metadata.  Note that"),s("br"),t._v("\nwe are passing the merged "),s("code",[t._v("field_info")]),t._v(" array into our "),s("code",[t._v("schema")]),s("br"),t._v("\ndefinition.  Given that we are generating this Data Package “by hand”,"),s("br"),t._v("\nwe need to run the "),s("code",[t._v("validate")]),t._v(" method on the new Data Package object to"),s("br"),t._v("\nmake sure that we are, indeed, creating a valid Data Package.  After"),s("br"),t._v("\nvalidating the Data Package metadata, we can either write the Data"),s("br"),t._v("\nPackage directly or save the whole thing as a zip file using the"),s("br"),t._v(" "),s("code",[t._v("save")]),t._v(" method.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("dp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datapackage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("descriptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'real-gdp'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'real_gdp.csv'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'format'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'csv'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'schema'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fields'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" field_info\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nresource "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resources"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nresource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("descriptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'real_gdp.csv'")]),t._v("\n\ndp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("validate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'datapackage.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'w'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# dp.save("real_gdp.zip")')]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);