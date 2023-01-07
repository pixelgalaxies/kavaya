"use strict";(self["webpackChunkkavaya"]=self["webpackChunkkavaya"]||[]).push([[443],{1501:function(e,a,n){n.d(a,{Z:function(){return l}});var t=function(){var e=this,a=e._self._c;return a("section",{staticClass:"hero"},[a("div",{staticClass:"container"},[a("h2",{staticClass:"heading"},[e._v(e._s(e.content.title))]),a("p",[e._v(e._s(e.content.copy))]),a("a",{staticClass:"hero__btn",attrs:{href:e.content.btnHref}},[e._v(" "+e._s(e.content.btnText)+" ")]),a("a",{staticClass:"hero__link",attrs:{href:e.content.linkHref}},[e._v(" "+e._s(e.content.linkText)+" ")])])])},i=[],o={name:"SectionHero",props:{content:Object}},r=o,s=n(1001),h=(0,s.Z)(r,t,i,!1,null,"8281e07a",null),l=h.exports},809:function(e,a,n){n.r(a),n.d(a,{default:function(){return w}});var t=function(){var e=this,a=e._self._c;return a("main",{staticClass:"about"},[a("HeroSection",{attrs:{content:e.aboutData.hero}}),a("AboutSection",{attrs:{content:e.aboutData.authorsSection,id:"authors"}})],1)},i=[],o=function(){var e=this,a=e._self._c;return a("section",{staticClass:"about__section",attrs:{id:"authors"}},[a("div",{staticClass:"container"},[a("h2",{staticClass:"heading"},[e._v(e._s(e.content.title))]),""!=e.content.copy?a("p",[e._v(e._s(e.content.copy))]):e._e(),a("ul",{staticClass:"about__list authors"},e._l(e.content.authors,(function(n,t){return a("li",{key:t,staticClass:"authors__item"},[a("div",{staticClass:"authors__details"},[a("h3",{staticClass:"authors__heading"},[e._v(" "+e._s(n.name)+" ")]),a("p",{staticClass:"authors__copy"},[e._v(" "+e._s(n.copy)+" ")]),n.links.length>0?a("ul",{staticClass:"about__list authors__links"},e._l(n.links,(function(n,t){return a("li",{key:t},[a("a",{staticClass:"authors__link-item",attrs:{href:n.linkHref}},[e._v(" "+e._s(n.linkText)+" ")])])})),0):e._e()]),a("div",{staticClass:"authors__image"},[a("img",{attrs:{src:n.image,alt:n.name}})])])})),0)])])},r=[],s={name:"AboutSection",props:{content:Object}},h=s,l=n(1001),c=(0,l.Z)(h,o,r,!1,null,"2fd0df5b",null),u=c.exports,g=n(1501);const d={hero:{title:"About The Story",copy:"Tales of Kavaya is an exciting adventure about the most powerful witches in the land. Join Azreal, Grey, Morgan, Ayari, and Rowan as they replace a generation of rulers. Through the ups and downs of leadership, the five witches experience firsthand the many struggles that come with their new roles, all while juggling their personal lives.",btnHref:"/story",btnText:"Read Now",linkHref:"#authors",linkText:"Authors"},authorsSection:{title:"Meet The Authors",copy:"",authors:[{name:"Jamie Hidaro",image:n(4570),copy:"Hi, hello. My friends call me James. I’m the illustrator behind Tales of Kavaya. I absolutely adore drawing, cartoons, and all things magical. Since I was a young girl, I’ve always wanted to make a comic. Unfortunately, I’ve never actually gotten past the character design phase. That is, until now! Creating a comic with my friends has been a dream come true. I hope you’ll grow to love Tales of Kavaya as much as I do.",links:[{linkHref:"https://www.instagram.com/jamiehidaro/",linkText:"Instagram",linkIcon:""}]},{name:"Dustin Clark",image:n(1150),copy:"Hi! I'm the one responsible for building out the site. If you find any bugs please email us. I'm just a guy with a passion for web development and all things magical. When James wanted to make a web comic, I squealed at the opportunity to flex my growing web development muscles. I hope you enjoy the world we created together.",links:[{linkHref:"https://www.instagram.com/goblin.magic/",linkText:"Instagram",linkIcon:""}]},{name:"KC Balboa",image:n(7754),copy:"Hi, my name is KC. When I was younger, my dream job was to become an animator. I used to love drawing, writing stories, and reading/watching anything with magic or superpowers. But as I grew older, I got busier and busier with work. I lost my passion to draw and write and felt like it was a waste of time. One day, my friends came to me with an idea to write a comic book. I was excited to join them on their adventure and it rekindled my passion to write (still working on rekindling my passion to draw lol). The whole creative process from making up names for mystical deadly plants to designing magical creatures with all their odd little quirks has been so much fun and a great escape from reality. With this, my new dream is for our comic to be enjoyed by millions of people as we have enjoyed making it!",links:[{linkHref:"",linkText:"",linkIcon:""}]}]}};var m=d,p={name:"AboutView",components:{AboutSection:u,HeroSection:g.Z},data(){return{aboutData:m}}},f=p,y=(0,l.Z)(f,t,i,!1,null,"d40f2a4e",null),w=y.exports},4172:function(e,a,n){n.r(a),n.d(a,{default:function(){return w}});var t=function(){var e=this,a=e._self._c;return a("main",{staticClass:"about"},[a("HeroSection",{attrs:{content:e.characterData.hero}}),a("CharactersSection",{attrs:{content:e.characterData.woa,id:"woa"},on:{"update-parent":e.updateOverlay}}),a("CharactersSection",{attrs:{content:e.characterData.oob,id:"oob"},on:{"update-parent":e.updateOverlay}}),a("CharactersSection",{attrs:{content:e.characterData.hog,id:"hog"},on:{"update-parent":e.updateOverlay}}),a("CharactersSection",{attrs:{content:e.characterData.misc,id:"misc"},on:{"update-parent":e.updateOverlay}}),a("div",{staticClass:"overlay"},[a("i",{staticClass:"close-icon--main",on:{click:function(a){return e.closeOverlay()}}},[e._v("[X] CLOSE")]),a("div",{staticClass:"overlay__inner"},[a("img",{attrs:{src:e.overlayData.image,alt:""}}),a("span",{staticClass:"overlay__pronounciation"},[e._v(" "+e._s(e.overlayData.pronounciation)+" ")]),a("div",{staticClass:"overlay__details"},[""!=e.overlayData.nickname?a("span",[e._v(" aka "+e._s(e.overlayData.nickname)+" ")]):e._e(),a("span",[e._v(e._s(e.overlayData.age))]),a("span",[e._v(e._s(e.overlayData.gift))])]),a("p",[e._v(e._s(e.overlayData.description))]),a("i",{staticClass:"close-icon--secondary",on:{click:function(a){return e.closeOverlay()}}},[e._v("[X] CLOSE")])])])],1)},i=[],o=function(){var e=this,a=e._self._c;return a("section",{staticClass:"characters__section"},[a("div",{staticClass:"container"},[a("h2",{staticClass:"heading"},[e._v(e._s(e.content.name))]),""!=e.content.description?a("p",[e._v(e._s(e.content.description))]):e._e(),a("ul",{staticClass:"characters__list"},e._l(e.content.people,(function(n,t){return a("li",{key:t,staticClass:"characters__item",on:{click:function(a){return e.passToParent(n)}}},[a("h3",{staticClass:"characters__name"},[e._v(e._s(n.name))]),a("img",{attrs:{src:n.thumbnail,alt:n.name}})])})),0)])])},r=[],s={name:"CharactersSection",props:{content:Object},data(){return{currentIndex:"0",currentGroup:"woa"}},methods:{passToParent(e){this.$emit("update-parent",e),document.body.classList.add("overlay--open")}}},h=s,l=n(1001),c=(0,l.Z)(h,o,r,!1,null,"69adbdee",null),u=c.exports,g=n(1501);const d={hero:{title:"The People Of Kavaya",copy:"",btnHref:"/story",btnText:"Read Now",linkHref:"#woa",linkText:"Characters"},woa:{name:"Witches of Alderath",description:"When Ezanna demoted the Order of Braylon, they had arranged for a new group to take its place. After learning the magical origin of the mirrors the group used to communicate, they chose to carry on the name of the mirrors' creator. They call themselves The Witches Of Alderath.",people:[{name:"Ayari Alomis",pronounciation:"ai-yah-ree ah-loh-mih-ss",nickname:"Lady Vengeance",thumbnail:n(2858),image:n(6976),signature:"",age:"26",gift:"Lightbaron",description:"Willing to go wherever vengeance takes her, Ayari is one of the deadliest bounty hunters in all of Kavaya. After nearly blinding herself, a young Ayari is ushered into a new life by a stranger. Once she reached adulthood, Ayari quickly became known as Lady Vengeance. They never see her coming, but she is the last thing they hear."},{name:"Ezanna",pronounciation:"ee-zah-nah",nickname:"The Ghost King",thumbnail:n(7049),image:n(3800),signature:n(3800),age:"499",gift:"Reaper",description:"Ezanna is arguably the most powerful witch in Kavaya. This is in part due to his Gift of Necromancy, which has manifested in strange ways. Their abilities include agelessness, communication with the deceased, and the power to raise the dead. Their Gift also allows them to wield Chaos Magic without the deadly repercussions. On the late king's deathbed, Ezanna was chosen to rule Kavaya, a position they begrudgingly uphold."},{name:"Grey Parish",pronounciation:"",nickname:"The Parish Girl",thumbnail:n(9457),image:n(8581),signature:n(8581),age:"19",gift:"Naturalist (Tempest)",description:"A scrappy young woman from Seamery, Grey isn't one to shy away from a fight. Despite being only 19, she has mastered the art of combining her tempestuous powers and her hand-to-hand combat skills. This gives her the upper hand in her frequent bar fights and has earned her a reputation of not being one to fool with."},{name:"Morgan Forrest",pronounciation:"",nickname:"Morgan of the Marsh",thumbnail:n(2784),image:n(3429),signature:n(3429),age:"32",gift:"Force",description:"On the banks of the great swamp in the south, there dwells a man named Morgan. When Ezanna came to visit lonely Morgan, he brought with him the troubles of Gillamoor. Now, Morgan’s life consists of traveling to Kavaya and serving the realm, all while still managing to find the time to keep his promise to his fairy friend, Gudglalo."},{name:"Rowan Blake",pronounciation:"",nickname:"The Northern Flame",thumbnail:n(7057),image:n(875),signature:n(875),age:"28",gift:"Naturalist (Blaze)",description:"In Igasho, justice comes in the form of an elite group called the Hala. The leader of this group is Rowan, a young woman driven by a fierce desire to defend the defenseless and enforce the law of the land like her grandfather before her. Throughout Igasho, she is known as The Northern Flame."}]},oob:{name:"Order Of Braylon",description:"Named by the first king of Kavaya, this group of witches played the role of councilors to the kings through the years. Even though Braylon the Bold is long dead, the Order Of Braylon serves whatever king or queen sits on the throne.",people:[{name:"Amelia Crow",pronounciation:"",nickname:"",thumbnail:n(6554),image:n(8377),signature:n(8377),age:"45",gift:"Idol",description:"In the city of Draven, among the six most powerful families are the Crows. The youngest Crow, Amelia, is considered the most powerful Effigy in all of Kavaya. Growing up on Sutana among the feuds between the Effigies and the Occupants, Amelia developed a strong desire for peace. While traveling on the mainland of Kavaya, she met a young King Atticus. He was so taken by her, he insisted she serve on the Order of Braylon."},{name:"Aurelia Vexx",pronounciation:"awh-reh-lee-ah veh=x",nickname:"The Twins",thumbnail:n(1398),image:n(4788),signature:n(4788),age:"29",gift:"Occupant",description:"The prodigies of the Pike family, Aurelia and Dashiel, are without a doubt the most cruel Occupants of their generation. Being twins, they can combine their Gifts to reach heights no ordinary witch can accomplish. They enjoy their roles in the Order of Braylon where they keep up the appearance of diligent spies, all while harboring a secret disregard of human life that allows them to indulge in their sociopathic tendencies."},{name:"Dashiel Pike",pronounciation:"dah-shee-el grih-m",nickname:"",thumbnail:n(8690),image:n(4788),signature:n(4788),age:"29",gift:"Occupant",description:"The prodigies of the Pike family, Aurelia and Dashiel, are without a doubt the most cruel Occupants of their generation. Being twins, they can combine their Gifts to reach heights no ordinary witch can accomplish. They enjoy their roles in the Order of Braylon where they keep up the appearance of diligent spies, all while harboring a secret disregard of human life that allows them to indulge in their sociopathic tendencies."},{name:"Deron Fang",pronounciation:"dehr-ahn fang",nickname:"",thumbnail:n(5549),image:n(779),signature:n(779),age:"54",gift:"Gene",description:"The Fang family lineage is full of powerful witches known as Genes. This family is renowned for their mastery of shapeshifting into animals. Deron Fang is no exception. Favoring the form of the mighty bear, he is notorious for quickly settling fights with claw and fang. A gruff man, who prefers the company of animals, he is often found drinking alone in the mountains."},{name:"Emily Crypt",pronounciation:"",nickname:"",thumbnail:n(4049),image:n(2844),signature:n(2844),age:"59",gift:"Naturalist (Glacier)",description:"Growing up in Heefork was hard for Emily. She knew she was different and in this case, different meant powerful. Emily wanted to comply with her father's wishes and become a farmer’s wife, but deep down she knew she was meant to do something more. When she realized she had experienced all that Heefork had to offer, she moved to Gillamoor. There, Emily found happiness and a romantic partner named Jesse."},{name:"Heerium Reaves",pronounciation:"",nickname:"",thumbnail:n(9974),image:n(3695),signature:n(3695),age:"87",gift:"Woundwelder",description:"Heerium has the rare ability to heal himself, even of near-fatal wounds. This has given him a considerably long life despite having lived in the city of bounty hunters for many years. Already the oldest member of the Order of Braylon, Heerium is set to continue serving as long as he is asked. In his role, he provides insight into the history of Kavaya and heals the more offensively-gifted members of the Order. "},{name:"Jax Gallotree",pronounciation:"jax ga-low-tree",nickname:"",thumbnail:n(4675),image:n(4050),signature:n(4050),age:"36",gift:"Lightbaron",description:"As a child, Jax had anger issues. As he grew, he learned to tame the darkness within himself. This effort led to him being one of the most powerful Lightbarons in Kavaya. With his intelligence, charm, and a deep understanding of his gift, Jax is perfectly tailored for diplomacy and can easily fall back on his power if needed."},{name:"Jorrah Trevils",pronounciation:"joh-rah treh-vihl-ss",nickname:"",thumbnail:n(5891),image:n(5689),signature:n(5689),age:"30",gift:"Artisan",description:"The Trevils family was mediocre at best. That was until Jorrrah was born. Being an only child was hard for him. His loneliness awakened his power of animation. Once he discovered his rare gift, he was never lonely again. Now on the Order of Braylon, he uses his new friends to send messages all over Kavaya."},{name:"Josephine Vaughn",pronounciation:"",nickname:"",thumbnail:n(1516),image:n(6547),signature:n(6547),age:"34",gift:"Compulsor",description:"A woman who does what she wants when she wants, Josephine understands that power is not given, it’s taken. The Vaughns are among one of the oldest and wealthiest families in Kavaya. As an only child, she was given everything she ever asked for and it was never enough. As an adult, she placed herself on the Order of Braylon."},{name:"Killian Barclay",pronounciation:"kih-lee-ahn bahr-clae",nickname:"",thumbnail:n(6794),image:n(9490),signature:n(9490),age:"27",gift:"Leaper",description:"Killian is a Leaper of incredible talent. As a teenager experimenting with her powers, she would frequently teleport to a random cave in the Salazar Mountains. She decided to use this cave as a sanctuary and to this day, fills it with treasures from all over Kavaya. She is now one of the youngest members of The Order of Braylon."},{name:"Silas Langston",pronounciation:"sai-lah-ss lang-stihn",nickname:"",thumbnail:n(3930),image:n(1542),signature:n(1542),age:"48",gift:"Naturalist (Tempest)",description:"Coming from a family of many gifts, Silas is the first Tempest in several generations and thought to be the most powerful witch amongst his siblings. With his mastery of lightning, air, and water, Silas is recognized for his might and unwavering fortitude in fights. When The Order of Braylon needs something done, Silas is always the perfect person for the job."},{name:"Wayde Greer",pronounciation:"waed gree-er",nickname:"",thumbnail:n(6273),image:n(8124),signature:n(8124),age:"58",gift:"Force",description:"Wayde is the longest serving member on the Order of Braylon, a fact he is always happy to remind his colleagues of. He is a talented Force and oversees education in Gillamoor. Willing to go above and beyond for whatever the Order needs, Wayde is happy to oblige, especially if it directly benefits himself."}]},hog:{name:"House Of Grimm",description:"Based in Valkyrie, The House Of Grimm is a collective of elite bounty hunters. Each member brings a uniqueness and their own agenda to the table. These fiercesome individuals all have one thing in common: for the right price, your wish is their command.",people:[{name:"Alexandria Knox",pronounciation:"nahx",nickname:"",thumbnail:n(1380),image:n(6938),signature:n(6938),age:"36",gift:"None",description:"After being left for dead in Igasho, Alexandria was discovered by a man named Taizo. The stranger took him under his wing and trained him as a thank you for trying to save an Arvum wolf. When his training was complete, he declined the offer to join the Hala and headed east. It was in Valkyrie that he found his place in the world, fighting for scorned lovers. "},{name:"Atlas Houndstooth",pronounciation:"",nickname:"",thumbnail:n(1452),image:n(8169),signature:n(8169),age:"34",gift:"Vigor",description:"When her parents announced their intentions to move to Seamery, a young Atlas chose to remain in Basanti to help her grandparents with the farm. When her grandparents passed, she sold the farm and moved to Valkyrie where she quickly learned how good she was at killing people. Shortly after, she joined the House of Grimm."},{name:"Kimi Tsuha",pronounciation:"kih-mee t-soo-hah",nickname:"",thumbnail:n(6171),image:n(1157),signature:n(1157),age:"73",gift:"Greensmith",description:"After poisoning her third husband, she looked at his corpse and vowed never to marry again. It was then that Kimi decided to start a new life. She said goodbye and good riddance to her now adult kids, and left Gillamoor. She wandered east and found Valkyrie. Once there, she honed her skills as a Greensmith. Using her poisonous plants to kill people, she is now a feared bounty hunter."},{name:"Leelan Shadowmend",pronounciation:"",nickname:"",thumbnail:n(5616),image:n(9013),signature:n(9013),age:"54",gift:"Leaper",description:"At 28, Leelan started the House of Grim. His first student was a greensmith, Kimi Tsuha. In time, others joined them and today they’ve become the most highly regarded group of bounty hunters in Valkyrie."},{name:"Irvin Fink",pronounciation:"",nickname:"",thumbnail:n(3561),image:n(563),signature:n(563),age:"21",gift:"Leaper",description:"Orphaned at a very young age, Irvin had to learn how to fend for himself. Having no money he had to take things into his own hands, literally. When he discovered his Gift at the age of eight, he never got caught stealing again. With his ability to open small portals, he soon learned the value of his power."},{name:"Isaiah Joon",pronounciation:"ai-zei-ah joo-n",nickname:"The Red Devil",thumbnail:n(6852),image:n(3945),signature:n(3945),age:"57",gift:"Idol",description:"When Isaiah turned 30, she became obsessed with aging. She found that blood made her skin smooth and tight. After her mortician parents denied her the blood of their clients, her desires drove her from Basanti. She settled in Valkyrie where it’s not only okay to kill people, but she gets paid to do it. "}]},misc:{name:"Other Characters",description:"These are prominent characters in the story but don't really have a group affiliation.",people:[{name:"Alder Greenwinkle",pronounciation:"The Greenwitch, The Greenfather",nickname:"",thumbnail:n(1189),image:n(3514),signature:n(3514),age:"38",gift:"Greensmith",description:"When Alder was a child, his parents discovered his ability to control plants and forced him into their crop fields daily. This was very taxing on young Alder. At 13, he fled south into Vluslury where he grew himself a tree house. He now spends his days walking through the Wildwoods of Vlusvury, enriching the area with his magic."},{name:"Aurie Mason",pronounciation:"awh-ree mae-son",nickname:"",thumbnail:n(4660),image:n(506),signature:n(506),age:"28",gift:"Vigor",description:"The Mason family is well known for their variety of gifts manifesting in powerful ways. The youngest Mason, Aurie, is no exception. A mighty Vigor, she has the might of 20 people. Of her many family members, she feels closest to her younger cousin Grey, despite the large age difference."},{name:"Elias Jones",pronounciation:"",nickname:"",thumbnail:n(787),image:n(4811),signature:n(4811),age:"died at 18",gift:"Force",description:"Jebra and Joshua Jones were so happy when they first found out they were pregnant. Their happiness was cut short as soon as baby Elias was born. Elias was a sickly baby and even more ill as a child. At 18, he knew his life was coming to an end, he could feel it. No one in Mallory knew what was wrong with Elias, though they kept giving him local remedies in the hopes of a cure."},{name:"Kalissa Oduran",pronounciation:"kah-lih-sah oh-doo-rahn",nickname:"",thumbnail:n(9687),image:n(5824),signature:n(5824),age:"35",gift:"Naturalist (Spark)",description:"Known for her terror and lack of empathy, Kalissa is the fearsome leader of a group of bounty hunters. Growing up in Seamery was hard for Kalissa. After accidentally killing her brother, her parents banished her when she was only 12. As she grew, her thirst for power grew. Today she commands a new family, The Imperium."},{name:"Mei Jacinda",pronounciation:"",nickname:"",thumbnail:n(8083),image:n(6191),signature:n(6191),age:"22",gift:"Mindtether",description:"Raised in the treetops of the Black Forest, Mei was constantly surrounded by an assortment of bugs. With her favorite bug in mind, she created a giant scythe that resembles the mantis’ claw. Weapon in hand, she defends her homeland from a variety of threats, including hunters, poachers, and those who would defile the forest. "},{name:"Oliver Manami",pronounciation:"awh-lih-vehr mah-nah-mee",nickname:"",thumbnail:n(4777),image:n(1916),signature:n(1916),age:"32",gift:"Interogit",description:"In addition to being able to separate fact from fiction, Oliver can also cause physical pain while touching someone who is lying, a rare manifestation of his Gift. After spending a year in Igasho, Oliver fell in love with the traditions and beliefs of the North. He eventually joined the Hala to help pursue justice. "},{name:"Roscoe De Vera",pronounciation:"",nickname:"",thumbnail:n(2419),image:n(2995),signature:n(2995),age:"19",gift:"Leaper",description:"Growing up, Roscoe was always bested by Grey. As a young child he teased her. As a preteen they were rivals. As a young adult he realized his true feelings: he was in love with her. "},{name:"Ruby Thorne",pronounciation:"",nickname:"",thumbnail:n(9911),image:n(3530),signature:n(3530),age:"18",gift:"Woundwelder",description:"At 16, Ruby’s housemother came down with a terrible flu. Hand in hand, Ruby wanted nothing more than for her to get well. Within minutes, she made a full recovery. Two years later, she can not only heal sicknesses, but flesh wounds as well."},{name:"Taizo Shiren",pronounciation:"tai-zoh shee-rehn",nickname:"",thumbnail:n(6610),image:n(1527),signature:n(1527),age:"58",gift:"Visionary",description:"Life in Igasho isn’t as simple as Southerners believe. Gifted with vision, Taizo was an asset for his village. Word of his contribution to the East village spread throughout all of Igasho and eventually reached the ears of the leader of the Hala, Afi Murai. Despite his young age, Taizo was swiftly recruited into the group where to this day he continues to uphold the values of Igasho. "},{name:"Tatula Bells",pronounciation:"tah=too=lah beh-l-ss",nickname:"",thumbnail:n(7526),image:n(2224),signature:n(2224),age:"died at 36",gift:"Timepeeker",description:"Tatula was a gifted Seer. She met Ezanna when she was alive and found herself drawn to them in death. Wishing to fulfill whatever leftover business she has on Kavaya, Tatula is able to accurately recall any vision she’s ever had and willingly shares this info with Ezanna. "}]}};var m=d,p={name:"AboutView",components:{CharactersSection:u,HeroSection:g.Z},data(){return{characterData:m,overlayData:{}}},methods:{updateOverlay:function(e){this.overlayData=e},closeOverlay:function(){document.body.classList.remove("overlay--open")}}},f=p,y=(0,l.Z)(f,t,i,!1,null,"2a43a856",null),w=y.exports},9465:function(e,a,n){n.r(a),n.d(a,{default:function(){return l}});var t=function(){var e=this;e._self._c;return e._m(0)},i=[function(){var e=this,a=e._self._c;return a("main",{staticClass:"home"},[a("div",{staticClass:"construction"},[a("div",{staticClass:"construction__inner"},[a("h1",[e._v("THIS PAGE IS UNDER CONSTRUCTION")]),a("h2",[e._v("Please check back at a later time. Thank you!")])])])])}],o={name:"ContactView",components:{},data(){return{}}},r=o,s=n(1001),h=(0,s.Z)(r,t,i,!1,null,"35805d97",null),l=h.exports},2283:function(e,a,n){n.r(a),n.d(a,{default:function(){return l}});var t=function(){var e=this;e._self._c;return e._m(0)},i=[function(){var e=this,a=e._self._c;return a("main",{staticClass:"home"},[a("div",{staticClass:"construction"},[a("div",{staticClass:"construction__inner"},[a("h1",[e._v("THIS PAGE IS UNDER CONSTRUCTION")]),a("h2",[e._v("Please check back at a later time. Thank you!")])])])])}],o={name:"StoryView",components:{},data(){return{}}},r=o,s=n(1001),h=(0,s.Z)(r,t,i,!1,null,"429e9781",null),l=h.exports},143:function(e,a,n){n.r(a),n.d(a,{default:function(){return l}});var t=function(){var e=this;e._self._c;return e._m(0)},i=[function(){var e=this,a=e._self._c;return a("main",{staticClass:"home"},[a("div",{staticClass:"construction"},[a("div",{staticClass:"construction__inner"},[a("h1",[e._v("THIS PAGE IS UNDER CONSTRUCTION")]),a("h2",[e._v("Please check back at a later time. Thank you!")])])])])}],o={name:"WorldView",components:{},data(){return{}}},r=o,s=n(1001),h=(0,s.Z)(r,t,i,!1,null,"532e2b0a",null),l=h.exports},1150:function(e,a,n){e.exports=n.p+"img/dustin.93bfd190.jpg"},4570:function(e,a,n){e.exports=n.p+"img/james.1803f83e.jpg"},7754:function(e,a,n){e.exports=n.p+"img/kc.cddea652.jpg"},3514:function(e,a,n){e.exports=n.p+"img/alder.e0a2b0d6.png"},6938:function(e,a,n){e.exports=n.p+"img/alexandria.75d9e3aa.png"},8377:function(e,a,n){e.exports=n.p+"img/amelia.683d42f8.png"},8169:function(e,a,n){e.exports=n.p+"img/atlas.9c9ca361.png"},506:function(e,a,n){e.exports=n.p+"img/aurie.6b7fa66b.png"},6976:function(e,a,n){e.exports=n.p+"img/ayari.dfa9f81d.png"},3800:function(e,a,n){e.exports=n.p+"img/azreal.453f54c9.png"},4788:function(e,a,n){e.exports=n.p+"img/dashiel-aurelia.5f9caf97.png"},779:function(e,a,n){e.exports=n.p+"img/deron.98846c8d.png"},4811:function(e,a,n){e.exports=n.p+"img/elias.b967cb39.png"},2844:function(e,a,n){e.exports=n.p+"img/emily.7fb886ff.png"},8581:function(e,a,n){e.exports=n.p+"img/grey.f07b3631.png"},3695:function(e,a,n){e.exports=n.p+"img/heerium.19140263.png"},563:function(e,a,n){e.exports=n.p+"img/irvin.0f5e2763.png"},3945:function(e,a,n){e.exports=n.p+"img/isaiah.3e2de663.png"},4050:function(e,a,n){e.exports=n.p+"img/jax.3f9f9616.png"},5689:function(e,a,n){e.exports=n.p+"img/jorrah.9d1abae3.png"},6547:function(e,a,n){e.exports=n.p+"img/josephine.848bccce.png"},5824:function(e,a,n){e.exports=n.p+"img/kalissa.2e57a2f0.png"},9490:function(e,a,n){e.exports=n.p+"img/killian.2b07c6a7.png"},1157:function(e,a,n){e.exports=n.p+"img/kimi.52327c43.png"},9013:function(e,a,n){e.exports=n.p+"img/leelan.769eded0.png"},6191:function(e,a,n){e.exports=n.p+"img/mei.a06117dc.png"},3429:function(e,a,n){e.exports=n.p+"img/morgan.74852780.png"},1916:function(e,a,n){e.exports=n.p+"img/oliver.33bcdff4.png"},2995:function(e,a,n){e.exports=n.p+"img/roscoe.6c102f77.png"},875:function(e,a,n){e.exports=n.p+"img/rowan.02b56a37.png"},3530:function(e,a,n){e.exports=n.p+"img/ruby.96a30378.png"},1542:function(e,a,n){e.exports=n.p+"img/silas.fb3c7cc5.png"},1527:function(e,a,n){e.exports=n.p+"img/taizo.d7a3f96b.png"},2224:function(e,a,n){e.exports=n.p+"img/tatula.a651d8bb.png"},8124:function(e,a,n){e.exports=n.p+"img/wayde.bb5349d6.png"},1189:function(e,a,n){e.exports=n.p+"img/alderO.109c7891.png"},1380:function(e,a,n){e.exports=n.p+"img/alexandriaO.16a669ba.png"},6554:function(e,a,n){e.exports=n.p+"img/ameliaO.e8627aa5.png"},1452:function(e,a,n){e.exports=n.p+"img/atlasO.b57ab220.png"},1398:function(e,a,n){e.exports=n.p+"img/aureliaO.23e33e7a.png"},4660:function(e,a,n){e.exports=n.p+"img/aurieO.1a33ef7d.png"},2858:function(e,a,n){e.exports=n.p+"img/ayariO.a8721291.png"},7049:function(e,a,n){e.exports=n.p+"img/azrealO.7f411e53.png"},8690:function(e,a,n){e.exports=n.p+"img/dashielO.79811f84.png"},5549:function(e,a,n){e.exports=n.p+"img/deronO.bae19a81.png"},787:function(e,a,n){e.exports=n.p+"img/eliasO.a0e016da.png"},4049:function(e,a,n){e.exports=n.p+"img/emilyO.462410e7.png"},9457:function(e,a,n){e.exports=n.p+"img/greyO.7ace3bac.png"},9974:function(e,a,n){e.exports=n.p+"img/heeriumO.2fa9f084.png"},3561:function(e,a,n){e.exports=n.p+"img/irvinO.6ae7263a.png"},6852:function(e,a,n){e.exports=n.p+"img/isaiahO.ff0b6ef1.png"},4675:function(e,a,n){e.exports=n.p+"img/jaxO.541f8490.png"},5891:function(e,a,n){e.exports=n.p+"img/jorrahO.f952beb0.png"},1516:function(e,a,n){e.exports=n.p+"img/josephineO.2d22a806.png"},9687:function(e,a,n){e.exports=n.p+"img/kalissaO.01482a17.png"},6794:function(e,a,n){e.exports=n.p+"img/killianO.61caca8a.png"},6171:function(e,a,n){e.exports=n.p+"img/kimiO.dffeee96.png"},5616:function(e,a,n){e.exports=n.p+"img/leelanO.76a28de4.png"},8083:function(e,a,n){e.exports=n.p+"img/meiO.fc0e545d.png"},2784:function(e,a,n){e.exports=n.p+"img/morganO.d4b68816.png"},4777:function(e,a,n){e.exports=n.p+"img/oliverO.a6ca4aff.png"},2419:function(e,a,n){e.exports=n.p+"img/roscoeO.676504fe.png"},7057:function(e,a,n){e.exports=n.p+"img/rowanO.a95cb144.png"},9911:function(e,a,n){e.exports=n.p+"img/rubyO.1a8dfabd.png"},3930:function(e,a,n){e.exports=n.p+"img/silasO.ded13ff6.png"},6610:function(e,a,n){e.exports=n.p+"img/taizoO.f856e93d.png"},7526:function(e,a,n){e.exports=n.p+"img/tatulaO.43471ad8.png"},6273:function(e,a,n){e.exports=n.p+"img/waydeO.cc0fbaa2.png"}}]);
//# sourceMappingURL=about.1627089f.js.map