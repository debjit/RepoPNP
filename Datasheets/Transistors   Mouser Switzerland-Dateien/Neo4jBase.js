$(document).ready(function(){if(typeof _neo4jQS!=="undefined"&&!jQuery.isEmptyObject(_neo4jQS)){if(typeof _neo4jAD!=="undefined"&&!jQuery.isEmptyObject(_neo4jAD)){processNeo4jAdds(_neo4jQS,_neo4jAD)}else{(new Image(1,1)).src=decodeURIComponent(_neo4jQS)}}});function processNeo4jAdds(d,a){if(typeof d!=="undefined"&&!jQuery.isEmptyObject(d)&&typeof a!=="undefined"&&!jQuery.isEmptyObject(a)){var c=JSON.stringify(a);var b=JSON.parse(c);for(index=0;index<b.length;index++){if(b[index].length>0){(new Image(1,1)).src=decodeURIComponent(d+b[index])
}}}};