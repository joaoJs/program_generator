// Create global variables to store composers and pieces for program
var composers = [];
var pieces = []; 

// Data from where composers and pieces are randomly chosen
var data = [ 
	{
	"composer": {
		"name":"Alexander Scriabin",
		"nationality": "Russian",
		"bio": "https://en.wikipedia.org/wiki/Alexander_Scriabin"
	},
	"compositions": {
		"work": ["Fantasie op.28","Sonata no 2 in g-sharp minor op.19", "Sonata no 4 in F-sharp major op.19", "Sonata no 5 op.53", "Sonata No. 7 'White Mass', Op. 64" , "Sonata No. 9 'Black Mass' op.68", "Sonata no 10 op. 70"]
	}
},
	{
	"composer": {
		"name":"J. Sebastian Bach",
		"nationality": "German",
		"bio": "https://en.wikipedia.org/wiki/Johann_Sebastian_Bach"
	},
	"compositions": {
		"work": ["Aria Variata alla Maniera Italiana","Partita No. 1 in B♭ major, BWV 825", "Partita No. 2 in C minor, BWV 826", "Partita No. 3 in A minor, BWV 827", "Partita No. 4 in D major, BWV 828", "Partita No. 5 in G major, BWV 829", "Partita No. 6 in E minor, BWV 830"] 
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
		"work": ["4 Impromptus op.142", "Sonata in A minor, D. 784", "Sonata in G major, D. 894", "Sonata in C minor, D. 958", "Sonata in A major, D. 959", "Sonata in B-flat major, D. 960"] 
	}
},	
	{
	"composer": {
		"name":"Johannes Brahms",
		"nationality": "German",
		"bio": "https://en.wikipedia.org/wiki/Johannes_Brahms"
	},
	"compositions": {
		"work": ["Sonata No.3 in f minor, op.5", "Op. 116, 7 fantasies", "Op. 117, 3 intermezzos", "Op. 118, 6 piano pieces", "Op. 119, 4 piano pieces"]
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
		"work": ["Fantasiestücke, Op.12","Fantasie op.17","Symphonic Etudes op.13","Novelletten op.21", "Faschingsschwank aus Wien Op.26"]
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
		"bio": "http://georgetwalker.com/"
	},
	"compositions": {
		"work": ["Piano Sonata No. 1", "Piano Sonata No. 2", "Piano Sonata No. 3", "Piano Sonata No. 4", "Piano Sonata No. 5"]
	}
},	
	{
	"composer": {
		"name":"Leoš Janáček",
		"nationality": "Czech",
		"bio": "http://www.leosjanacek.co.uk/biography/"
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
		"work": ["Musica Ricercata", "Etudes"]
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
	{
	"composer": {
		"name":"George Crumb",
		"nationality": "American",
		"bio": "https://en.wikipedia.org/wiki/George_Crumb#Piano"
	},
	"compositions": {
		"work": ["Makrokosmos, Volume I","Makrokosmos, Volume II"]
	}
},	
	{
	"composer": {
		"name":"Aleksandër Peçi ",
		"nationality": "Albanian",
		"bio": "https://en.wikipedia.org/wiki/Aleksand%C3%ABr_Pe%C3%A7i"
	},
	"compositions": {
		"work": ["Cartesius Cantus"]
	}
},	
	{
	"composer": {
		"name":"Rachmaninoff",
		"nationality": "Russian",
		"bio": "https://en.wikipedia.org/wiki/Sergei_Rachmaninoff"
	},
	"compositions": {
		"work": ["Piano Sonata No. 1 in D minor, Op. 28", "Études-Tableaux, Op. 33", "Études-Tableaux, Op. 39"]
	}
},	
	{
	"composer": {
		"name":"Claude Debussy",
		"nationality": "French",
		"bio": "https://en.wikipedia.org/wiki/Claude_Debussy"
	},
	"compositions": {
		"work": ["Preludes Book 1", "Preludes Book 2","Berceuse Heroique"]
	}
},	
	{
	"composer": {
		"name":"Maurice Ravel",
		"nationality": "French",
		"bio": "https://en.wikipedia.org/wiki/Maurice_Ravel"
	},
	"compositions": {
		"work": ["Gaspard de la nuit"]
	}
},
	{
	"composer": {
		"name":"Franz Liszt",
		"nationality": "Hungarian",
		"bio": "https://en.wikipedia.org/wiki/Franz_Liszt"
	},
	"compositions": {
		"work": ["Selection from Transcendental Etudes","Nuages Gris","Années de pèlerinage. Première année: Suisse"]
	}
},	
	{
	"composer": {
		"name":"Frédéric Chopin",
		"nationality": "Polish",
		"bio": "https://en.wikipedia.org/wiki/Piano_sonatas_(Chopin)"
	},
	"compositions": {
		"work": ["Piano Sonata No. 2 in B-flat minor, Op. 35","Piano Sonata No. 3 in B minor, Op. 58"]
	}
},	
	{
	"composer": {
		"name":"Rodrigo Bussad",
		"nationality": "Brazilian",
		"bio": "https://www.rodrigobussad.com/"
	},
	"compositions": {
		"work": ["Moon Inside I - Piano Cycle"]
	}
},		
	{
	"composer": {
		"name":"Ermir Bejo",
		"nationality": "Albanian",
		"bio": "https://www.google.com/#q=ermir+bejo"
	},
	"compositions": {
		"work": ["4 Pieces op.1"]
	}
},	
];

// when DOM is loaded 
$(document).ready(function() {
  
  // when form is submitted
  $("#click").on("click", function() {
   
   // if no programs are currently displayed on the page
    if ($('#result').is(':empty')){
      
    // store the input from the user in variable quant
    var quant = $("#quantity").val();
    
    // ensure user provide input and input is greater than 0
    if (!quant || quant == 0) {
      $("#error").html("Must learn at least one piece");
    // ensure input contains only numeric values
    } else if (/[^0-9]/g.test(quant)) {
      $("#error").html("Must input only numeric values");
    // ensure input in not greater than 15
    } else if (quant > 15) {
      $("#error").html("Can't learn that many pieces!"); 
    // if all criterias are met, clear any error messages and proceed         
    } else {
    
    $("#error").empty();   
      
    // get n composers when n equals number of pieces to learn
    for (let i = 0; i < quant; i++) {
      // use helper function to push composers to composers array
      getComposers(data);
      
    }  
    
    // initialize an unordered list to append to HTML  
    var ul = "<ul id='ul'>";
    
    // for each composer  
    composers.forEach((c,i) => {
   	// make a new list item  with composer's name and pieces. in the ul
   	// also, add url to composer's info
      ul += "<li><a href="+c[1]+" target='_blank'>"+c[0]+"</a><p id='piece'>"+pieces[i]+"</p></li>"
    });
    
    // close ul and add a clear button to clear current program  
    ul += "</ul><button id='clear' class='btn btn-danger'>Clear</button>";
    
    // append ul to div result in the html document
    $("#result").html(ul);
    
    // when user clicks on clear 
    $("#clear").on("click", function() {
      	
      	// empty composer and pieces arrays
        composers = [];
        pieces = [];
        
        // empty any programs, error messages or quantity from the page
        $("#result").empty();
        $("#error").empty();
        $("#quantity").val("");
      
      });
    
    }
    // ensure user clears current program 
    } else {
      $("#error").html("Please clear current program")
    }
      
  });
  
});

// helper function that gets a random composer
function getComposers(data) {
  
  var rand = Math.floor(Math.random() * data.length);
    var composer = data[rand].composer;
    
    composers.push([composer.name, composer.bio]);
  
    getPiece(data[rand]);  
}


// helper function that gets a random piece
function getPiece(composer) {
   
    var piece =
composer.compositions.work;
    var rand2 = Math.floor(Math.random() * piece.length);
    var final = piece[rand2];
  	
  	// ensure piece is not already included in program
    if (!pieces.includes(final)) {
      pieces.push(final);
    // if piece is already in program and composer has less than 4 pieces in data, 
    // choose a new composer 
    } else if (pieces.includes(final) && piece.length < 4) {
      composers.pop();
      getComposers(data);
    // if piece is already in program but composer has more than one piece in data
    // get another piece recursively until piece is not in program
    } else {
      getPiece(composer);
    }
  
}
