/**
 * Effectue un rechercher-remplacer pour ajouter des espaces fines avant les
 * signes doubles et à l'intérieur des guillemets.
 *
 * @see Basé sur un code de rechercher-remplacer par James Padolsey
 *      http://james.padolsey.com/javascript/find-and-replace-text-with-javascript/
 * @author Victor <hey@victorloux.fr>
 * @license http://www.wtfpl.net/txt/copying/ WTFPL version 2
 * @param  {node} searchNode Un élément HTML, ou une NodeList
*                            (p.ex. document.getElementsByClassName('fine'))
 * @return {void}
 */

 function espaceFine(e){var t=new RegExp(/(\u00AB|\u2014)(?:\s+)?|(?:\s+)?([\?!:;\u00BB])/g),o='<span style="font-size: 0.67em">&nbsp;</span>',n="html,head,style,title,link,meta,script,object,iframe,pre,code,textarea,noscript";e||(e=document.body);for(var r,a,c,d,i="object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&Object.prototype.hasOwnProperty.call(e,"length")&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0),r=i?e:e.childNodes,l=r.length,p=n.split(",");l--;)a=r[l],a!=document.body&&(1===a.nodeType&&-1===p.indexOf(a.nodeName.toLowerCase())&&arguments.callee(a),3===a.nodeType&&t.test(a.data)&&(c=a.parentNode,d=function(){var e=a.data.replace(t,"$1"+o+"$2"),n=document.createElement("div"),r=document.createDocumentFragment();for(n.innerHTML=e;n.firstChild;)r.appendChild(n.firstChild);return r}(),c.insertBefore(d,a),c.removeChild(a)))}