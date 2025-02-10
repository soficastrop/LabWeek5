var photos = []; // Declared empty variable
var fileNames = []; // Declared empty element
var imageList = []; // Declared empty array
var image = []; // Declared an empty variable for the list codes
var openList = "<li class='photo'>"; // Declared variable for open tag for list
var closeList = "</li>"; // Declared variable for close tag


var captions = [
"Frankie", "Peewi", "Goldey", "Lazz", "Cotton Ball", 
"Whiskers", "Patches", "Adam", "Barry", "Sasha"
];
var descriptions = [
"A chatty, playful parrot who loves attention", "A lovable pug with big eyes and a bigger heart", "A shimmering fish that adds beauty to any tank", "A cool lizard who loves basking and exploring", "A fluffy bunny full of energy and charm",
"A playful cat with a stylish bandana", "A sweet lap cat who loves to purr", " A wise tabby who enjoys lounging", "A fun, energetic dog who loves adventures", "A gentle pup who adores cozy naps"
];


// Create a loop for the images
for (var i = 0; i < 10; i++) {
    fileNames.push("pets" + (i + 1)); // Create image filename and store in array
    var imageSrc = "images/" + fileNames[i] + ".jpg"; // Get image source

    // Wrap image inside an anchor tag for Lightbox
    var imageElement = "<a href='" + imageSrc + "' class='lightbox-toggle'>" +
                       "<img src='" + imageSrc + "' alt='" + captions[i] + "'>" +
                       "</a>";

    var caption = "<closeCaption>" + captions[i] + "</closeCaption>"; // Caption for image
    var description = "<closeDesc>" + descriptions[i] + "</closeDesc>"; // Description for image

    image = openList + imageElement + caption + description + closeList; // Assemble all elements
    imageList.push(image);

}

// Display images with captions and descriptions
document.getElementById("gallery").innerHTML = imageList.join("");

    
/*LIGHTBOX*/
$(document).ready(function () {
 
    $(document).on("click", ".lightbox-toggle", function (event) {
        event.preventDefault(); 

        var imageSrc = $(this).attr("href"); // Get image source
        $(".lightbox-content").attr("src", imageSrc); // Set image in Lightbox
        $(".backdrop, .lightbox").fadeIn(); // Show Lightbox
    });

    $(".close, .backdrop").click(function () {
        $(".backdrop, .lightbox").fadeOut(); // Hide Lightbox
    });
});