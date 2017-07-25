var composers = [];
var pieces = []; 

var data = [ 
	{
	"composer": {
		"name":"Alexander Scriabin",
		"nationality": "Russian",
		"bio": "https://en.wikipedia.org/wiki/Alexander_Scriabin"
	},
	"compositions": {
		"work": ["Sonata no 2 in g-sharp minor op.19", "Sonata no 4 in F-sharp major op.19", "Sonata no 5 op.53", "Sonata No. 7 'White Mass', Op. 64" , "Sonata No. 9 'Black Mass' op.68", "Sonata no 10 op. 70"]
	}
},
	{
	"composer": {
		"name":"J. Sebastian Bach",
		"nationality": "German",
		"bio": "https://en.wikipedia.org/wiki/Johann_Sebastian_Bach"
	},
	"compositions": {
		"work": ["Partita No. 1 in B♭ major, BWV 825", "Partita No. 2 in C minor, BWV 826", "Partita No. 3 in A minor, BWV 827", "Partita No. 4 in D major, BWV 828", "Partita No. 5 in G major, BWV 829", "Partita No. 6 in E minor, BWV 830"] 
	}
},
	{
	"composer": {
		"name":"Ludwig van Beethoven",
		"nationality": "German",
		"bio": "https://en.wikipedia.org/wiki/Ludwig_van_Beethoven"
	},
	"compositions": {
		"work": ["Sonata in E minor, op. 90", "Sonata in A major, op. 101", "Sonata in B flat major, op. 106, 'Hammerklavier'", "Sonata in E major, op. 109", "Sonata in A flat major, op. 110", "Sonata in C minor, op. 111"] 
	}
},	
	{
	"composer": {
		"name": "Franz Schubert",
		"nationality": "Austrian",
		"bio": "https://en.wikipedia.org/wiki/Franz_Schubert"
	},
	"compositions": {
		"work": ["Sonata in A minor, D. 784", "Sonata in G major, D. 894", "Sonata in C minor, D. 958", "Sonata in A major, D. 959", "Sonata in B-flat major, D. 960"] 
	}
},	
	{
	"composer": {
		"name":"Johannes Brahms",
		"nationality": "German",
		"bio": "https://en.wikipedia.org/wiki/Johannes_Brahms"
	},
	"compositions": {
		"work": ["Op. 116, 7 fantasies", "Op. 117, 3 intermezzos", "Op. 118, 6 piano pieces", "Op. 119, 4 piano pieces"]
	}
},	
	{
	"composer": {
		"name":"Arnold Schoenberg",
		"nationality": "Austrian",
		"bio": "https://en.wikipedia.org/wiki/Arnold_Schoenberg"
	},
	"compositions": {
		"work": ["Three pieces op.11", "Two Pieces op.33"]
	}
},	
	{
	"composer": {
		"name":"Villa-Lobos",
		"nationality": "Brazilian",
		"bio": "https://en.wikipedia.org/wiki/Heitor_Villa-Lobos"
	},
	"compositions": {
		"work": ["Rudepoema", "A Prole do Bebê No.1", "A Prole do Bebê No.2"]
	}
},
	{
	"composer": {
		"name":"Sergei Prokofiev",
		"nationality": "Russian",
		"bio": "https://en.wikipedia.org/wiki/Sergei_Prokofiev"
	},
	"compositions": {
		"work": ["Suggestion Diabolique op.4", "Sonata No. 4 in C Minor, op. 29", "Sonata No. 6 in A Major, op. 82", "Sonata No. 7 in B-flat Major, op. 83", "Sonata No. 8 in B-flat Major, op. 84", "Sonata No. 9 in C Major, op. 103"]
	}
},	
	{
	"composer": {
		"name":"Alban Berg",
		"nationality": "Austrian",
		"bio": "https://en.wikipedia.org/wiki/Alban_Berg"
	},
	"compositions": {
		"work": ["Piano Sonata op.1"]
	}
},
	{
	"composer": {
		"name":"Dai Fujikura",
		"nationality": "Japanese",
		"bio": "https://en.wikipedia.org/wiki/Dai_Fujikura"
	},
	"compositions": {
		"work": ["Frozen Heat", "Deepened Arc"]
	}
},	
	{
	"composer": {
		"name":"Robert Schumann",
		"nationality": "German",
		"bio": "https://en.wikipedia.org/wiki/Robert_Schumann"
	},
	"compositions": {
		"work": ["Novelletten op.21", "Faschingsschwank aus Wien Op.26"]
	}
},	
	{
	"composer": {
		"name":"Charles Griffes",
		"nationality": "American",
		"bio": "https://en.wikipedia.org/wiki/Charles_Tomlinson_Griffes"
	},
	"compositions": {
		"work": ["The Pleasure-Dome of Kubla Khan", "De profundis"]
	}
},	
	{
	"composer": {
		"name":"Henri Dutilleux",
		"nationality": "French",
		"bio": "https://en.wikipedia.org/wiki/Henri_Dutilleux"
	},
	"compositions": {
		"work": ["Sonate pour Piano"]
	}
},	
	{
	"composer": {
		"name":"George Walker",
		"nationality": "American",
		"bio": "https://en.wikipedia.org/wiki/George_Walker_(composer)"
	},
	"compositions": {
		"work": ["Piano Sonata No. 1", "Piano Sonata No. 2", "Piano Sonata No. 3", "Piano Sonata No. 4", "Piano Sonata No. 5"]
	}
},	
	{
	"composer": {
		"name":"Leoš Janáček",
		"nationality": "Czech",
		"bio": "https://en.wikipedia.org/wiki/Leo%C5%A1_Jan%C3%A1%C4%8Dek"
	},
	"compositions": {
		"work": ["Piano Sonata 1"]
	}
},	
	{
	"composer": {
		"name":"Béla Bartók",
		"nationality": "Hungarian",
		"bio": "https://en.wikipedia.org/wiki/B%C3%A9la_Bart%C3%B3k"
	},
	"compositions": {
		"work": ["Piano Sonata", "Suite, op.14", "Three Burlesques op.8", "Out of Doors"]
	}
},
	{
	"composer": {
		"name":"György Ligeti",
		"nationality": "Hungarian",
		"bio": "https://en.wikipedia.org/wiki/Gy%C3%B6rgy_Ligeti"
	},
	"compositions": {
		"work": ["Musica Ricercata", "Selection from Etudes"]
	}
},	
	{
	"composer": {
		"name":"Luciano Berio",
		"nationality": "Italian",
		"bio": "https://en.wikipedia.org/wiki/Luciano_Berio"
	},
	"compositions": {
		"work": ["Sequenza IV"]
	}
},			
]

$(document).ready(function() {
  
  $("#click").on("click", function() {
   
    if ($('#result').is(':empty')){
      
    var quant = $("#quantity").val();
    
    if (!quant) {
      $("#error").html("Please specify quantity");
    } else if (/[^0-9]/g.test(quant)) {
      $("#error").html("Must input only numeric values")
    } else {
    
    $("#error").empty();   
      
    for (let i = 0; i < quant; i++) {
      
      getComposers(data);
      
    }  
      
    var ul = "<ul id='ul'>";
      
    composers.forEach((c,i) => {
      ul += "<li><a href="+c[1]+" target='_blank'>"+c[0]+"</a><p id='piece'>"+pieces[i]+"</p></li>"
    });
      
    ul += "</ul><button id='clear' class='btn btn-primary'>Clear</button>";
    
    $("#result").html(ul);
      
    $("#clear").on("click", function() {
      
        composers = [];
        pieces = [];
        
        $("#result").empty();
        $("#error").empty();
        $("#quantity").val("");
      
      });
    
    }
      
    } else {
      $("#error").html("Please clear current program")
    }
      
  });
  
});

function getComposers(data) {
  
  var rand = Math.floor(Math.random() * data.length);
    var composer = data[rand].composer;
    
    composers.push([composer.name, composer.bio]);
  
    getPiece(data[rand]);
  
  
  
}

function getPiece(composer) {
   
    var piece =
composer.compositions.work;
    var rand2 = Math.floor(Math.random() * piece.length);
    var final = piece[rand2];
  
    if (!pieces.includes(final)) {
      pieces.push(final);
    } else if (pieces.includes(final) && piece.length === 1) {
      composers.pop();
      getComposers(data);
    } else {
      getPiece(composer);
    }
  
}