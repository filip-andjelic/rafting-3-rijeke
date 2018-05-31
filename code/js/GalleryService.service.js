angular.module('archApp')
    .service('GalleryService', ['TextualContentService',
        function(TextualContentService) {
        function createFrames() {
            return [/*{
                image: '_13_00017.jpg',
                title: {
                    en: 'Bungalow',
                    sr: 'Bungalov'
                }
            },{
                image: '_36_00040.jpg',
                title: {
                    en: 'Villager',
                    sr: 'Komsije :)'
                }
            },{
                image: '__2_00006.jpg',
                title: {
                    en: 'Piva Lake',
                    sr: 'Pivsko jezero'
                }
            },{
                image: '__6_00010.jpg',
                title: {
                    en: 'Monastery Piva',
                    sr: 'Pivski manastir'
                }
            },{
                image: '_28_00072.jpg',
                title: {
                    en: 'Mountain view',
                    sr: 'Planinski pogled'
                }
            },{
                image: '__5_00049.jpg',
                title: {
                    en: 'Bridge Djurdjevica',
                    sr: 'Djurdjevica Tara'
                }
            },{
                image: '14A_00178.jpg',
                title: {
                    en: 'Bridge on Piva Lake',
                    sr: 'Most na Pivskom jezeru'
                }
            },{
                image: '_25_00189.jpg',
                title: {
                    en: 'Rafting Guide',
                    sr: 'Rafting Skiper'
                }
            },{
                image: '_26_00190.jpg',
                title: {
                    en: 'Riding a boat',
                    sr: 'Na camcu ...'
                }
            },{
                image: 'P1000943.JPG',
                title: {
                    en: 'Taking pictures ...',
                    sr: 'Mjesta za slikavanje ...'
                }
            },{
                image: 'P1000974.JPG',
                title: {
                    en: 'Another bridge on Tara',
                    sr: 'Most na Tari'
                }
            },{
                image: 'DSC_0067.JPG',
                title: {
                    en: 'Rafting',
                    sr: 'Rafting u toku'
                }
            },{
                image: 'DSC_0070.JPG',
                title: {
                    en: 'Photo-Shooting on the boat',
                    sr: 'Slikanje tokom raftinga'
                }
            },{
                image: 'DSC_0292.JPG',
                title: {
                    en: 'Adrenaline rush',
                    sr: 'Bukovi na Tari'
                }
            },{
                image: '3553g5.JPG',
                title: {
                    en: 'View from our terrace',
                    sr: 'Pogled s nase terase'
                }
            }, {
                image: 'DSC00303.JPG',
                title: {
                    en: 'Our camp',
                    sr: 'Nas kamp'
                }
            }, {
                image: 'DSC00307.JPG',
                title: {
                    en: 'Time with friends',
                    sr: 'Vrijeme sa prijateljima'
                }
            }, {
                image: 'DSC00310.JPG',
                title: {
                    en: 'Beautiful waterfall',
                    sr: 'Prelijep vodopad'
                }
            }, {
                image: '539624_618894044807876_290604773_n.jpg',
                title: {
                    en: 'Photo-Shooting by the waterfall',
                    sr: 'Slikanje pored vodopada'
                }
            }, {
                image: 'IMG_20140807_230621.jpg',
                title: {
                    en: 'Playing games',
                    sr: 'Opustanje uz igrice'
                }
            }, {
                image: 'IMG_20150530_160657.jpg',
                title: {
                    en: 'Fresh fruit, fresh air',
                    sr: 'Svjeze voce, svjez vazduh'
                }
            }, {
                image: 'IMG_20150531_131350.jpg',
                title: {
                    en: 'Terrace of camp',
                    sr: 'Terasa kampa'
                }
            }, {
                image: 'IMG_20150531_151731.jpg',
                title: {
                    en: 'Preparing food',
                    sr: 'Pripremanje hrane'
                }
            }, {
                image: '35g3g.jpg',
                title: {
                    en: 'Having wine by the water',
                    sr: 'Uzivanje u vinu uz rijeku'
                }
            }, {
                image: '_11_00015.jpg',
                title: {
                    en: 'Accomodation',
                    sr: 'Smjestaj'
                }
            }, */{
                image: 'sastavci.jpg',
                title: {
                    en: 'Camp location',
                    sr: 'Pogled na kamp'
                }
            },{
                image: 'rijeka.jpg',
                title: {
                    en: 'Canyon view',
                    sr: 'Kanjon rijeke'
                }
            },{
                image: 'rafting.jpg',
                title: {
                    en: 'Moment on the boat',
                    sr: 'Trenutak sa čamca'
                }
            },{
                image: 'planina.jpg',
                title: {
                    en: 'Hiking view',
                    sr: 'Planinarenje'
                }
            },{
                image: 'background-canyon.jpg',
                title: {
                    en: 'Hills around the river',
                    sr: 'Planine iznad kanjona'
                }
            }, {
                image: 'bungalows.jpg',
                title: {
                    en: 'Our bungalows',
                    sr: 'Bungalovi'
                }
            },{
                image: 'drone-view.JPG',
                title: {
                    en: 'Drone view',
                    sr: 'Rafting iz ptičije perspektive'
                }
            },{
                image: 'durmitor1.jpg',
                title: {
                    en: 'Mountain Durmitor',
                    sr: 'Planina Durmitor'
                }
            }, {
                image: 'durmitor2.jpg',
                title: {
                    en: 'Lake on Durmitor',
                    sr: 'Jezero na Durmitoru'
                }
            },{
                image: 'lake.jpg',
                title: {
                    en: 'Piva Lake',
                    sr: 'Pivsko jezero'
                }
            },{
                image: 'maglic.jpg',
                title: {
                    en: 'Mountain Maglic',
                    sr: 'Planina Maglic'
                }
            }, {
                image: 'montenegro-durmitor.jpg',
                title: {
                    en: 'View on Durmitor',
                    sr: 'Pogled na Durmitoru'
                }
            },{
                image: 'mountains.jpg',
                title: {
                    en: 'Mountains above Tara',
                    sr: 'Planine iznad Tare'
                }
            },{
                image: 'maglic1.jpg',
                title: {
                    en: 'Maglic Lake',
                    sr: 'Jezero na Maglicu'
                }
            },{
                image: 'old-photo.jpg',
                    title: {
                    en: '20 years ago...',
                        sr: 'Prije 20 godina...'
                }
            }, {
                image: 'pivsko-jezero1.jpg',
                    title: {
                    en: 'View on Piva Lake',
                        sr: 'Pogled na Pivsko jezero'
                }
            },{
                image: 'pjezero.jpg',
                    title: {
                    en: 'River Piva Canyon',
                        sr: 'Pivski Kanjon'
                }
            },{
                image: 'pjezero1.jpg',
                    title: {
                    en: 'Montenegro map',
                        sr: 'Mapa Crne Gore'
                }
            }, {
                image: 'river-flow.jpg',
                    title: {
                    en: 'Tara river flow',
                        sr: 'Tok rijeke Tare'
                }
            },{
                image: 'tara1.jpg',
                    title: {
                    en: 'River Tara Canyon',
                        sr: 'Kanjon rijeke Tare'
                }
            },{
                image: 'tara2.jpg',
                    title: {
                    en: 'Drone view on Tara Canyon',
                        sr: 'Kanjon Tare iz ptičije perspektive'
                }
            },{
                image: 'taramost.jpg',
                title: {
                    en: 'Djurdjevića Bridge on Tara',
                    sr: 'Djurdjevića most na Tari'
                }
            },{
                image: 'sac.jpg',
                title: {
                    en: 'Preparing traditional meal',
                    sr: 'Spremanje tradicionalne hrane'
                }
            },{
                image: 'meal.jpg',
                title: {
                    en: 'Dinner',
                    sr: 'Večera'
                }
            }];
        }
        var service = {};

        service.getFrames = function() {
            var frames = createFrames();

            _.each(frames, function(frame) {
               frame.title = frame.title[TextualContentService.getActiveLanguage().slug];
            });

            return frames;
        };

        return service;
        }]);
