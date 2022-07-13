import YouTubeChannelResult from "@/components/YouTubeChannelResult";
import {useGetYouTubeVideos} from "../hooks/useGetYouTubeVideos";
import {useEffect} from "react";

interface YouTubeChannelVideosProps {
  uploadsId: string;
}

const YouTubeChannelVideos = ({uploadsId}: YouTubeChannelVideosProps) => {
  const { isLoading, isError, data } = useGetYouTubeVideos(uploadsId);

  useEffect(() => {
    if (data) {
      console.log(data)
    }
  }, [data]);


  return (
    <div>YouTube Channel Videos
      {isLoading && (<div>YouTube loading...</div>)}

      {isError && (<div>An error has occurred</div>)}

    </div>
  )
}

export default YouTubeChannelVideos


const testVideos = {
  "kind": "youtube#playlistItemListResponse",
  "etag": "psQxArkK7ZQQpTccMWDSJuD0ViQ",
  "nextPageToken": "EAAaBlBUOkNESQ",
  "items": [
    {
      "kind": "youtube#playlistItem",
      "etag": "ty4MtqDoUJ1H2GpEwds0nBqRtfQ",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3Lk9yX0NPSHR5UnNn",
      "snippet": {
        "publishedAt": "2022-07-12T17:00:14Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "Rookie of the Year, MVP, & All-Stars 2022 Season Awards 🥇",
        "description": "During the week of #CDLChamps, we will be presenting three awards to the best players of #CDL2022:\n\n🔹 Rookie of the Year\n🔹 Most Valuable Player\n🔹 Fan voted All-Star 1st & 2nd Team\n\n🗓️ All-Star fan voting starts July 17th \n\nDon't forget to subscribe for more! — https://bit.ly/cdlsubscribe\nCheck out the playlist for all CDL 2022 matches — https://www.youtube.com/playlist?list=PLisfUdjySbZUOPL28JZDs0xzFrB_EODLV\nFollow Us on Twitter: https://twitter.com/CODLeague",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Or_COHtyRsg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Or_COHtyRsg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Or_COHtyRsg/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 0,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "Or_COHtyRsg"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "Or_COHtyRsg",
        "videoPublishedAt": "2022-07-12T17:00:14Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "MZk7eMGDIq3p46lOzy4MeteCV0E",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LkYycEtXU1RRc0hv",
      "snippet": {
        "publishedAt": "2022-07-11T20:00:04Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "COD's Dashing Heroes Save the Day 🔥| Top 5 Plays Major IV Week 3",
        "description": "Check out the top plays from the last week of Major IV Qualifiers. Which play was your favorite? 👀\n\nDon't forget to subscribe for more! — https://bit.ly/cdlsubscribe\nCheck out the playlist for all CDL 2022 matches — https://www.youtube.com/playlist?list=PLisfUdjySbZUOPL28JZDs0xzFrB_EODLV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/F2pKWSTQsHo/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/F2pKWSTQsHo/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/F2pKWSTQsHo/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/F2pKWSTQsHo/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/F2pKWSTQsHo/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 1,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "F2pKWSTQsHo"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "F2pKWSTQsHo",
        "videoPublishedAt": "2022-07-11T20:00:04Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "h9w7D-jVwAdFLGKryTQ7UFSNWFM",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LmRUVnZYVUp5ZGg0",
      "snippet": {
        "publishedAt": "2022-07-11T06:17:48Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@New York Subliners vs @LA Thieves    | Major IV Qualifiers Week 3 | Day 3",
        "description": "Welcome to Major IV Qualifiers Week 3! Catch all the action this weekend from June 24-26.\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\nMarquee Match presented by Mountain Dew \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/dTVvXUJydh4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/dTVvXUJydh4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/dTVvXUJydh4/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 2,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "dTVvXUJydh4"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "dTVvXUJydh4",
        "videoPublishedAt": "2022-07-11T06:17:48Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "DM0YkXL62SCi6AUHd2VK7HIOFyc",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LkNCQS0xUnVrNnlV",
      "snippet": {
        "publishedAt": "2022-07-11T06:01:27Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@LA Thieves vs @New York Subliners | Major IV Qualifiers Highlights  | Week 3 Day 3",
        "description": "Check out the highlights for​ ​New York Subliners  vs LA Thieves from Major IV Qualifiers Week 3 Day 3\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/CBA-1Ruk6yU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/CBA-1Ruk6yU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/CBA-1Ruk6yU/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 3,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "CBA-1Ruk6yU"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "CBA-1Ruk6yU",
        "videoPublishedAt": "2022-07-11T06:01:27Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "19zIqcbr21ghsJX-bi3iNyCPo5o",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3Lnd5NFdjT3FYVy1r",
      "snippet": {
        "publishedAt": "2022-07-11T04:29:47Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "Call of Duty League Major IV Qualifiers Week 3 | Day 3",
        "description": "Welcome to Major IV Qualifiers Week 3! Catch all the action this weekend from July 8-10.\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague    \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/wy4WcOqXW-k/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/wy4WcOqXW-k/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/wy4WcOqXW-k/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 4,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "wy4WcOqXW-k"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "wy4WcOqXW-k",
        "videoPublishedAt": "2022-07-11T04:29:47Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "_Ulg1dIMlyvIS7TziFT-HAy3Xkc",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LmdqY2R6Z21SYVVz",
      "snippet": {
        "publishedAt": "2022-07-11T03:48:20Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@OpTic Texas  vs  @Toronto Ultra  | Major IV Qualifiers Highlights  | Week 3 Day 3",
        "description": "Check out the highlights for​ OpTic Texas vs Toronto Ultra from Major IV Qualifiers Week 3 Day 3\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/gjcdzgmRaUs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/gjcdzgmRaUs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/gjcdzgmRaUs/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/gjcdzgmRaUs/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/gjcdzgmRaUs/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 5,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "gjcdzgmRaUs"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "gjcdzgmRaUs",
        "videoPublishedAt": "2022-07-11T03:48:20Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "YCNb-_Ox-PWJ2Vb_U_pU_4jsWQg",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3Lm45djFhd182WVVR",
      "snippet": {
        "publishedAt": "2022-07-11T03:43:33Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@OpTic Texas  vs @Toronto Ultra  | Major IV Qualifiers Week 3 | Day 3",
        "description": "Welcome to Major IV Qualifiers Week 3! Catch all the action this weekend from June 24-26.\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\nMarquee Match presented by Mountain Dew \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/n9v1aw_6YUQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/n9v1aw_6YUQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/n9v1aw_6YUQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 6,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "n9v1aw_6YUQ"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "n9v1aw_6YUQ",
        "videoPublishedAt": "2022-07-11T03:43:33Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "SbYoRnXo4O7raUv-ZyV6gdPh8Hs",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LmRNLU9wcVVyRnhF",
      "snippet": {
        "publishedAt": "2022-07-11T03:17:00Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@LA Guerrillas vs @London Royal Ravens  | Major IV Qualifiers Week 3 | Day 3",
        "description": "Welcome to Major IV Qualifiers Week 3! Catch all the action this weekend from June 24-26.\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\nMarquee Match presented by Mountain Dew \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/dM-OpqUrFxE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/dM-OpqUrFxE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/dM-OpqUrFxE/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 7,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "dM-OpqUrFxE"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "dM-OpqUrFxE",
        "videoPublishedAt": "2022-07-11T03:17:00Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "ISjcm4ZN5Vh82225TA91z2nMiTA",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3Ljh3cUlqZDBJUUc4",
      "snippet": {
        "publishedAt": "2022-07-11T03:03:03Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@LA Guerrillas  vs @London Royal Ravens  | Major IV Qualifiers Highlights  | Week 3 Day 3",
        "description": "Check out the highlights for LA Guerrrillas vs London Royal Ravens from Major IV Qualifiers Week 3 Day 3\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/8wqIjd0IQG8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/8wqIjd0IQG8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/8wqIjd0IQG8/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/8wqIjd0IQG8/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/8wqIjd0IQG8/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 8,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "8wqIjd0IQG8"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "8wqIjd0IQG8",
        "videoPublishedAt": "2022-07-11T03:03:03Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "C1mgUhtOdtnQytMjX6U21KYeTGg",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LkE3RU5Sc3JDNU0w",
      "snippet": {
        "publishedAt": "2022-07-10T04:29:34Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@Seattle Surge vs @Atlanta FaZe   | Major IV Qualifiers Week 3 | Day 2",
        "description": "Welcome to Major IV Qualifiers Week 3! Catch all the action this weekend from June 24-26.\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\nMarquee Match presented by Mountain Dew \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/A7ENRsrC5M0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/A7ENRsrC5M0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/A7ENRsrC5M0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 9,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "A7ENRsrC5M0"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "A7ENRsrC5M0",
        "videoPublishedAt": "2022-07-10T04:29:34Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "LtCsoOl-XsXK1OZmpLvlauiZQyA",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LmJVWjY2Mm01d0NB",
      "snippet": {
        "publishedAt": "2022-07-10T04:17:54Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@Seattle Surge  vs @Atlanta FaZe  | Major IV Qualifiers Highlights  | Week 3 Day 2",
        "description": "Check out the highlights for ​​​​Seattle Surge  vs Atlanta FaZe from Major IV Qualifiers Week 3 Day 2\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/bUZ662m5wCA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/bUZ662m5wCA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/bUZ662m5wCA/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/bUZ662m5wCA/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/bUZ662m5wCA/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 10,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "bUZ662m5wCA"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "bUZ662m5wCA",
        "videoPublishedAt": "2022-07-10T04:17:54Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "VBKVZZEpkt_dt7wmyghTM7w2wnw",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3Lk1ZNU9hdmRLUkJN",
      "snippet": {
        "publishedAt": "2022-07-10T03:53:15Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@LA Thieves  vs @Florida Mutineers  | Major IV Qualifiers Highlights  | Week 3 Day 2",
        "description": "Check out the highlights for ​​​​LA Thieves vs Florida Mutineers  from Major IV Qualifiers Week 3 Day 2\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/MY5OavdKRBM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/MY5OavdKRBM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/MY5OavdKRBM/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/MY5OavdKRBM/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/MY5OavdKRBM/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 11,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "MY5OavdKRBM"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "MY5OavdKRBM",
        "videoPublishedAt": "2022-07-10T03:53:15Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "TRMUiwXZk_SCA3gsOhAnnezMh0M",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3Lm9oMUdVYTVDNExJ",
      "snippet": {
        "publishedAt": "2022-07-10T03:15:51Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@LA Thieves vs  @Florida Mutineers  | Major IV Qualifiers Week 3 | Day 2",
        "description": "Welcome to Major IV Qualifiers Week 3! Catch all the action this weekend from June 24-26.\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/oh1GUa5C4LI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/oh1GUa5C4LI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/oh1GUa5C4LI/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 12,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "oh1GUa5C4LI"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "oh1GUa5C4LI",
        "videoPublishedAt": "2022-07-10T03:15:51Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "0bHiFCfEu-EuBHx-Rl0BQ0T42VA",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LmZ3WFRQQ1J3OFlB",
      "snippet": {
        "publishedAt": "2022-07-10T02:55:45Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "Call of Duty League Major IV Qualifiers Week 3 | Day 2",
        "description": "Welcome to Major IV Qualifiers Week 3! Catch all the action this weekend from July 8-10.\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague    \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/fwXTPCRw8YA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/fwXTPCRw8YA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/fwXTPCRw8YA/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 13,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "fwXTPCRw8YA"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "fwXTPCRw8YA",
        "videoPublishedAt": "2022-07-10T02:55:45Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "54V83UOnYkrU0dNMxTwshN2wapM",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LklIYnZhSjZxMnNF",
      "snippet": {
        "publishedAt": "2022-07-10T01:33:10Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@Boston Breach  vs @Toronto Ultra  | Major IV Qualifiers Highlights  | Week 3 Day 2",
        "description": "Check out the highlights for ​​​Boston Breach  vs Toronto Ultra from Major IV Qualifiers Week 3 Day 2\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/IHbvaJ6q2sE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/IHbvaJ6q2sE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/IHbvaJ6q2sE/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 14,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "IHbvaJ6q2sE"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "IHbvaJ6q2sE",
        "videoPublishedAt": "2022-07-10T01:33:10Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "qEZIC9AwfJnVCRNttSAYgamUZBc",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LlNMbV9LSEF6eXVV",
      "snippet": {
        "publishedAt": "2022-07-10T01:21:14Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@Boston Breach vs @Toronto Ultra   | Major IV Qualifiers Week 3 | Day 2",
        "description": "Welcome to Major IV Qualifiers Week 3! Catch all the action this weekend from June 24-26.\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/SLm_KHAzyuU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/SLm_KHAzyuU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/SLm_KHAzyuU/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/SLm_KHAzyuU/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/SLm_KHAzyuU/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 15,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "SLm_KHAzyuU"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "SLm_KHAzyuU",
        "videoPublishedAt": "2022-07-10T01:21:14Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "R1kapTZx_Gxegxyz4GWspPbNWlk",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LjZUeC1YUE1JNUF3",
      "snippet": {
        "publishedAt": "2022-07-09T23:24:56Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@Paris Legion  vs  @Minnesota RØKKR   | Major IV Qualifiers Highlights  | Week 3 Day 2",
        "description": "Check out the highlights for ​​Paris Legion  vs Minnesota RØKKR from Major IV Qualifiers Week 3 Day 2\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/6Tx-XPMI5Aw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/6Tx-XPMI5Aw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/6Tx-XPMI5Aw/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 16,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "6Tx-XPMI5Aw"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "6Tx-XPMI5Aw",
        "videoPublishedAt": "2022-07-09T23:24:56Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "ythYv9dJkzqqKWDO7Ld0dr3z2_0",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LjduM3R4Nm16S0VR",
      "snippet": {
        "publishedAt": "2022-07-09T23:15:41Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@Paris Legion  vs @Minnesota RØKKR  | Major IV Qualifiers Week 3 | Day 2",
        "description": "Welcome to Major IV Qualifiers Week 3! Catch all the action this weekend from June 24-26.\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/7n3tx6mzKEQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/7n3tx6mzKEQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/7n3tx6mzKEQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 17,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "7n3tx6mzKEQ"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "7n3tx6mzKEQ",
        "videoPublishedAt": "2022-07-09T23:15:41Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "RZc5CkEF01to1NDScl76n61jNSQ",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LlVQSDlrX2lNS1Zr",
      "snippet": {
        "publishedAt": "2022-07-09T05:01:46Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@Seattle Surge  vs @Minnesota RØKKR  | Major IV Qualifiers Week 3 | Day 1",
        "description": "Welcome to Major IV Qualifiers Week 3! Catch all the action this weekend from June 24-26.\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/UPH9k_iMKVk/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/UPH9k_iMKVk/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/UPH9k_iMKVk/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 18,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "UPH9k_iMKVk"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "UPH9k_iMKVk",
        "videoPublishedAt": "2022-07-09T05:01:46Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "yf4-r0WE7T86enRj2caW7WG9h4g",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3Lk9oOE4wV1hQcEo4",
      "snippet": {
        "publishedAt": "2022-07-09T03:13:29Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@Seattle Surge  vs @Minnesota RØKKR   | Major IV Qualifiers Highlights  | Week 3 Day 1",
        "description": "Check out the highlights for ​​Seattle Surge  vs Minnesota RØKKR from Major IV Qualifiers Week 3 Day 1\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Oh8N0WXPpJ8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Oh8N0WXPpJ8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Oh8N0WXPpJ8/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/Oh8N0WXPpJ8/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/Oh8N0WXPpJ8/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 19,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "Oh8N0WXPpJ8"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "Oh8N0WXPpJ8",
        "videoPublishedAt": "2022-07-09T03:13:29Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "GJFwgPnGwGWvbJaZWn6ktZxAg-g",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LnRQSlRaVEVNZnpr",
      "snippet": {
        "publishedAt": "2022-07-09T02:25:35Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@Florida Mutineers  vs  @Paris Legion  | Major IV Qualifiers Highlights  | Week 3 Day 1",
        "description": "Check out the highlights for ​Florida Mutineers  vs  Paris Legion from Major IV Qualifiers Week 3 Day 1\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/tPJTZTEMfzk/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/tPJTZTEMfzk/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/tPJTZTEMfzk/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/tPJTZTEMfzk/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/tPJTZTEMfzk/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 20,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "tPJTZTEMfzk"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "tPJTZTEMfzk",
        "videoPublishedAt": "2022-07-09T02:25:35Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "9XtxJ68UJM2v5yXH3veADvJ5U9I",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LlB1Q1A1TXBxM2Fz",
      "snippet": {
        "publishedAt": "2022-07-09T01:31:37Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "Call of Duty League Major IV Qualifiers Week 3 | Day 1",
        "description": "Welcome to Major IV Qualifiers Week 3! Catch all the action this weekend from July 8-10.\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague    \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/PuCP5Mpq3as/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/PuCP5Mpq3as/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/PuCP5Mpq3as/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 21,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "PuCP5Mpq3as"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "PuCP5Mpq3as",
        "videoPublishedAt": "2022-07-09T01:31:37Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "mFSK_hvA5CJciPDq_WR0LhsvayA",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LmpJZXZkbFFZUTFN",
      "snippet": {
        "publishedAt": "2022-07-09T01:12:44Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@Florida Mutineers vs @Paris Legion  | Major IV Qualifiers Week 3 | Day 1",
        "description": "Welcome to Major IV Qualifiers Week 3! Catch all the action this weekend from June 24-26.\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/jIevdlQYQ1M/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/jIevdlQYQ1M/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/jIevdlQYQ1M/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 22,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "jIevdlQYQ1M"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "jIevdlQYQ1M",
        "videoPublishedAt": "2022-07-09T01:12:44Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "fji_7RRd7cps4F1_O2Gv4zx-x2U",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LkZBcXBDR2Y3cGpV",
      "snippet": {
        "publishedAt": "2022-07-08T23:08:22Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@Atlanta FaZe  vs  @London Royal Ravens | Major IV Qualifiers Highlights  | Week 3 Day 1",
        "description": "Check out the highlights for Atlanta FaZe  vs  London Royal Ravens   from Major IV Qualifiers Week 3 Day 1\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/FAqpCGf7pjU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/FAqpCGf7pjU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/FAqpCGf7pjU/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 23,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "FAqpCGf7pjU"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "FAqpCGf7pjU",
        "videoPublishedAt": "2022-07-08T23:08:22Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "O9o1mkzBzu1qdyWJpTG54tl_rYM",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LnVuR1k1cEYzbTcw",
      "snippet": {
        "publishedAt": "2022-07-08T23:04:52Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@Atlanta FaZe  vs @London Royal Ravens   | Major IV Qualifiers Week 3 | Day 1",
        "description": "Welcome to Major IV Qualifiers Week 3! Catch all the action this weekend from June 24-26.\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/unGY5pF3m70/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/unGY5pF3m70/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/unGY5pF3m70/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 24,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "unGY5pF3m70"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "unGY5pF3m70",
        "videoPublishedAt": "2022-07-08T23:04:52Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "JNXpB-tAWt0dytBSdOWDAHHF8kQ",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3Lkd5akw0NHVFU3Z3",
      "snippet": {
        "publishedAt": "2022-07-07T19:07:54Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "\"Can You Call Me The Tuscan GOD?\" 😏 | Comms Check – Major IV Week 2",
        "description": "We're back with another episode of Comms Check. Listen in on all the comms that went down during week 2 of Major IV Qualifiers!\n\nDon't forget to subscribe for more! — https://bit.ly/cdlsubscribe\nCheck out the playlist for all CDL 2022 matches — https://www.youtube.com/watch?v=Yq1FKSWP9yI&list=PLisfUdjySbZXeLv_k3zVZJx6gdrcgCOXj",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/GyjL44uESvw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/GyjL44uESvw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/GyjL44uESvw/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/GyjL44uESvw/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/GyjL44uESvw/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 25,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "GyjL44uESvw"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "GyjL44uESvw",
        "videoPublishedAt": "2022-07-07T19:07:54Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "NUFivAq_szCmMh1yNn5hUuaane8",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LlFGWWNRUkNkdjJz",
      "snippet": {
        "publishedAt": "2022-07-06T18:00:16Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "$10,000 On The LINE?! 💸😱",
        "description": "Nothing like a sweet bonus on top of some much-needed CDL points. This week, there are four  matches with $10K on the line. Who's cashin' out? Catch all the action this weekend from July 8-10.\n\nFollow Us on Twitter! https://twitter.com/CODLeague\nDon't forget to subscribe for more! — https://bit.ly/cdlsubscribe\nCheck out the playlist for all CDL 2022 match highlights — https://www.youtube.com/watch?v=FS_j4IW0Oj4&list=PLisfUdjySbZXeLv_k3zVZJx6gdrcgCOXj",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/QFYcQRCdv2s/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/QFYcQRCdv2s/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/QFYcQRCdv2s/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/QFYcQRCdv2s/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/QFYcQRCdv2s/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 26,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "QFYcQRCdv2s"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "QFYcQRCdv2s",
        "videoPublishedAt": "2022-07-06T18:00:16Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "QpGIp7t1mzJ8_WCYopoTyUJDMJ4",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3Lm1QM1NtR01qLTNv",
      "snippet": {
        "publishedAt": "2022-07-05T18:12:17Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "COD Gods With the SPICIEST Plays | Top 5 Plays Major IV Week 2",
        "description": "Check out the top plays from the Major IV Qualifiers Week 2. Which play was your favorite? 👀\n\nDon't forget to subscribe for more! — https://bit.ly/cdlsubscribe\nCheck out the playlist for all CDL 2022 matches — https://www.youtube.com/playlist?list=PLisfUdjySbZUOPL28JZDs0xzFrB_EODLV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/mP3SmGMj-3o/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/mP3SmGMj-3o/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/mP3SmGMj-3o/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/mP3SmGMj-3o/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/mP3SmGMj-3o/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 27,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "mP3SmGMj-3o"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "mP3SmGMj-3o",
        "videoPublishedAt": "2022-07-05T18:12:17Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "hiILnc9g72YlceXLQgRtSfHzUaM",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3Ljg5dkNtdEtpMTJZ",
      "snippet": {
        "publishedAt": "2022-07-04T01:41:28Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@OpTic Texas  vs  @New York Subliners   | Major IV Qualifiers Highlights  | Week 2 Day 3",
        "description": "Check out the highlights for ​​OpTic Texas vs  New York Subliners from Major IV Qualifiers Week 2 Day 3\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/89vCmtKi12Y/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/89vCmtKi12Y/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/89vCmtKi12Y/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/89vCmtKi12Y/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/89vCmtKi12Y/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 28,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "89vCmtKi12Y"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "89vCmtKi12Y",
        "videoPublishedAt": "2022-07-04T01:41:28Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "IxKqHxyoYlz65LffupRl-EEsF9c",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LlNteFhIS1k3eVJN",
      "snippet": {
        "publishedAt": "2022-07-04T01:37:33Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@OpTic Texas  vs @New York Subliners   | Major IV Qualifiers Week 2 | Day 3",
        "description": "Welcome to Major IV Qualifiers Week 2! Catch all the action this weekend from June 24-26.\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/SmxXHKY7yRM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/SmxXHKY7yRM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/SmxXHKY7yRM/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/SmxXHKY7yRM/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/SmxXHKY7yRM/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 29,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "SmxXHKY7yRM"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "SmxXHKY7yRM",
        "videoPublishedAt": "2022-07-04T01:37:33Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "yYWrM-s_7DPu8abWLXcARdcJ2Pg",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3Lk04eHJrS24wRVlr",
      "snippet": {
        "publishedAt": "2022-07-04T00:22:03Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@LA Thieves vs @Paris Legion   | Major IV Qualifiers Highlights  | Week 2 Day 3",
        "description": "Check out the highlights for ​LA Thieves vs Paris Legion from Major IV Qualifiers Week 2 Day 3\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/M8xrkKn0EYk/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/M8xrkKn0EYk/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/M8xrkKn0EYk/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/M8xrkKn0EYk/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/M8xrkKn0EYk/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 30,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "M8xrkKn0EYk"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "M8xrkKn0EYk",
        "videoPublishedAt": "2022-07-04T00:22:03Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "oSnKoXkQplsGfVRWR-f_sthZgj4",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3Lk1zQ3NWbFRQRUJj",
      "snippet": {
        "publishedAt": "2022-07-04T00:16:02Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@LA Thieves  vs @Paris Legion  | Major IV Qualifiers Week 2 | Day 3",
        "description": "Welcome to Major IV Qualifiers Week 2! Catch all the action this weekend from June 24-26.\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/MsCsVlTPEBc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/MsCsVlTPEBc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/MsCsVlTPEBc/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 31,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "MsCsVlTPEBc"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "MsCsVlTPEBc",
        "videoPublishedAt": "2022-07-04T00:16:02Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "gwT6rMvKnS69HSeFjkg-1Mdwjyo",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3Ll90b2hLM1ByZ1cw",
      "snippet": {
        "publishedAt": "2022-07-03T23:42:20Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "Call of Duty League Major IV Qualifiers Week 2 | Day 3",
        "description": "Welcome to Major IV Qualifiers Week 2! Catch all the action this weekend from July 1-3.\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague    \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/_tohK3PrgW0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/_tohK3PrgW0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/_tohK3PrgW0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 32,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "_tohK3PrgW0"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "_tohK3PrgW0",
        "videoPublishedAt": "2022-07-03T23:42:20Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "AmL1aSpYDWJ95moS5VTDfQt9wsw",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LkFDc0xUckx5a3FV",
      "snippet": {
        "publishedAt": "2022-07-03T22:49:24Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@Boston Breach vs @LA Guerrillas   | Major IV Qualifiers Highlights  | Week 2 Day 3",
        "description": "Check out the highlights for ​Seattle Surge vs New York Subliners from Major IV Qualifiers Week 2 Day 3\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/ACsLTrLykqU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/ACsLTrLykqU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/ACsLTrLykqU/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 33,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "ACsLTrLykqU"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "ACsLTrLykqU",
        "videoPublishedAt": "2022-07-03T22:49:24Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "nNtWVjZYuyiIYz-O4F6gt4-9YNg",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LjJnZU1FMkZTTVJj",
      "snippet": {
        "publishedAt": "2022-07-03T22:41:48Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@Boston Breach  vs @LA Guerrillas  | Major IV Qualifiers Week 2 | Day 3",
        "description": "Welcome to Major IV Qualifiers Week 2! Catch all the action this weekend from June 24-26.\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/2geME2FSMRc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/2geME2FSMRc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/2geME2FSMRc/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 34,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "2geME2FSMRc"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "2geME2FSMRc",
        "videoPublishedAt": "2022-07-03T22:41:48Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "dlXCvROYsvWvZe7mqc0NHf3mtYw",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LjBwX0Q1QkRGR1Q4",
      "snippet": {
        "publishedAt": "2022-07-03T03:43:57Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "Call of Duty League Major IV Qualifiers Week 2 | Day 2",
        "description": "Welcome to Major IV Qualifiers Week 2! Catch all the action this weekend from July 1-3.\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague    \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/0p_D5BDFGT8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/0p_D5BDFGT8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/0p_D5BDFGT8/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 35,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "0p_D5BDFGT8"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "0p_D5BDFGT8",
        "videoPublishedAt": "2022-07-03T03:43:57Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "3v2p1qCWIgYw_XKZDZM3xsQ17BY",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LmFsYTFFZXBJS1hJ",
      "snippet": {
        "publishedAt": "2022-07-03T03:15:36Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@Atlanta FaZe  vs @LA Guerrillas  | Major IV Qualifiers Highlights  | Week 2 Day 2",
        "description": "Check out the highlights for Atlanta FaZe vs LA Guerrillas from Major IV Qualifiers Week 2 Day 2\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/ala1EepIKXI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/ala1EepIKXI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/ala1EepIKXI/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/ala1EepIKXI/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/ala1EepIKXI/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 36,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "ala1EepIKXI"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "ala1EepIKXI",
        "videoPublishedAt": "2022-07-03T03:15:36Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "l4Yihhs1Dz-Bd0VUsJjvZkf1tUY",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LnlJTXhjXzhqOXZj",
      "snippet": {
        "publishedAt": "2022-07-03T03:07:31Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@Atlanta FaZe vs @LA Guerrillas | Major IV Qualifiers Week 2 | Day 2",
        "description": "Welcome to Major IV Qualifiers Week 2! Catch all the action this weekend from June 24-26.\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/yIMxc_8j9vc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/yIMxc_8j9vc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/yIMxc_8j9vc/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 37,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "yIMxc_8j9vc"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "yIMxc_8j9vc",
        "videoPublishedAt": "2022-07-03T03:07:31Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "98RGXIv-VnutMDzxtLQct-Czmg0",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LjJuZk5Rd0liZGFr",
      "snippet": {
        "publishedAt": "2022-07-03T02:59:31Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@Seattle Surge  vs @New York Subliners  | Major IV Qualifiers Highlights  | Week 2 Day 2",
        "description": "Check out the highlights for ​Seattle Surge vs New York Subliners from Major IV Qualifiers Week 2 Day 2\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/2nfNQwIbdak/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/2nfNQwIbdak/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/2nfNQwIbdak/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/2nfNQwIbdak/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/2nfNQwIbdak/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 38,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "2nfNQwIbdak"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "2nfNQwIbdak",
        "videoPublishedAt": "2022-07-03T02:59:31Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "3T2Lc9D0FRulbwh1RNDnsCFs7YM",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LldnTzM5cDF3Q0dF",
      "snippet": {
        "publishedAt": "2022-07-03T02:06:52Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@OpTic Texas  vs  @Paris Legion   | Major IV Qualifiers Highlights  | Week 2 Day 2",
        "description": "Check out the highlights for OpTic Texas vs Paris Legion from Major IV Qualifiers Week 2 Day 2\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/WgO39p1wCGE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/WgO39p1wCGE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/WgO39p1wCGE/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/WgO39p1wCGE/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/WgO39p1wCGE/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 39,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "WgO39p1wCGE"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "WgO39p1wCGE",
        "videoPublishedAt": "2022-07-03T02:06:52Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "m242GXj9liICaxUCLLNGueHL7DM",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LlVXd2dXWGJXU25v",
      "snippet": {
        "publishedAt": "2022-07-03T01:59:49Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@Seattle Surge vs @New York Subliners  | Major IV Qualifiers Week 2 | Day 2",
        "description": "Welcome to Major IV Qualifiers Week 2! Catch all the action this weekend from June 24-26.\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\nMarquee Match presented by Mountain Dew \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/UWwgWXbWSno/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/UWwgWXbWSno/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/UWwgWXbWSno/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/UWwgWXbWSno/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/UWwgWXbWSno/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 40,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "UWwgWXbWSno"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "UWwgWXbWSno",
        "videoPublishedAt": "2022-07-03T01:59:49Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "oCKECd7AxDyd8iN9Buliew9pCzc",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3Ljk1SUtyWko0Sndn",
      "snippet": {
        "publishedAt": "2022-07-03T00:33:49Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@OpTic Texas  vs @Paris Legion  | Major IV Qualifiers Week 2 | Day 2",
        "description": "Welcome to Major IV Qualifiers Week 2! Catch all the action this weekend from June 24-26.\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/95IKrZJ4Jwg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/95IKrZJ4Jwg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/95IKrZJ4Jwg/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 41,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "95IKrZJ4Jwg"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "95IKrZJ4Jwg",
        "videoPublishedAt": "2022-07-03T00:33:49Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "3n7EA0xD-CzAnr8pMjY4xIT0u84",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3Lmp6aEl1UVBqcUcw",
      "snippet": {
        "publishedAt": "2022-07-03T00:23:55Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@Florida Mutineers vs  @London Royal Ravens  | Major IV Qualifiers Highlights  | Week 2 Day 2",
        "description": "Check out the highlights for ​Florida Mutineers vs London Royal Ravens from Major IV Qualifiers Week 2 Day 1\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/jzhIuQPjqG0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/jzhIuQPjqG0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/jzhIuQPjqG0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 42,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "jzhIuQPjqG0"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "jzhIuQPjqG0",
        "videoPublishedAt": "2022-07-03T00:23:55Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "c3FMJyARmxR91hCh0Nc_kr0D8aY",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LjZxeV9tV1J2eFA0",
      "snippet": {
        "publishedAt": "2022-07-02T23:42:20Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@Florida Mutineers  vs @London Royal Ravens   | Major IV Qualifiers Week 2 | Day 2",
        "description": "Welcome to Major IV Qualifiers Week 2! Catch all the action this weekend from June 24-26.\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/6qy_mWRvxP4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/6qy_mWRvxP4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/6qy_mWRvxP4/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/6qy_mWRvxP4/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/6qy_mWRvxP4/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 43,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "6qy_mWRvxP4"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "6qy_mWRvxP4",
        "videoPublishedAt": "2022-07-02T23:42:20Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "-r7YmtDpKuoLbzkASikYz6oq-YE",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3Ll82Q2N1U1ZzMmVn",
      "snippet": {
        "publishedAt": "2022-07-02T01:59:39Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@Seattle Surge vs @Boston Breach   | Major IV Qualifiers Highlights  | Week 2 Day 1",
        "description": "Check out the highlights for Seattle Surge vs Boston Breach from Major IV Qualifiers Week 1 Day 1\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/_6CcuSVs2eg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/_6CcuSVs2eg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/_6CcuSVs2eg/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/_6CcuSVs2eg/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/_6CcuSVs2eg/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 44,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "_6CcuSVs2eg"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "_6CcuSVs2eg",
        "videoPublishedAt": "2022-07-02T01:59:39Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "8zP8Pp4u1tBaxixwFUUouMq66G0",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3Lk5PM0NOb2hWTUpV",
      "snippet": {
        "publishedAt": "2022-07-02T01:55:28Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@Seattle Surge vs  @Boston Breach  | Major IV Qualifiers Week 2 | Day 1",
        "description": "Welcome to Major IV Qualifiers Week 2! Catch all the action this weekend from June 24-26.\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/NO3CNohVMJU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/NO3CNohVMJU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/NO3CNohVMJU/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/NO3CNohVMJU/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/NO3CNohVMJU/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 45,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "NO3CNohVMJU"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "NO3CNohVMJU",
        "videoPublishedAt": "2022-07-02T01:55:28Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "s7r2Y29-affO9MWi-soEFN-fJ1E",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LnI5X2VKQ1NpaU5N",
      "snippet": {
        "publishedAt": "2022-07-02T01:44:42Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@Minnesota RØKKR  vs @London Royal Ravens | Major IV Qualifiers Highlights  | Week 2 Day 1",
        "description": "Check out the highlights for Minnesota Røkkr  vs London Royal Ravens from Major IV Qualifiers Week 2 Day 1\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/r9_eJCSiiNM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/r9_eJCSiiNM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/r9_eJCSiiNM/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/r9_eJCSiiNM/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/r9_eJCSiiNM/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 46,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "r9_eJCSiiNM"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "r9_eJCSiiNM",
        "videoPublishedAt": "2022-07-02T01:44:42Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "9W1yRgdYwYxf9-lbjc8wZM5BZDg",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3Llo5YnhaNkloOVFF",
      "snippet": {
        "publishedAt": "2022-07-02T01:33:10Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "@Minnesota RØKKR vs @London Royal Ravens  | Major IV Qualifiers Week 2 | Day 1",
        "description": "Welcome to Major IV Qualifiers Week 2! Catch all the action this weekend from June 24-26.\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Z9bxZ6Ih9QE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Z9bxZ6Ih9QE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Z9bxZ6Ih9QE/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 47,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "Z9bxZ6Ih9QE"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "Z9bxZ6Ih9QE",
        "videoPublishedAt": "2022-07-02T01:33:10Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "7dLT2RGFk7u6ArJyTCk0o7JR0iI",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3Li1yOFhFU3F5NkxZ",
      "snippet": {
        "publishedAt": "2022-07-02T01:17:20Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "​@Atlanta FaZe  vs  @Toronto Ultra    | Major IV Qualifiers Highlights  | Week 2 Day 1",
        "description": "Check out the highlights for Toronto Ultra vs Atlanta FaZe from Major IV Qualifiers Week 2 Day 1\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague  \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/-r8XESqy6LY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/-r8XESqy6LY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/-r8XESqy6LY/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/-r8XESqy6LY/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/-r8XESqy6LY/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 48,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "-r8XESqy6LY"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "-r8XESqy6LY",
        "videoPublishedAt": "2022-07-02T01:17:20Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "oAN5Ed6FCfPTWfC_DVydSiKfzTk",
      "id": "VVViTElxdjlQdWh5cDlfWmpWdGZPeTd3LllCbGVGOHBiamVn",
      "snippet": {
        "publishedAt": "2022-07-02T00:10:49Z",
        "channelId": "UCbLIqv9Puhyp9_ZjVtfOy7w",
        "title": "Call of Duty League Major IV Qualifiers Week 2 | Day 1",
        "description": "Welcome to Major IV Qualifiers Week 2! Catch all the action this weekend from July 1-3.\n\nLink your Activision Account to earn Viewership Rewards during live Call of Duty League Broadcasts — https://www.youtube.com/account_sharing  \nKeep up with the Call of Duty League schedule — https://www.callofdutyleague.com/en-us/schedule?utm_source=cdlweb&utm_medium=navigationbar&utm_campaign=general \nFollow Us on Twitter: https://twitter.com/CODLeague    \n\n2022 CDL Rosters:\n\nAtlanta FaZe\n— Simp, aBeZy, Cellium, Arcitys\nBoston Breach\n— Methodz, TJHaly, Nero, Vivid\nOpTic Texas \n— Scump, Dashy, Shotzzy, Prolute\nNew York Subliners \n— Crimsix, Hydra, Paulehx, Kismet\nMinnesota Røkkr \n— Priestahh, Attach, Standy, Havok\nSeattle Surge \n— Accuracy, Mack, Pred, Sib\nLA Thieves\n— Drazah, Kenny, Octane, Envoy\nLondon Royal Ravens\n— Afro, Zer0, Nastie, Harry\nToronto Ultra\n— Insight, Cammy, Bance, CleanX\nLos Angeles Guerrillas\n— SlasheR, Spart, Asim, Huke\nFlorida Mutineers (F3F3)\n— Skyz, Owakening, Majormaniak, 2Real\nParis Legion\n— Temp, John, Jimbo, GRVTY\n\n#CDL2022 #MajorIV",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/YBleF8pbjeg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/YBleF8pbjeg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/YBleF8pbjeg/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Call of Duty League",
        "playlistId": "UUbLIqv9Puhyp9_ZjVtfOy7w",
        "position": 49,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "YBleF8pbjeg"
        },
        "videoOwnerChannelTitle": "Call of Duty League",
        "videoOwnerChannelId": "UCbLIqv9Puhyp9_ZjVtfOy7w"
      },
      "contentDetails": {
        "videoId": "YBleF8pbjeg",
        "videoPublishedAt": "2022-07-02T00:10:49Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    }
  ],
  "pageInfo": {
    "totalResults": 9431,
    "resultsPerPage": 50
  }
}