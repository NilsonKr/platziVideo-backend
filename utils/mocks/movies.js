const movies = [
	{
		id: 'b86ecd5e-0407-4885-938c-f36416e49d47',
		title: 'Junior',
		year: 2009,
		cover: 'http://dummyimage.com/142x236.png/5fa2dd/ffffff',
		description:
			'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
		duration: 11124,
		contentRating: 'R',
		source:
			'http://nps.gov/est/quam.js?natoque=nisi&penatibus=at&et=nibh&magnis=in&dis=hac&parturient=habitasse&montes=platea&nascetur=dictumst&ridiculus=aliquam&mus=augue&vivamus=quam&vestibulum=sollicitudin&sagittis=vitae&sapien=consectetuer&cum=eget&sociis=rutrum&natoque=at&penatibus=lorem&et=integer&magnis=tincidunt&dis=ante&parturient=vel',
		tags: ['Animation|Comedy|Fantasy', 'War', 'Comedy|Drama', 'Comedy|Drama', 'Action|Crime|Drama'],
	},
	{
		id: 'c435ae1f-6460-4603-97d3-6bcc793ff176',
		title: 'Burning Bright',
		year: 1997,
		cover: 'http://dummyimage.com/117x215.png/5fa2dd/ffffff',
		description:
			'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
		duration: 5089,
		contentRating: 'NC-17',
		source:
			'http://a8.net/varius.html?magna=nullam&at=orci&nunc=pede&commodo=venenatis&placerat=non&praesent=sodales&blandit=sed&nam=tincidunt&nulla=eu&integer=felis&pede=fusce&justo=posuere&lacinia=felis&eget=sed&tincidunt=lacus&eget=morbi&tempus=sem&vel=mauris&pede=laoreet&morbi=ut&porttitor=rhoncus&lorem=aliquet&id=pulvinar&ligula=sed&suspendisse=nisl&ornare=nunc&consequat=rhoncus&lectus=dui&in=vel&est=sem',
		tags: ['Drama'],
	},
	{
		id: 'f891d736-3f99-4459-a699-a353a140c24b',
		title: 'Election (Hak se wui)',
		year: 2007,
		cover: 'http://dummyimage.com/163x108.png/dddddd/000000',
		description:
			'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
		duration: 4899,
		contentRating: 'PG',
		source:
			'http://gmpg.org/porttitor/pede/justo/eu.jpg?auctor=pretium&gravida=iaculis&sem=justo&praesent=in&id=hac&massa=habitasse&id=platea&nisl=dictumst&venenatis=etiam&lacinia=faucibus&aenean=cursus&sit=urna&amet=ut&justo=tellus&morbi=nulla&ut=ut&odio=erat&cras=id&mi=mauris&pede=vulputate&malesuada=elementum&in=nullam&imperdiet=varius&et=nulla&commodo=facilisi&vulputate=cras&justo=non&in=velit&blandit=nec&ultrices=nisi&enim=vulputate&lorem=nonummy&ipsum=maecenas&dolor=tincidunt&sit=lacus&amet=at&consectetuer=velit&adipiscing=vivamus&elit=vel&proin=nulla&interdum=eget&mauris=eros&non=elementum&ligula=pellentesque&pellentesque=quisque&ultrices=porta&phasellus=volutpat&id=erat&sapien=quisque&in=erat&sapien=eros&iaculis=viverra&congue=eget&vivamus=congue&metus=eget&arcu=semper&adipiscing=rutrum&molestie=nulla&hendrerit=nunc&at=purus&vulputate=phasellus&vitae=in&nisl=felis&aenean=donec&lectus=semper&pellentesque=sapien&eget=a&nunc=libero&donec=nam&quis=dui&orci=proin&eget=leo&orci=odio&vehicula=porttitor&condimentum=id&curabitur=consequat&in=in&libero=consequat&ut=ut&massa=nulla&volutpat=sed&convallis=accumsan&morbi=felis&odio=ut&odio=at&elementum=dolor&eu=quis&interdum=odio&eu=consequat&tincidunt=varius&in=integer&leo=ac&maecenas=leo&pulvinar=pellentesque&lobortis=ultrices&est=mattis&phasellus=odio&sit=donec',
		tags: [
			'Children|Comedy|Fantasy',
			'Horror',
			'Comedy|Crime|Drama|Mystery|Thriller',
			'Drama|Romance|War',
			'Comedy|Crime|Drama|Thriller',
		],
	},
	{
		id: '582c9467-047f-4787-956b-ec18d9e37d02',
		title: 'American Gangster',
		year: 2011,
		cover: 'http://dummyimage.com/121x222.png/ff4444/ffffff',
		description:
			'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
		duration: 9507,
		contentRating: 'R',
		source:
			'http://arstechnica.com/sapien/non/mi/integer/ac/neque.html?aenean=quis&fermentum=libero&donec=nullam&ut=sit&mauris=amet&eget=turpis&massa=elementum&tempor=ligula&convallis=vehicula&nulla=consequat&neque=morbi&libero=a&convallis=ipsum&eget=integer&eleifend=a&luctus=nibh&ultricies=in&eu=quis&nibh=justo&quisque=maecenas&id=rhoncus&justo=aliquam&sit=lacus&amet=morbi&sapien=quis&dignissim=tortor&vestibulum=id&vestibulum=nulla&ante=ultrices&ipsum=aliquet&primis=maecenas&in=leo&faucibus=odio&orci=condimentum&luctus=id&et=luctus&ultrices=nec&posuere=molestie&cubilia=sed&curae=justo&nulla=pellentesque&dapibus=viverra&dolor=pede&vel=ac&est=diam&donec=cras&odio=pellentesque&justo=volutpat&sollicitudin=dui&ut=maecenas&suscipit=tristique&a=est&feugiat=et&et=tempus&eros=semper&vestibulum=est&ac=quam&est=pharetra&lacinia=magna&nisi=ac&venenatis=consequat&tristique=metus&fusce=sapien&congue=ut&diam=nunc&id=vestibulum&ornare=ante&imperdiet=ipsum&sapien=primis&urna=in&pretium=faucibus&nisl=orci&ut=luctus&volutpat=et&sapien=ultrices&arcu=posuere&sed=cubilia&augue=curae&aliquam=mauris&erat=viverra',
		tags: ['Comedy', 'Musical|Romance', '(no genres listed)', 'Action|Drama|Romance'],
	},
	{
		id: 'e3153f06-8752-4141-b5de-88849851f0aa',
		title: 'Game Over',
		year: 2010,
		cover: 'http://dummyimage.com/118x246.png/cc0000/ffffff',
		description:
			'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
		duration: 2687,
		contentRating: 'PG-13',
		source:
			'https://adobe.com/pretium/iaculis/diam.js?nunc=aliquet&purus=ultrices&phasellus=erat&in=tortor&felis=sollicitudin&donec=mi&semper=sit&sapien=amet&a=lobortis&libero=sapien&nam=sapien&dui=non&proin=mi&leo=integer&odio=ac&porttitor=neque&id=duis&consequat=bibendum&in=morbi&consequat=non&ut=quam&nulla=nec&sed=dui&accumsan=luctus&felis=rutrum&ut=nulla&at=tellus&dolor=in&quis=sagittis&odio=dui&consequat=vel&varius=nisl&integer=duis&ac=ac&leo=nibh&pellentesque=fusce&ultrices=lacus&mattis=purus&odio=aliquet&donec=at&vitae=feugiat&nisi=non&nam=pretium&ultrices=quis&libero=lectus&non=suspendisse&mattis=potenti',
		tags: ['Drama|Fantasy|War'],
	},
	{
		id: '64bebfbc-83d0-4abd-8c7e-95b12259ee1f',
		title: 'Toolbox Murders, The',
		year: 2008,
		cover: 'http://dummyimage.com/145x242.png/cc0000/ffffff',
		description:
			'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
		duration: 2758,
		contentRating: 'G',
		source:
			'https://engadget.com/id/nisl/venenatis/lacinia/aenean.jsp?cubilia=dictumst&curae=morbi&mauris=vestibulum&viverra=velit&diam=id&vitae=pretium',
		tags: [
			'Crime|Drama|Thriller',
			'Adventure|Comedy',
			'Crime|Drama',
			'Children|Drama|Fantasy|Mystery',
			'Horror|Sci-Fi|Thriller',
		],
	},
	{
		id: 'acfbdb2b-7003-4c5a-b7ee-761a9960cad0',
		title: 'Munich',
		year: 1993,
		cover: 'http://dummyimage.com/187x130.png/dddddd/000000',
		description:
			'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
		duration: 10953,
		contentRating: 'PG',
		source:
			'https://huffingtonpost.com/et/commodo/vulputate/justo/in/blandit.xml?lacus=fusce&at=consequat&velit=nulla&vivamus=nisl&vel=nunc&nulla=nisl&eget=duis&eros=bibendum&elementum=felis&pellentesque=sed&quisque=interdum&porta=venenatis&volutpat=turpis&erat=enim&quisque=blandit&erat=mi&eros=in&viverra=porttitor&eget=pede&congue=justo&eget=eu',
		tags: ['Documentary', 'Drama|Thriller', 'Drama|Thriller', 'Adventure|Drama|Fantasy|IMAX'],
	},
	{
		id: '854a0b11-732a-4062-89f4-3b7b940b5f5f',
		title: 'Walk the Line',
		year: 2009,
		cover: 'http://dummyimage.com/225x205.png/5fa2dd/ffffff',
		description:
			'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
		duration: 8345,
		contentRating: 'PG',
		source:
			'http://ebay.com/ut/massa/volutpat/convallis.html?dui=praesent&luctus=blandit&rutrum=nam&nulla=nulla&tellus=integer&in=pede&sagittis=justo&dui=lacinia&vel=eget&nisl=tincidunt&duis=eget&ac=tempus&nibh=vel&fusce=pede&lacus=morbi&purus=porttitor&aliquet=lorem&at=id&feugiat=ligula&non=suspendisse&pretium=ornare&quis=consequat&lectus=lectus&suspendisse=in&potenti=est&in=risus&eleifend=auctor&quam=sed&a=tristique&odio=in&in=tempus&hac=sit&habitasse=amet&platea=sem&dictumst=fusce&maecenas=consequat&ut=nulla&massa=nisl&quis=nunc&augue=nisl&luctus=duis&tincidunt=bibendum&nulla=felis&mollis=sed&molestie=interdum&lorem=venenatis&quisque=turpis&ut=enim&erat=blandit&curabitur=mi&gravida=in&nisi=porttitor&at=pede&nibh=justo&in=eu&hac=massa&habitasse=donec&platea=dapibus&dictumst=duis&aliquam=at&augue=velit&quam=eu&sollicitudin=est&vitae=congue&consectetuer=elementum&eget=in&rutrum=hac&at=habitasse&lorem=platea&integer=dictumst&tincidunt=morbi&ante=vestibulum&vel=velit&ipsum=id&praesent=pretium',
		tags: ['Documentary', 'Comedy', 'Adventure|Fantasy', 'Comedy|Drama'],
	},
	{
		id: 'c9104fb4-d59e-4f62-a999-90d941ee533e',
		title: 'Nina Takes a Lover',
		year: 2006,
		cover: 'http://dummyimage.com/132x180.png/cc0000/ffffff',
		description:
			'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
		duration: 11409,
		contentRating: 'PG-13',
		source:
			'https://ucsd.edu/lacinia/sapien/quis/libero.jsp?leo=ante&rhoncus=ipsum&sed=primis&vestibulum=in&sit=faucibus&amet=orci&cursus=luctus&id=et&turpis=ultrices&integer=posuere',
		tags: ['Drama', 'Drama', 'Drama|Horror|Thriller', 'Romance', 'Documentary'],
	},
	{
		id: 'fa74b3b5-a29b-4435-bfb8-b24cdb9bc510',
		title: 'Odd Thomas',
		year: 2006,
		cover: 'http://dummyimage.com/142x235.png/cc0000/ffffff',
		description:
			'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
		duration: 2579,
		contentRating: 'PG',
		source:
			'http://deliciousdays.com/ligula/nec/sem/duis.png?semper=penatibus&rutrum=et&nulla=magnis&nunc=dis&purus=parturient&phasellus=montes&in=nascetur&felis=ridiculus&donec=mus&semper=etiam&sapien=vel&a=augue&libero=vestibulum&nam=rutrum&dui=rutrum&proin=neque&leo=aenean&odio=auctor&porttitor=gravida&id=sem&consequat=praesent&in=id',
		tags: ['Drama', 'Thriller', 'Drama|Romance', 'Drama', 'Action|Drama|Mystery|Sci-Fi|Thriller'],
	},
];

function filteredMovies(tags) {
	return movies.filter(movie => movie.tags.includes(...tags));
}

class MoviesMockServices {
	async getList() {
		return Promise.resolve(movies);
	}

	async createMovie() {
		return Promise.resolve(movies[0]);
	}
}

module.exports = { movies, MoviesMockServices, filteredMovies };
