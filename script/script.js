const html = document.documentElement;
// Свойство tagName узла содержит имя тега в верхнем регистре
console.log(html.lastChild); // => 'HTML'

// Содержимое тега HTML в виде узлов DOM-дерева
// Текст тоже представлен узлом
html.childNodes; // [head, text, body]

// Потому что head выше body
html.firstChild; // <head>...</head>
html.lastChild; // <body>...</body>

// Второй узел, обращение по индексу
html.childNodes[1]; // #text
