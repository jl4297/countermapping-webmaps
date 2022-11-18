var config = {
    style:  'mapbox://styles/iamwfx/cjjx6bl926vgt2ss0l9dbpmxz',
    accessToken: 'pk.eyJ1Ijoiamw0Mjk3MTEyMiIsImEiOiJjbDh4NXl6M3cwM2JuM3VwanV6dHU4ZnBtIn0.zR1wZ2svUti6isSamIBxcA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Coastal Flooding in New York City',
    subtitle: 'Assessing Risks to Vulnerable Housing',
    byline: 'By a Digital Storyteller',
    para1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices metus nec ante congue, eget lobortis turpis eleifend. Praesent pharetra a purus in cursus. Nunc feugiat tortor quis lectus varius, id commodo dui elementum. Vestibulum ut enim non lectus placerat pulvinar nec id nisi. Phasellus tempor quis ante vel tempor. Mauris fermentum interdum blandit. Curabitur rutrum velit sit amet eros posuere, at congue nulla tristique. Sed quis lectus finibus, maximus est eget, finibus leo. Ut efficitur ante risus, ut blandit diam posuere sit amet.',
    para2:'Nam pulvinar ante vitae ornare cursus. Etiam in mollis massa, vitae aliquam leo. Donec sed felis vel dolor hendrerit rhoncus. Sed tincidunt mollis ipsum at ultricies. Suspendisse lectus arcu, luctus sit amet ante nec, tincidunt rhoncus metus. Sed non odio sollicitudin, volutpat neque et, ultrices sapien. Vestibulum sit amet ex mauris. Nulla pulvinar arcu eu ipsum scelerisque, nec hendrerit lacus lacinia. Ut congue, nisi id pellentesque porta, orci nisl rhoncus diam, vel hendrerit tellus ligula hendrerit mi. In massa lorem, ullamcorper id egestas ultricies, tincidunt sed sapien. In tristique mattis mauris, eu tristique tortor feugiat at. Etiam placerat libero vel libero maximus, et pulvinar ex finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus.',    
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: 'images/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-122.418398, 37.759483],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'interlude',
            alignment: 'center',
            hidden: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
            video: 'images/902-1_902-2364-PD2_preview.mp4',
            location: {
                center: [-73.97615, 40.71901],
                zoom: 14.84,
                pitch: 48,
                bearing: 142.44,
            },
        },
        {
            id: 'third-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
              center: [-73.97615, 40.71901],
              zoom: 15.84,
              pitch: 56,
              bearing: 260.44,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'housing',
                    opacity: 0,
                    duration: 10
                }],
            onChapterExit: []
        }
    ]
};









// don't copy the html tag in