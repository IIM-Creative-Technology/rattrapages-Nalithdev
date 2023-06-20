import '../style.css'


document.querySelector('#app').innerHTML = `
    <div class="h-screen bg-[url('./src/asset/image.png')] bg-cover w-full bg-no-repeat ">
    <div class="bg-gradient-to-br from-specialblue to-specialgreen h-screen w-full absolute opacity-[60%] ">
    </div>
    </div>
    
    <div class=" h-screen w-full absolute top-0 ">
    <div class="flex justify-between w-full">
    <img src="./src/asset/mangoo.png" alt="mangoo" class="w-72 h-36 p-8">
    <nav>
    <ul class="flex gap-8 p-8 text-lg ">
    <li><a href="#" class=" text-white hover:underline hover:underline-offset-2 hover:text-white">Accueil</a></li>
    <li><a href="#" class=" text-white hover:underline hover:underline-offset-2 hover:text-white"">Qui sommes-nous ?</a></li>
    <li><a href="#" class=" text-white hover:underline hover:underline-offset-2 hover:text-white"">Menu</a></li>
    <li><a href="#" class=" text-white hover:underline hover:underline-offset-2 hover:text-white"" >Contact</a></li>
    <li><a href="#" class=" text-lime-400 bg-white p-2 rounded-md pl-8 pr-8">Commander</a></li>
</ul>
</nav>
</div>
<div class="pt-16">
<h1 class="text-white text-[180px] font-bold text-center items-center ">mangoo</h1>
<h2 class="text-white text-5xl font-bold text-center items-center pt-16 pl-[350px] rotate-[-10deg] font-['poppins']">C'est frais pour vous !</h2> 
<div class="flex absolute right-0 bottom-0 p-8 gap-4">
<img src="./src/asset/Icon-awesome-facebook-square.png" alt="facebook">
<img src="./src/asset/Icon_awesome-instagram.png" alt="instagram">
<img src="./src/asset/Icon_awesome-twitter-square.png" alt="twitter"> 
</div>
</div> 
    </div>
    
    
    
    
<div class="flex w-full h-screen  items-center bg-[url('./src/asset/61842.jpg')] bg-[length:400px_300px] absolute z-[-2] ">

<div class="bg-white opacity-[80%] absolute w-full h-screen z-[-1]">

</div>
</div>

<div>
<div class=" w-full h-screen opacity-[100%] flex overflow-hidden">
<div class="w-full pt-40 pl-40">
<h2 class=" text-5xl text-specialgreen font-[poppins] font-semibold w-full">Une salade sur mesure</h2>
<p class="w-[65%] text-xl pt-16">MONGOO vous permet de composer votre salade selon vos envies et vos goûts.

</p>
<p class="w-[65%] text-xl pt-4">
Une quarantaine d'ingrédients frais et préparés le matin même sur place vous sont proposés au quotidien.
</p>

<p class="w-[65%] text-xl pt-4">
Depuis maintenant 10 ans, MONGOO fait le bonheur des gourmets et des gourmands, alors pourquoi pas vous ? </p>

<div class="pt-12">
<a href="#" class="text-white text-2xl bg-specialgreen p-4 pl-16 pr-16 rounded-md font-['poppinssemibold'] not-italic font-semibold ">En savoir +</a>
</div>
</div>
<div class="mr-[-145px] mt-[-30px]">
<img src="./src/asset/salade-detoure.png" alt="" class=" w-[1700px]">
</div>
</div>


<div class="w-full h-screen bg-[url('./src/asset/ismael-trevino-NDyuR4Huig8-unsplash.png')] bg-cover bg-no-repeat relative  ">
<div class=" bg-specialgreen/80 w-[600px] h-[600px] m-auto right-40 absolute p-10 text-center  bottom-16 ">
<h2 class="text-6xl text-white">Préparé sur place et avec amour</h2>  
<p class="text-white text-lg pt-6"> 
Chez MONGOO, tous les ingrédients et tous les desserts sont préparés sur place.
</p>
<p class="text-white text-lg pt-6">
Nous mettons un point d'honneur à ce que tous les matins, nos équipes de super-préparateurs découpent, tranchent, épluchent, assaisonnent, mélangent, émincent, saupoudrent et préparent tout ce qu'il y a sur le bar afin de vous proposer les meilleures combinaisons de salades possible.
</p>
<p class="text-white text-lg pt-6">
Alors faites votre choix !</p>

<div class="pt-12">
<a href="#" class="text-specialgreen text-2xl bg-white p-4 pl-16 pr-16 rounded-md font-['poppinssemibold'] not-italic font-semibold ">En savoir +</a>
</div>

</div>

</div>

</div>
<div class="w-full h-auto bg-[url('./src/asset/pattern.png')] relative bg-[length:1300px_1000px] items-center  ">
<h2 class="text-6xl text-specialgreen text-center pt-20 font-['poppinssemibold']  font-semi-bold">Vous avez dit menu ?</h2>
<p class="text-center p-[380px] pb-10 pt-10 text-lg">Un menu MONGOO, c'est une salade accompagnée d'une boisson et d'un dessert.
Mais attention, pas n'importe quelle boisson et n'importe quel dessert...</p>
<p class="text-center p-[380px] pb-0 pt-0 text-lg" >
Découvrez notre large sélection de boissons et desserts pour accompagner votre repas</p>
<div class="w-full flex p-40 pt-20 pb-10 items-center  ">

<div class=" w-full p-10">

<div >
<div class="flex justify-between">
<h4 class="text-specialgreen text-xl">Salade j'aime</h4>
<p class="text-specialgreen text-xl">7,70€</p>
</div>
<p class="text-lg p-4">1 base · 4 ingrédients verts · Sauce
<br>Petit plus et pain offert </p>
</div>

<div>
<div class="flex justify-between">
<h4 class="text-specialgreen text-xl">Salade j'adore</h4>
<p class="text-specialgreen text-xl">8,80€</p>
</div>
<p class="text-lg p-4">1 base · 3 ingrédients verts & 1 bleu · Sauce
<br>Petit plus et pain offert </p>
</div>

<div>
<div class="flex justify-between">
<h4 class="text-specialgreen text-xl">Salade 2-2</h4>
<p class="text-specialgreen text-xl">9,90€</p>
</div>
<p class="text-lg p-4">1 base · 2 ingrédients verts & 2 bleus· Sauce
<br>Petit plus et pain offert </p>
</div>

<div>
<div class="flex justify-between">
<h4 class="text-specialgreen text-xl">Salade passion</h4>
<p class="text-specialgreen text-xl">11,00€</p>
</div>
<p class="text-lg p-4">1 base · 1 ingrédient vert & 3 bleus · Sauce
<br>Petit plus et pain offert </p>
</div>

<div>
<div class="flex justify-between">
<h4 class="text-specialgreen text-xl">Salade folie</h4>
<p class="text-specialgreen text-xl">12,10€</p>
</div>
<p class="text-lg p-4">1 base · 4 ingrédients bleus · Sauce
<br>Petit plus et pain offert </p>
</div>

</div>

<div class="w-full p-10 text-center">
<h3 class="text-specialgreen  rotate-[-10deg] font-['poppins'] text-center text-5xl pb-4">Force verte ?</h3>
<h3 class="text-specialblue  rotate-[-10deg] font-['poppins'] text-center text-5xl">Force bleu ?</h3>
<p class="text-lg text-center pt-16">Ne perdez pas une seconde, faites votre choix
et venez chercher votre salade dans 20min !</p>

<div class="pt-12 ">
<a href="#" class="text-white text-2xl bg-specialgreen p-4 pl-16 pr-16 rounded-md font-['poppinssemibold'] not-italic font-semibold ">En savoir +</a>
</div>
</div>

</div>

<div class="w-full bg-[url('./src/asset/louis-hansel-MlPD-AzZYMg-unsplash.jpg')] bg-cover bg-center bg-no-repeat relative items-center  ">
<div class="flex justify-center p-28 gap-6 pl-20 pr-20 text-white">

<div class="w-[675px] bg-specialgreen/80 h-[460px] p-10">
<h2 class="text-white text-5xl text-center">Chez les verts</h2>
<div class="flex justify-evenly p-10 text-lg ">
<div class="flex flex-col">
<p>Croutons</p>
<p>Oeuf(1)</p>
<p>Betteraves</p>
<p>Carottes</p>
<p>Choux rouges</p>
<p>Concombres</p>
<p>Lentilles</p>
<p>Maïs</p>
<p>Oignons rouges</p>

</div>
<div class="flex flex-col ">
<p>Radis</p>
<p>Pommes</p>
<p>Oignons frits</p>
<p>Emmental</p>
<p>Mozzarella</p>
<p>Mimolette</p>
<p>Surimi</p>
<p>Saussices</p>

</div>
</div>
</div>
<div class="w-[675px] h-[460px] bg-specialblue/80 p-10">
<h2 class="text-white text-5xl text-center">Chez les bleus</h2>

<div class="flex p-10 text-lg justify-evenly">
<div class="flex flex-col">
<p>Aubergines</p>
<p>Avocat</p>
<p>Cantal</p>
<p>Coeur d'artichaut</p>
<p>Grana panado</p>
<p>Jambon cru</p>
<p>Crevettes</p>
</div>
<div class="flex flex-col">
<p>Feta</p>
<p>Melon</p>
<p>Oeuf Poché</p>
<p>Poivrons</p>
<p>Thon</p>
<p>Tomates cerises</p>
<p>Tomates séchés</p>
</div>
</div>
</div>

</div>
</div>

`

