import { useState } from "react";
import PopularCard from "./PopularCard";

const Popular = () => {
  const [articleList, setArticleList] = useState([
    {
        "title": "Counter-Strike is getting a virtual esports stadium",
        "author": "Ed Nightingale",
        "published_date": "2023-04-12 13:00:00",
        "published_date_precision": "full",
        "link": "https://www.eurogamer.net/counter-strike-is-getting-a-virtual-esports-stadium",
        "clean_url": "eurogamer.net",
        "summary": "Virtex is launching the first ever virtual esports stadium to allow viewers to watch matches from inside the arena - and the game's map. \n\n\n The software developer has partnered with spectating and analysis platform Skybox to create the Virtex Stadium, which will launch with Counter-Strike (both CS:GO and Counter-Strike 2 will be compatible). \n\n\n The virtual stadium is currently available in closed beta via desktop and compatible VR headsets. \n\n\n\n\nA New Era of Counter-Strike Esports | Virtex Stadium official trailer\n\n\n \n Viewers will get a fully 3D experience: not only spectating from seats around a virtual stadium, but entering the map itself to view matches from up close.",
        "rights": "eurogamer.net",
        "rank": 2084,
        "topic": "gaming",
        "country": "GB",
        "language": "en",
        "authors": "Ed Nightingale,Eurogamer.net",
        "media": "https://assetsio.reedpopcdn.com/Copy-of-Virtex-Stadium.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
        "is_opinion": false,
        "twitter_account": "@eurogamer",
        "_score": 19.862156,
        "_id": "d56df6028a6da206a83af8f13978db92"
    },
    {
        "title": "Counter-Strike Player Kills Five Guys With One Bullet",
        "author": "Luke Plunkett",
        "published_date": "2023-04-11 04:25:00",
        "published_date_precision": "full",
        "link": "https://kotaku.com/csgo-counter-strike-ace-five-kills-one-shot-valve-pc-1850322020",
        "clean_url": "kotaku.com",
        "summary": "A few days back a \nCounter-Strike: Global Offensive \nplayer by the name of sp1cay was playing with some friends when, after a quick sprint and toss of a grenade, they whipped out their AWP sniper rifle and fired off a single shot.\nThat shot carried right on through the initial target—a handy shot by itself—and straight into the dude behind them. Then the dude behind \nthem\n. And so on until \nfive \nbodies were on the ground.\nThere's a term in \nCounter-Strike\n called ‘Ace', and like aerial combat in the real world it's used when a single player is able to eliminate five opponents (which in \nCounter-Strike\n also happens to be an entire team).",
        "rights": "kotaku.com",
        "rank": 1313,
        "topic": "gaming",
        "country": "US",
        "language": "en",
        "authors": "Luke Plunkett",
        "media": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ae62c36465f70f8be45fce97f7934e8f.jpg",
        "is_opinion": false,
        "twitter_account": "kotaku",
        "_score": 19.336878,
        "_id": "99a457da700d9211882a7803a7f895e1"
    },
    {
        "title": "Steam Crackdown Hits CS:GO Player With $500K In Skins",
        "author": "Ethan Gach",
        "published_date": "2023-04-11 17:31:37",
        "published_date_precision": "full",
        "link": "https://kotaku.com/counter-strike-global-offensive-skins-trade-steam-ban-1850324075",
        "clean_url": "kotaku.com",
        "summary": "Steam is \noften a free-for-all\n when it comes to game curation and content moderation, but the Valve-owned storefront appears to be on the march against spam commenters, especially those pestering other users about \nCounter-Strike: Global Offensive\n skin trades\n. A number of players have recently said they've recently been locked out of their accounts at one time or another for commenting on trades, including one user with over $500,000 worth of \nCS:GO\n skins.\n'This popped up a few minutes after commenting on a guy's profile something like ‘I bought your m9 on gamerpay, your trade link is broken, please fix,'' Gergely 'GeRy' Szabo \ntweeted on April 10\n (via \nDualShockers\n).",
        "rights": "kotaku.com",
        "rank": 1313,
        "topic": "gaming",
        "country": "US",
        "language": "en",
        "authors": "Ethan Gach",
        "media": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c6fda35f0e2cbd4f0bf2b7288409b90f.jpg",
        "is_opinion": false,
        "twitter_account": "kotaku",
        "_score": 14.617231,
        "_id": "a2961c80d1450dbb24b2cc68553297b7"
    },
    {
        "title": "Skyesports Unveils Masters LAN Tournament for CS:GO With Rs. 2 Crore Prize Pool",
        "author": "Rupesh Nair",
        "published_date": "2023-04-14 06:30:28",
        "published_date_precision": "full",
        "link": "https://in.ign.com/esports/182341/news/skyesports-unveils-masters-lan-tournament-for-csgo-with-rs-2-crore-prize-pool",
        "clean_url": "ign.com",
        "summary": "Though there have been otherJet Skyesports, South Asia's premier Esports organizer has announced its next major initiative involving franchised teams in .\n \nThe new tournament dubbed the \"Skyesports Masters\" will see eight franchised teams from compete in Counter-Strike: Global Offensive to earn the biggest piece from the event's Rs. 2 crore prize pool.\n \nThe upcoming LAN event will take place in Mumbai with a live audience, who will be supporting their favorite teams and players from the world of CS:GO.",
        "rights": "ign.com",
        "rank": 649,
        "topic": "gaming",
        "country": "US",
        "language": "en",
        "authors": "Rupesh Nair",
        "media": "https://sm.ign.com/t/ign_in/screenshot/default/16x9-pr-sky-masters_9au5.1200.jpg",
        "is_opinion": false,
        "twitter_account": "@IGN_IN",
        "_score": 11.818133,
        "_id": "d33119e84e2fb14878cf112a4636d99d"
    },
    {
        "title": "Switch Shooter's Shutdown Has Xbox, PS5 Fans Happy They May Face Fewer Kids",
        "author": "Zack Zwiezen",
        "published_date": "2023-04-11 18:25:00",
        "published_date_precision": "full",
        "link": "https://kotaku.com/rogue-company-switch-version-shut-down-date-ps5-xbox-1850324180",
        "clean_url": "kotaku.com",
        "summary": "Third-person team-based online free-to-play crossplay shooter\n Rogue Company\n is ending support for its \nSwitch\n version on June 20. Developer Hi-Rez Studios cited 'significant technical and process challenges' working on the Switch version in its announcement of the upcoming shutdown. Meanwhile—and I am just reporting the facts here, folks—many \nRogue Company\n players celebrated the end of Switch players ruining their matches. \nLaunched in 2020 across Xbox, PlayStation, Switch, and PC, \nRogue Company\n is a tactical character shooter seemingly inspired by games like \nOverwatch\n,\n Rainbow Six Siege\n, and \nCounter-Strike\n.",
        "rights": "kotaku.com",
        "rank": 1313,
        "topic": "gaming",
        "country": "US",
        "language": "en",
        "authors": "Zack Zwiezen",
        "media": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/3109935ab3a45305a5f03722b5b7bfd8.jpg",
        "is_opinion": false,
        "twitter_account": "kotaku",
        "_score": 9.48929,
        "_id": "2a2e93bbe56b290f2c03ba61abad9d65"
    }
]);

  // let config = {
  //   method: "get",
  //   maxBodyLength: Infinity,
  //   url: 'https://free-news.p.rapidapi.com/v1/search?q="Counter-Strike"&lang=en&topic=gaming&page_size=5&page=1',
  //   headers: {
  //     "X-RapidAPI-Host": "",
  //     "X-RapidAPI-Key": "",
  //   },
  // };
  //   axios.request(config)
  //   .then((response) => {
  //     setArticleList(response.data.articles);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  return (
    <div className="text-black mx-8 my-4">
      <div className="grid grid-cols-4 gap-12">
        {articleList.map((artcl, idx) => {
          console.log();
          return <PopularCard key={idx} {...artcl} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
