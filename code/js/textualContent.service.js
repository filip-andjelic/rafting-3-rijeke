angular.module('archApp')
    .service('TextualContentService', [
        function() {
            function setDefaultLanguage() {
                service.setActiveLanguage('sr');
            }
            function initialize() {
                setDefaultLanguage();
            }
            var service = this;
            var activeLanguage = {};

            service.getAvailableLanguages = function() {
                return [{
                    slug: 'en',
                    title: 'English',
                    className: 'england-flag'
                }, {
                    slug: 'sr',
                    title: 'Crnogorski',
                    className: 'montenegro-flag'
                }];
            };
            service.getPageTitles = function() {
              return {
                  offer: {
                      sr: 'Rafting ponuda',
                      en: 'Rafting Offers'
                  },
                  contact: {
                      sr: "O nama",
                      en: "About Us"
                  },
                  gallery: {
                      sr: "Fotografije",
                      en: "Gallery"
                  }
              };
            };
            service.getLocationString = function() {
                return {
                    sr: "Gdje se nalazimo ?",
                    en: "Our location ..."
                };
            };
            service.getContactString = function() {
                return {
                    sr: "Tu smo za Vas !",
                    en: "We're here for you !"
                };
            };
            service.getAboutString = function() {
                return {
                    sr: "Za početak, par riječi ...",
                    en: "A few words for a start ..."
                };
            };
            service.getActiveLanguage = function() {
                return activeLanguage;
            };
            service.setActiveLanguage = function(languageSlug) {
                var selectedLanguage = _.filter(service.getAvailableLanguages(), function(language) {
                    return language.slug === languageSlug;
                });

                if (selectedLanguage && selectedLanguage[0]) {
                    activeLanguage = selectedLanguage[0];
                }
            };
            service.getAboutContent = function() {
                return {
                    sr: "Rafting kamp je porodični posao vec duže od deceniju, zbog čega kod nas vlada mirna, pozitivna i gostoljubiva frekvencija. Iskustvo, pomješano sa našom ljubavlju prema prirodi, ljudima i ovom zaista posebnom komadu Zemlje, izrodilo je kutak u kojem čovjekova čula mogu samo da użivaju i da se potpuno opuste. Ovo je mjesto koje spaja ljude zaljubljene u prirodu, sportiste, rekreativce, turiste, ali i one željne opuštanja i odmora u mirnom, prirodnom, porodičnom ambijentu. \n" +
                    "Nalazi se na samoj tromedji rijeka, sastavcima Pive i Tare, koje tako obgrljene stvaraju Drinu. Niko nije ostao ravnodušan pred ljepotama ove tri moćne rijeke. Očekuje vas ljubazna dobrodošlica \n" +
                    "porodice Raičević i posluge restorana, što će Vaš boravak pretvoriti u svojevrsni užitak.\n" +
                    "\n" +
                    "Do kampa se može doći vozilom, iako put nije sasvim asfaltiran. Parking za goste je obezbjedjen. U kampu se može boraviti ugodno više dana, bez potrebe da se isti napušta. Kamp posjeduje svu potrebnu infrastrukturu: parking, bungalove sa dvokrevetnim, trokrevetnim i četvorokrevetnim sobama, restoran koji omogućava raznovrsne obroke za doručak, ručak i večeru, i koji radi većinu dana, struju, toalete, umivaonike, tuš kabine sa toplom vodom itd.\n" +
                    "Kuhinja je mahom tradicionalna/domaća/seoska i većina obroka se sprema na ognjištu: jagnjetina ispod sača, dinstana jela iz crepulja, ražanj, roštilj, divljač, riba sa žara...",
                    en: "This rafting facility is family business that runs for more than da decade! That's why we have such a peaceful, positive and relaxing vibe here. Experience, mixed with our love towards nature, people and this really special piece of the planet Earth, produced this corner where a man can satisfy and relax all his senses. This place connects and attracts nature-lovers, athletes, scouts, tourists, and everybody in need of relaxation and get-away from urban town lifestyle. It is placed on the very spot of river union, Tara and Piva, making river Drina. No one can be indifferent when faced with this exotic nature and beauty of three powerful rivers. You can expect warm welcome, good organisation and pleasant hosts in the restaurant, which will turn your visit into a special experience. You can access a camp by your car, as we have reserved parking lot for you. Our guests can comfortably spend few days in our camp, without a need leave it at all! We have all needed infrastructure: parking lot, bungalows with two-bed-rooms, three-bed-rooms, four-bed-rooms, restaurant which serves various meals for breakfast, lunch and dinner, electricity, internet, toilets with warm showers etc. Kitchen is mainly traditional/domestic and many meals are made on hearthstone."
                };
            };
            service.getContactContent = function() {
                return {
                    sr: "<ul class='contact-list'>"+
                    "<li class='contact-item padding-bottom-15'>Telefonski brojevi :</li>"+
                    "<li class='contact-item indented'>+382 69 215 968</li>"+
                    "<li class='contact-item indented padding-bottom-25'>+382 69 829 576</li>"+
                    "<li class='contact-item padding-bottom-15'>E-mail :</li>"+
                    "<li class='contact-item indented padding-bottom-25'>tara-rafting@t-com.me</li>"+
                    "<li id='contact-gallery' class='contact-item link padding-bottom-25'>Pogledajte našu Galeriju </li>"+
                    "<li id='contact-offer' class='contact-item link padding-bottom-25'>Pogledajte Rafting ture</li>"+
                    "</ul>",
                    en: "<ul class='contact-list'>"+
                    "<li class='contact-item padding-bottom-15'>Phone numbers :</li>"+
                    "<li class='contact-item indented'>+382 69 215 968</li>"+
                    "<li class='contact-item indented padding-bottom-25'>+382 69 829 576</li>"+
                    "<li class='contact-item padding-bottom-15'>E-mail :</li>"+
                    "<li class='contact-item indented padding-bottom-25'>tara-rafting@t-com.me</li>"+
                    "<li id='contact-gallery' class='contact-item link padding-bottom-25'>Go to our Gallery </li>"+
                    "<li id='contact-offer' class='contact-item link padding-bottom-25'>Look at Rafting Tours</li>"+
                    "</ul>"
                };
            };
            service.getLocationContent = function() {
                return {
                    sr: "Koristeći `Google Maps`, možete nas pronaći ako u `Pretragu` ukucate - `Rafting kamp Tri rijeke`. Takodje, možete unijeti i sledeće koordinate - `43.366109, 18.839760`.",
                    en: "Using `Google Maps`, you can find us by typing - `Rafting kamp Tri rijeke` in `Search`. Also, you can use following coordinates - `43.366109, 18.839760`."
                }
            };
            service.getOfferPageTitle = function(language) {
                return service.getPageTitles().offer[language];
            };
            service.getGalleryPageTitle = function(language) {
                return service.getPageTitles().gallery[language];
            };
            service.getContactPageContent = function(language) {
                var content = {};

                content.title = service.getPageTitles().contact[language];
                content.location = service.getLocationString()[language];
                content.contact = service.getContactString()[language];
                content.about = service.getAboutString()[language];

                content.aboutContent = service.getAboutContent()[language];
                content.contactContent = service.getContactContent()[language];
                content.locationContent = service.getLocationContent()[language];

                return content;
            };
            service.getOfferSectionText = function(language, getAll, slug) {
                var text = {
                    one: {
                        sr: {
                            title: 'Jednodnevni rafting izlet',
                            subTitle: 'Ruta : Brštanovica – Šćepan Polje',
                            content: 'Ovaj rafting program realizuje se u jednom danu na najboljem dijelu, poslednjem  toku rijeke Tare  gdje su najsnažniji i najatraktivniji bukovi i brzaci. Dužina rute je  oko 17 kilometara od Brštanovice pa do sastavaka na Šćepan Polju gdje se Tara sastaje sa Pivom i pravi Drinu. Baš ova dionica sa preko dvadeset svojih bukova i brzaka predstavlja najuzbudljiviji dio rijeke. Rafting se obavlja posebnim, namjenski izrađenim, čamcima za divlje vode, sa posebnim nezavisnihm komorama,  što čini putnike bezbjednim. Čamcima upravljaju licencirani skiperi koji na ovoj dionici poznaju sve ćudi Tare, sve njene bukove, virove, brzake i limane, pa je vožnja maksimalno sigurna. Svaki učesnik je snabdjeven neoprenskom odjećom i obućom, pojasom za spasavanje i kacigom za glavu, a u slučaju kiše i hladnoće oblače se  duga neoprenska odijela i kišne kabanice.',
                            subContent: '             **PROGRAM IZLETA**\n\n(10.30h) Dolazak na Šćepan Polje, doručak u našem ljetnom restoranu na obalama rijeka Tare i Pive  gdje počinje Drina.\n(11.00 h) Podjela rafting opreme i vožnja terenskim vozilima, uzvodno uz rijeku Taru  makadamskim putem, oko 14 km do starta raftinga - Brštanovica.\n(12.00-12.30h) Priprema za splavarenje, davanje upustava i instrukcija o načinu obavljanja raftinga.\n(12.30-16.00h) Rafting po programu sa kraćim pauzama za odmor, kupanje, fotografi sanje ... \n(16.00h) Završetak raftinga  na sastavcima Tare i Pive gdje počinje Drina-Šćepan Polje.Presvlačenje i tuširanje u kampu a potom slijedi ručak i povratak.\n\n             **DODATNE INFORMACIJE**\n\n  - U cijenu ovog programa uračunati su: parking u krugu kampa, doručak, ručak (domaća kuhinja, jagnjetina ispod sačai dr.),vožnja džipovima i rafting.\n  - U cijenu programa nisu uračunati drugi troškovi, koji nijesu predviđeni programom.\n  - Djeca do 6 godina imaju popust 50%\n  - Djeca od 6 do 12 godina imaju popust 30%',
                            price: '40€'
                        },
                        en: {
                            title: 'One-day rafting tour',
                            subTitle: 'Route : Brštanovica – Šćepan Polje',
                            content: 'This tour is organized within the best, last part of the river flow, which contains most exciting, fastest and most attractive whirlpools. This route is long 17 kilometers, and it ends at the point where river Tara meets river Piva, and creates Drina. This part of river flow consists of over 20 whirlpools, many small beaches and astonishing natural beauties by the river side. Rafting is performed with special river boats designed for wild waters, which have separated chambers and sitting areas improving adventurers\' safeness. Boats are maneuvered by trained, licensed and experienced skippers. They are familiar with all whirlpools, river flow and streams, and ready to quickly react in all unexpected situations. Rafting tour is absolutely safe in all passengers follow strict instructions of their skipper. Everyone is equipped with diving suit (it comes in all sizes, with long-sleeve or short-sleeve), diving boots, lifebelt and a helmet.',
                            subContent: '             **TOUR PROGRAMME**\n\n(10.30h) Arrival at the Šćepan Polje, breakfast in our restaurant by the riverside.\n(11.00h) Sharing the rafting suits, driving by off-road vehicle 14km up to the starting point of our tour. \n(12.00-12.30h) Preparing for rafting, sharing instructions, advices and equipment.\n(12.30-16.00h) Rafting down the river with some short brakes for taking pictures, relaxing, swimming and so on... \n(16.00h) End of the tour at the meeting point of river Tara and Piva, border of Republic of Montenegro and Bosnia and Herzegovina. Changing clothes and taking a shower in the camp, serving the lunch afterwards. Tour has ended, but the guests are free to enjoy the rest of the day in our facility or to take a walk in the nature.\n\n             **ADDITIONAL INFORMATION**\n\n  - Price of this tour includes: parking space by the camp, breakfast, lunch (domestic kitchen, grilled lamb and many specialities), off-road drive to the starting point and rating tour.\n  - Price of this tour doesn\'t include other costs, not predicted in programme.\n  - Children under the age of 6 have 50% discount.\n  - Children under the age of 12 have 30% discount',
                            price: '40€'
                        }
                    },
                    two: {
                        sr: {
                            title: 'Dvodnevni rafting izlet',
                            subTitle: 'Ruta : Brštanovica – Šćepan Polje',
                            content: 'Prvi dan - \n' +
                            'Dolazak gostiju na Šćepan Polje u večernjim časovima. Nakon parkiranja vozila na našem parkingu prihvat i smještaj gostiju u bungalove ili pod šatore u kampu koji je na samim obalama Tare i Pive gdje počinje rijeka Drina. Potom slijedi  večera i cjelovečernje druženje uz muziku i logorsku vatru....\n' +
                            'Noćenje.\n' +
                            'Drugi dan - \n' +
                            'Buđenje u ranim jutarnjim časovima, doručak, nakon čega slijede pripreme za polazak na startno mjesto raftinga – Brštanovicu. Transfer terenskim vozilima uzvodno uz rijeku Taru makadamskim putem dužine oko 14 km,oblačenje opreme, davanje instrukcija , formiranje grupa i ukrcavanje na čamce. Rafting najuzbudljivom dionicom Tare (BrštanovicaŠćepanPolje) niz 23 od ukupno 50 brzaka Tare, sa kraćim pauzama za odmor, kupanje, fotografi sanje... Po završetku raftinga, na samom ušću Tare i Pive, gdje počinje rijeka Drina , tuširanje i presvlačenje u  kampu, (topla voda),potom  ručak. Odmor i slobodne aktivnosti.\n',
                            subContent: 'U cijenu ovog programa uračunato je:\n' +
                            '- smještaj na bazi 1 pansiona (noćenje u bungalovima)\n' +
                            '- transfer terenskim vozilima i splavarenje rijekom Tarom\n' +
                            '- oprema za rafting: neoprenska odijela, kacige, pojasevi, ronilačke čizme…\n' +
                            'U cijenu programa nije uračunato:\n' +
                            '- svi drugi troškovi koji nisu predviđeni programom.\n' +
                            'Djeca do 12 godina imaju popust 30%',
                            price: '50€'
                        },
                        en: {
                            title: 'Two-day rafting tour',
                            subTitle: 'Route : Brštanovica – Šćepan Polje',
                            content: 'I day - \n' +
                            'Arrival at Šćepan Polje in the evening hours. Parking your car on our parking lot, leaving your things in your bungalow or room (or at your tent if you prefer). You can spend the evening by our campfire, listening to the music and chilling by the riverside. Before sleep you have dinner and free time to relax after that.\n' +
                            'Sleep over. \n' +
                            'II day - \n' +
                            'Waking up in early morning, having a breakfast, preparing for drive to the start point of the tour - Brštanovica. Driving 14km up by the river with off-read trucks. Preparing for rafting, sharing instructions, advices and equipment. Loading the boats and start of rafting tour. We will hit 23 of total 50 Tara\'s whirlpools, with short breaks for taking pictures, relaxing, swimming and so on...\n' +
                            'End of the tour at the meeting point of river Tara and Piva, border of Republic of Montenegro and Bosnia and Herzegovina. Changing clothes and taking a shower in the camp, serving the lunch afterwards. Tour has ended, but the guests are free to enjoy the rest of the day in our facility or to take a walk in the nature.\n' +
                            'Packing your things and leaving the camp.',
                            subContent: 'Price of this tour includes:\n' +
                            '- one night sleep (bungalows, rooms and tents)\n' +
                            '- off-road drive to the starting point and rating tour\n' +
                            '- rafting equipment: diving suits, helmets, safeguards, diving boots ...\n' +
                            'Price of this tour doesn\'t include:\n' +
                            '- other costs, not predicted in programme\n' +
                            'Children under the age of 6 have 50% discount.\\n' +
                            'Children under the age of 12 have 30% discount\'',
                            price: '50€'
                        }
                    },
                    three: {
                        sr: {
                            title: 'Trodevni rafting izlet',
                            subTitle: 'Rafting Tarom i krstarenje Pivskim jezerom',
                            content: 'Prvi dan - \n' +
                            'Dolazak gostiju na Šćepan Polje u večernjim časovima. Nakon parkiranja vozila na našem parkingu prihvat i smještaj gostiju u bungalove ili pod šatore u kampu koji je na samim obalama Tare i Pive gdje počinje rijeka Drina. Potom slijedi  večera i cjelovečernje druženje uz muziku i logorsku vatru....\n' +
                            'Noćenje.\n' +
                            'Drugi dan - \n' +
                'Buđenje u ranim jutarnjim časovima, doručak, nakon čega slijede pripreme za polazak na startno mjesto raftinga – Brštanovicu. Transfer terenskim vozilima uzvodno uz rijeku Taru makadamskim putem dužine oko 14 km,oblačenje opreme, davanje instrukcija , formiranje grupa i ukrcavanje na čamce. Rafting najuzbudljivom dionicom Tare (BrštanovicaŠćepanPolje) niz 23 od ukupno 50 brzaka Tare, sa kraćim pauzama za odmor, kupanje, fotografi sanje... Po završetku raftinga, na samom ušću Tare i Pive, gdje počinje rijeka Drina , tuširanje i presvlačenje u  kampu, (topla voda),potom  ručak. Odmor i slobodne aktivnosti.\n' +
                            'Treci dan - \n' +
                            'Nakon doručka, goste vozimo do Plužina gdje započinje krstarenje Pivskim jezerom prema Pivskom oku – izvoru Pive u trajanju od 3 sata. Povratak u kamp, tuširanje i presvlačenje u  kampu, (topla voda),potom  ručak. ručak čime se ovaj program i završava.',
                            subContent: 'U cijenu ovog programa uračunato je:\n' +
                            '- smještaj na bazi 1 pansiona (noćenje u bungalovima)\n' +
                            '- transfer terenskim vozilima i splavarenje rijekom Tarom\n' +
                            '- oprema za rafting: neoprenska odijela, kacige, pojasevi, ronilačke čizme…\n' +
                            'U cijenu programa nije uračunato:\n' +
                            '- svi drugi troškovi koji nisu predviđeni programom.\n' +
                            'Djeca do 12 godina imaju popust 30%',
                            price: '70€'
                        },
                        en: {}
                    },
                    complete: {
                        sr: {
                            title: 'Splavarenje cijelim plovnim tokom',
                            subTitle: 'Ruta : Šljivansko-Radovan Luka-Šćepan Polje',
                            content: 'Prvi dan - \n' +
                            'Dolazak učesnika na splavište Šljivansko najdalje do 10 sati  odakle kreće rafting. Nakon dolaska organizovan je doručak uz samu rijeku. Pripreme za plovidbu, davanje instrukcija i ukrcavanje na čamce. Plovidba do Radovan luke u trajanju 3-4 sata u zavisnosti od nivoa vode sa kraćim pauzama za odmor, kupanje, fotografisanje… Po dolasku u kamp organizovan je ručak (na meniju specijaliteti lokalnog kraja). Cijelovečernje druženje uz vatru. Noćenje.' +
                            'Drugi dan - \n' +
                            'Buđenje u ranim jutarnjim časovima, doručak, nakon čega slijede pripreme za plovidbu daljim tokom rijeke od  Radovan Luke do Šćepan Polja u trajanju od 4-6 sati u zavisnosti od nivoa vode. Pored planirane pauze na Bailović sigama, gdje je predviđena užina, organizovaće se i kraće pauze za odmor, kupanje, fotografisanje…Po završetku raftinga, na samom ušću Tare i Pive, u kampu , tuširanje (topla voda), presvlačenje, ručak i povratak na odredište.',
                            subContent: 'U cijenu ovog programa uračunato je:\n' +
                            '- smještaj na bazi 1 pansiona (noćenje u bungalovima)\n' +
                            '- transfer terenskim vozilima i splavarenje rijekom Tarom\n' +
                            '- oprema za rafting: neoprenska odijela, kacige, pojasevi, ronilačke čizme…\n' +
                            'U cijenu programa nije uračunato:\n' +
                            '- svi drugi troškovi koji nisu predviđeni programom.\n' +
                            'Djeca do 12 godina imaju popust 30%',
                            price: '180€'
                        },
                        en: {}
                    }
                };
                var selectedLanguageText = {};

                if (getAll) {
                    _.each(text, function(section, slug) {
                        selectedLanguageText[slug] = section[language];
                        selectedLanguageText[slug].type = 'offer';
                        selectedLanguageText[slug].id = slug;
                    });

                    return selectedLanguageText;
                }

                return text[slug] && text[slug][language] ? text[slug][language] : '';
            };
            service.getOfferActions = function() {
                return {
                    details: {
                        sr: 'Pogledaj detalje ...',
                        en: 'Read more ...'
                    },
                    contact: {
                        sr: 'Kontaktiraj nas !',
                        en: 'Contact us !'
                    }
                };
            };

            initialize();

            return service;
        }
    ]);
