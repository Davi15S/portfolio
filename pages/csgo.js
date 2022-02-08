import React from 'react';
import CSGO from '../components/CSGO';
import MainPanel from '../components/MainPanel';

function csgo({listed, profile, stats}) {
    return (
      <div>
          <CSGO profile={profile.response.players} stats={stats.playerstats.stats}/>
      </div>
    );
}

export async function getServerSideProps(context){
  const listed = await fetch("http://steamcommunity.com/inventory/76561198302654445/730/2?l=english&count=5000").then(res => res.json())
  const profile = await fetch("http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=190A42E4E88D9FF02CFB23F49D4F0CCC&steamids=76561198302654445").then(res => res.json())
  
  const steamApiKey = process.env.STEAM_APIKEY
  const stats = await fetch(`http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=${steamApiKey}&steamid=76561198302654445`).then(res => res.json())

  console.log(stats);
  return{
    props:{
      listed: listed,
      profile: profile,
      stats: stats
    }
  }
}

export default csgo;
