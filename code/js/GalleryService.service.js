angular.module('archApp')
    .service('GalleryService', ['TextualContentService',
        function(TextualContentService) {
        function createFrames() {
            return [{
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
                image: 'drone-view.jpg',
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
