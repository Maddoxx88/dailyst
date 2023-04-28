import { useState } from "react";
import PopularCard from "./PopularCard";

const Popular = () => {
  const [articleList, setArticleList] = useState([
    {
      "title": "New Counter-Strike 2 Detail You Might Have Missed Reminds Us Valve Still Hasn't Made Half-Life 3",
      "author": "Zack Zwiezen",
      "published_date": "2023-04-27 19:10:00",
      "published_date_precision": "full",
      "link": "https://kotaku.com/counter-strike-2-cs2-easter-egg-half-life-3-gordon-f-1850383929",
      "clean_url": "kotaku.com",
      "summary": "As a human being on the internet reading a video game website, I probably don't have to explain to you the long wait for \nHalf-Life 3\n, the shooter sequel Valve continues to not make, and all the memes it's spawned. But it seems that, even if it won't make the long-awaited threequel, Valve doesn't want you all to forget about \nHalf-Life\n and Gordon Freeman. That might explain why two handguns in the new \nCounter-Strike 2\n contain a small, hard-to-spot reference to the silent hero of the \nHalf-Life\n series.",
      "rights": "kotaku.com",
      "rank": 1313,
      "topic": "gaming",
      "country": "US",
      "language": "en",
      "authors": "Zack Zwiezen",
      "media": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/08dce60bd05bbde2328ffec146fcf565.jpg",
      "is_opinion": false,
      "twitter_account": "kotaku",
      "_score": 18.152802,
      "_id": "f4b58da4b7b9fba674c605299ebb36fc"
    },
    {
      "title": "Ingenious Counter-Strike players are exploiting Steam's new notes function to score noscopes",
      "author": "Joshua Wolens",
      "published_date": "2023-04-28 14:33:09",
      "published_date_precision": "full",
      "link": "https://www.pcgamer.com/ingenious-counter-strike-players-are-exploiting-steams-new-notes-function-to-score-noscopes/",
      "clean_url": "pcgamer.com",
      "summary": "(Image credit: reddeaded1 on Reddit / Valve)\n\n\n\n\n\n\nValve put out a \nbeta client update for Steam\n (opens in new tab)\n yesterday that aims to significantly expand the usefulness of its overlay functionality. Users running the update are now just a Shift-Tab away from a redesigned layout, a refreshed screenshot manager, and, crucially, a new note-taking function, which lets you pin notes to the screen even while the overlay is minimised, and adjust their opacity so that you can still see the game behind them.",
      "rights": "pcgamer.com",
      "rank": 1829,
      "topic": "gaming",
      "country": "US",
      "language": "en",
      "authors": "Componentcontainer,Document.Queryselector,Externalsscriptloaded.Then,Joshua Wolens,News Writer,Var Componentcontainer,Window.Slicecomponents",
      "media": "https://cdn.mos.cms.futurecdn.net/LcrZhRjTqLuyU8QZMLALQm-1200-80.jpg",
      "is_opinion": false,
      "twitter_account": "@pcgamer",
      "_score": 14.785997,
      "_id": "3bc8ac90bb84722336b28881aacae4a5"
    },
    {
      "title": "Apex Legends Announces Veiled Collection Event",
      "author": "Sanchay Saksena",
      "published_date": "2023-04-24 11:53:20",
      "published_date_precision": "full",
      "link": "https://in.ign.com/apex-legends/182887/news/apex-legends-announces-veiled-collection-event",
      "clean_url": "ign.com",
      "summary": "is a battle royale title that has become insanely popular in the gaming community over the past few years. The developers also released a mobile port for the game, which was growing tremendously until it was scrapped as EA felt it won't be able to maintain the high-quality content and experience that players are used to with .\n \nAlso read: \n Devs Want it to 'Last 20 Years Like Counter-Strike'\n \n\n\nWe have made the decision to sunset Mobile.\n\n\nWe're sure you have a lot of questions. For more information on where things are at currently, including an FAQ, please read the blog below.",
      "rights": "ign.com",
      "rank": 649,
      "topic": "gaming",
      "country": "US",
      "language": "en",
      "authors": "Sanchay Saksena",
      "media": "https://sm.ign.com/t/ign_in/screenshot/default/0-2023-01-18t144527474_ncdd.1200.png",
      "is_opinion": false,
      "twitter_account": "@IGN_IN",
      "_score": 12.634144,
      "_id": "ef22c57e07287e4c32b210621434f702"
    },
    {
      "title": "Valve Reportedly Earns Over $11 Million for New In-Game Items",
      "author": "Moulik Mathur",
      "published_date": "2023-04-28 12:46:40",
      "published_date_precision": "full",
      "link": "https://in.ign.com/counter-strike-global-offensive/183207/news/valve-reportedly-earns-over-11-million-for-new-in-game-items",
      "clean_url": "ign.com",
      "summary": "CS:GO players have already spent millions within 24 hours on the game's latest in-game package. Valve has recently introduced a new package in the game called Anubis Cases.\n \nIt's not uncommon for players to spend money on in-game items or packages, but the numbers here are fascinating.\n \nAnubis Collection Package stands apart from most CS:GO cases as they generally need a key to be opened. That's not the case with the Anubis Collection Package.\n \nValve sells keys for around $2.49 these days, and they still remain popular due to the rarity of items in certain cases.",
      "rights": "ign.com",
      "rank": 649,
      "topic": "gaming",
      "country": "US",
      "language": "en",
      "authors": "Moulik Mathur",
      "media": "https://sm.ign.com/t/ign_in/screenshot/default/ss-2b9e362287b509bb3864fa7bad654fe1fda0f7ed_s32w.1200.jpg",
      "is_opinion": false,
      "twitter_account": "@IGN_IN",
      "_score": 12.622222,
      "_id": "c883794b49dace61455b7abf1f0c5626"
    },
    {
      "title": "Apex Legends Season 17: Arsenal Announced Along with Trailer",
      "author": "Sanchay Saksena",
      "published_date": "2023-04-25 10:16:03",
      "published_date_precision": "full",
      "link": "https://in.ign.com/apex-legends/182967/news/apex-legends-season-17-arsenal-announced-along-with-trailer",
      "clean_url": "ign.com",
      "summary": "is a battle royale title that has become insanely popular in the gaming community over the past few years. It continues to be among the top title in the genre thanks to all the new content it keeps providing to its playerbase. The developers recently announced the \nVeiled Collection event,\n which comes with a brand-new LTM Deathmatch mode and fresh cosmetics.\n \nAlso read: \n Devs Want it to 'Last 20 Years Like Counter-Strike'\n \nOn the topic of providing fresh content to the players, has now revealed details about its upcoming seasonal update.",
      "rights": "ign.com",
      "rank": 649,
      "topic": "gaming",
      "country": "US",
      "language": "en",
      "authors": "Sanchay Saksena",
      "media": "https://sm.ign.com/t/ign_in/screenshot/default/mg-49_a14n.1200.png",
      "is_opinion": false,
      "twitter_account": "@IGN_IN",
      "_score": 11.8811035,
      "_id": "2a3d72d832e5681daed62930cb0857b0"
    }
  ]);

  // let config = {
  //   method: "get",
  //   maxBodyLength: Infinity,
  //   url: 'https://free-news.p.rapidapi.com/v1/search?q="Counter-Strike"&lang=en&topic=gaming&page_size=5&page=1',
  //   headers: {
  //     "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RapidAPI_HOST,
  //     "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RapidAPI_KEY,
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
