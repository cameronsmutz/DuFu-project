
var config = {
    style: 'mapbox://styles/csmutzy/cmbymywsp00mv01sp3h766exd',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiY3NtdXR6eSIsImEiOiJjbTFqamx6YjMxMHUwMmpweHFodGljY2J1In0.HMxiHUZ8QXW-J1rPNZgzPg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Exploring the Locations in Du Fu\'s 500-Word Poem',
    subtitle: 'By Cameron Smutz',
    byline: 'Scroll up and down between the chapters of the storymap.',
    footer: '<h3>Sources:</h3> <a href="https://baike.baidu.com/item/%E8%87%AA%E4%BA%AC%E8%B5%B4%E5%A5%89%E5%85%88%E5%8E%BF%E5%92%8F%E6%80%80%E4%BA%94%E7%99%BE%E5%AD%97/1555111" target="_blank">“自京赴奉先县咏怀五百字.”</a> Baidu Baike, Accessed [15 June 2025]. <br><br> Xiong, Victor Cunrui. Sui-Tang Chang\'an: A Study in the Urban History of Medieval China. Center for Chinese Studies, University of Michigan, 2000. <br><br> Cheng, Qianfan. "One Sober and Eight Drunk: Du Fu’s \'Song of the Eight Drunken Immortals\'." Social Sciences in China, vol. 6, no. 4, Dec. 1985, pp.83-94. <br><br> Owen, Stephen. The Great Age of Chinese Poetry: The High Tang. Yale University Press, 1981, pp.183-224. <br><br> Owen, Stephen. The Poetry of Du Fu. De Gruyter, 2016, vol. 2, pp.208-217',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Introduction',
            image: 'assets/123-pi891q.png',
            description: 'In the winter of 755 CE, as the Tang Dynasty teetered on the brink of chaos, the poet Du Fu (杜甫) embarked on a journey from the imperial capital of Chang’an to Fengxian County to reunite with his family. This journey, immortalized in his poem “Going from the Capital to Fengxian County, Singing My Feelings,” (自京赴奉先縣詠懷五百字) captures not only the physical hardships of travel through a frozen and fractured landscape, but also the emotional weight of a nation unraveling. This story map focuses on the historical geography of his world, highlighting key locations such as Chang’an, Mount Li, and the Jing and Wei Rivers. Each place reveals a layer of the poet’s inner turmoil and the broader societal collapse that would come to define the An Lushan Rebellion. <br><br> English references to the text are based on Stephen Owen\'s translation.',
            location: {
                center: [105, 34.3083],
                zoom: 4.5,
                pitch: 0,
                bearing: 0,
                speed: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                // layer: 'layer-name',
                // opacity: 1,
                //     duration: 5000
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
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Chang\'an - the Capital (長安)',
            image: '',
            description: 'Located where now lies the city of Xi\'an in Shaanxi province, Chang\'an was the capital of the Tang dynasty. At the height of it\'s glory in the Tang Dynasty, Chang\'an was one of the largest cities in the world, occupying about 84 sq. km. with around one million inhabitants. However, it would soon suffer major damage during the An Lushan Rebellion. <br><br> Du Fu settled down in Chang\'an in 746. His 500 word poem can be interpreted as a reflection of the 10 years he spent there and his personal turmoil associated with the capital. Chang’an, for Du Fu, is both the center of civilization and the epicenter of moral decay. This is expressed with lines such as "多士盈朝廷，仁者宜戰慄" (Many officers are now filling the court, it is fitting that kindly men tremble.) - expressing his fear and disillusionment at the state of the imperial bureaucracy. As he leaves the capital, he carries with him the burden of a collapsing order and the hope that poetry might still bear witness to truth.',
            location: {
                center: [108.9470, 34.2594],
                zoom: 8,
                pitch: 60,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 1, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Mount Li (驪山)',
            image: '',
            description: 'In the poem, Du Fu writes that he began his journey at midnight, and passed Mount Li at daybreak. <br> Mount Li was located to the northeast of the capital, and is part of the Qinling mountain range. It\'s peak is 1302 meters above sea level.',
            location: {
                center: [109.2762902, 34.3334669],
                zoom: 12,
                pitch: 80,
                bearing: 230,
                speed: 1, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'The Hot Springs at Hua-qing palace (華清池)',
            image: 'assets/238128857_8b7fd5c9eb_c.jpg',
            description: 'Lines 39-40: "At daybreak I passed by Mount Li, 40 the royal couch lay there on its towering height." (凌晨過驪山，御榻在嵽嵲) The \'royal couch\' is a reference to emperor Xuanzong\'s prescence at Mount Li. Xuanzong made visits to his pleasure palace that was built around the hot springs at Mount Li. For Du Fu, however, the mountain symbolizes the detachment of the ruling elite, who bask in comfort while ordinary people suffer - "Whips flogged their menfolk, gathering taxes to present to the palace.” <br><br> Although Du Fu writes that it sits on the mountain\'s towering height, the hot springs is actually situated on the northern foothills of mount Li, far away from the peak. The site is now a popular historical tourist destination, with a museum and a reconstructed palace complex.',
            location: {
                center: [109.207222, 34.365],
                zoom: 14,
                pitch: 50,
                bearing: 175,
                speed: 1,
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Jing and Wei Rivers: (涇渭)',
            image: '',
            description: 'As Du Fu traveled through the wintry landscape of central China, he reached the confluence of the Jing and Wei Rivers, a symbolic and literal crossroads in his journey. In the poem, he writes: “My northward cart came where the Jing meets the Wei, at the official crossing I again changed my track.” (北轅就涇渭，官渡又改轍) He uses this point in time to provide dramatic imagery of this treacherous moment in the journey. He mentions the rivers swollen with ice floes and travelers holding hands to help eachother cross the creaking bridge. This moment captures both the geographical challenge of navigating a frozen, flood-prone terrain and the emotional weight of uncertainty. ',
            location: {
                center: [109.0672, 34.4694],
                zoom: 12,
                pitch: 60,
                bearing: 181,
                speed: 1,
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Fengxian County (奉先縣)',
            image: '',
            description: 'Du Fu’s long and arduous journey culminates in Fengxian County, where he hoped to find refuge and reunite with his family. Instead, he is met with heartbreak. In the poem’s most devastating lines, he writes: “When I came in the gate, I heard crying out, my young son had died of hunger. I could not suppress a wail of my own, when even the whole lane was sobbing.” These words mark not only his physical arrival but also the emotional low of the poem. Fengxian becomes a site of personal tragedy and a microcosm of the suffering spreading across the empire. In this final scene, the poet’s private sorrow merges with the collective anguish of a nation in collapse. This devastating moment is not isolated—it is the culmination of a poem steeped in sorrow for both personal and collective loss. “Considering what bitter things still happened to me, ordinary people must truly be desperate. I brood silently on those who lost livelihoods, then think of our troops in far garrisons.” His grief becomes a lens through which he contemplates the suffering of others: the poor, the displaced, the soldiers stationed far from home. <br><br> It is likely that the place that Fengxian county refers to in the poem is located in modern day Pucheng county (蒲城縣), in Shaanxi province.',
            location: {
                center: [109.58, 34.957],
                zoom: 9.5,
                pitch: 60,
                bearing: 181,
                speed: 1,
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }

    ]
};