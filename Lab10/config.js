var config = {
    style: 'mapbox://styles/jl42971122/cl9rm6ebv000q14n6hloasgsv',
    accessToken: 'pk.eyJ1Ijoiamw0Mjk3MTEyMiIsImEiOiJjbDh4NXl6M3cwM2JuM3VwanV6dHU4ZnBtIn0.zR1wZ2svUti6isSamIBxcA',
    showMarkers: true,
    markerColor: '#fe9929',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Flood Risk and Public and Affordable Housing',
    subtitle: 'How public and affordable housing is affected by flood risk: a case study of Red Hook Houses',
    byline: 'By jl4297',
    footer: 'Source:<a href="https://thebridgebk.com/red-hook-after-sandy-flourishing-but-vulnerable/" target="_blank">Red Hook After Sandy: Flourishing But Vulnerable</a>. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'affHousing_floodRisk_Chapter_1',
            alignment: 'left',
            hidden: false,
            title: 'Public and Affordable Housing Flood Risk',
            // image: 'images/source.png',
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents without power for days or even weeks. New York City Housing Authority public housing developments were affected. 24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected.<br> With rising sea levels from climate change and the promise of more flooding, which areas and who will likely be most affected? How is affordable housing construction responding to this?',
            location: {
                center: [-73.98565, 40.75167],
                zoom: 11.5,
                pitch: 0,
                bearing: 14
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'pluto-hous-type-master-featu-7b5u7f',
                    opacity: 0,
                    // duration: 5000
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'floodRisk_RedHookHouses_Chapter_2',
            alignment: 'right',
            hidden: false,
            title: 'Flood-related Damages to the Red Hook Houses',
            image: 'https://thebridgebk.com/wp-content/uploads/2017/10/121029_5267-e1508777751352.jpg',
            description: '<a href="https://thebridgebk.com/red-hook-after-sandy-flourishing-but-vulnerable/">Red Hook After Sandy: Flourishing But Vulnerable</a> <br> The Red Hook Houses are two connected public housing complexes located in Red Hook, Brooklyn, New York City. The city classifies Red Hook Houses as being in flood zone 1, indicating high flood risk. During Hurricane Sandy in 2012, the development was inundated with 6 feet (1.8 m) of flood water through sewer overflow and high tides. The storm left residents without power and fresh water for months. This caused leaks, resulting in mold that affected many residents health.',
            location: {
                center: [-74.00467, 40.67567],
                zoom: 12,
                pitch: 0,
                bearing: 14,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer:'pluto-hous-type-master-featu-7b5u7f',
                opacity:1
            }
            ],
            onChapterExit: []
        }
        /*{
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Third Title',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [6.15116, 46.20595],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },*/
        /*{
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Third Title',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }*/
    ]
};
